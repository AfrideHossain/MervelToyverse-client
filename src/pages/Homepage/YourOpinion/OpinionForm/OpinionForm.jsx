import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContextProvider";
import { toast } from "react-toastify";

const OpinionForm = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [opinion, setOpinion] = useState("");
  const opinionPostHandler = (event) => {
    event.preventDefault();
    let body = {
      name,
      email: user?.email,
      photo: user?.photoURL,
      opinion,
    };
    fetch(`${import.meta.env.VITE_BACKEND}/opinion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Your opinion posted 🫡");
        } else {
          toast.error("😪 Sorry, We can't post your opinion");
        }
      });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl mb-4 text-center font-medium w-full">
        Share your opinion with us
      </h1>
      <form
        className="flex flex-col items-center w-full space-y-3"
        onSubmit={opinionPostHandler}
      >
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Your name"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <textarea
            placeholder="Your Opinion"
            name="opinion"
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            className="textarea textarea-info w-full max-w-xs h-"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="submit"
            value="Post"
            className="btn w-full bg-[#ed1d24] border-0 hover:bg-red-700"
          />
        </div>
      </form>
    </div>
  );
};

export default OpinionForm;
