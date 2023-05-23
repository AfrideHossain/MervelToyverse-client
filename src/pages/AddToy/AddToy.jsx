import { useContext } from "react";
import spiderBg from "../../assets/images/spiderPosterBg.jpg";
import { AuthContext } from "../../context/AuthContextProvider";

const AddToy = () => {
  const divStyle = {
    backgroundImage: `url(${spiderBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
  };
  const { user } = useContext(AuthContext);

  const addToyHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const bodyData = {
      sellerName,
      sellerEmail,
      name,
      price,
      description,
      quantity,
      rating,
    };
    fetch(`${import.meta.env.VITE_BACKEND}/addtoy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div style={divStyle} className="flex justify-center items-center h-screen">
      <div className="w-full m-5 md:max-w-md p-3 bg-black rounded-md">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Add A Toy
        </h1>
        <form className="mt-3" onSubmit={() => addToyHandler()}>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-white text-base">
                Seller name?
              </span>
            </label>
            <input
              type="text"
              placeholder="Seller name"
              value={user?.displayName}
              name="sellerName"
              className="input input-bordered w-full max-w-full"
            />
          </div>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-white text-base">
                Seller email?
              </span>
            </label>
            <input
              type="email"
              placeholder="Seller email"
              value={user?.email}
              name="sellerEmail"
              className="input input-bordered w-full max-w-full"
            />
          </div>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-white text-base">
                What is Toy name?
              </span>
            </label>
            <input
              type="text"
              placeholder="Toy name"
              name="Name"
              className="input input-bordered w-full max-w-full"
            />
          </div>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-white text-base">
                Write a description for your toy?
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-16"
              placeholder="Detail description"
              name="description"
            ></textarea>
          </div>
          <div className="form-control w-full max-w-full flex-row gap-4">
            <div>
              <label className="label">
                <span className="label-text text-white text-base">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full max-w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white text-base">Rating</span>
              </label>
              <input
                type="number"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full max-w-full"
              />
            </div>
          </div>
          <div className="form-control w-full max-w-full flex-row gap-4">
            <div>
              <label className="label">
                <span className="label-text text-white text-base">
                  Sub category
                </span>
              </label>
              <input
                type="text"
                placeholder="Sub category"
                name="category"
                className="input input-bordered w-full max-w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white text-base">
                  Available quantity
                </span>
              </label>
              <input
                type="number"
                placeholder="Available quantity"
                name="quantity"
                className="input input-bordered w-full max-w-full"
              />
            </div>
          </div>
          <div className="form-control w-full max-w-full mt-4">
            <input
              type="submit"
              value="Add"
              className="btn bg-[#ed1d24] border-0 hover:bg-red-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
