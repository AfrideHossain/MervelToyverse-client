import { useLoaderData } from "react-router-dom";
import spiderBg from "../../assets/images/spiderPosterBg.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
const UpdateToy = () => {
  const divStyle = {
    backgroundImage: `url(${spiderBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
  };
  const toyInfo = useLoaderData();
  const [description, setDescription] = useState(toyInfo.description);
  const [price, setPrice] = useState(toyInfo.price);
  const [quantity, setQuantity] = useState(toyInfo.quantity);

  const updateHandler = (e) => {
    e.preventDefault();
    // const form = e.target;
    fetch(`${import.meta.env.VITE_BACKEND}/toy/${toyInfo._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price, quantity, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("🤩 Yay! Your toy updated.");
        } else {
          toast.error(`😪 We can't update your toy.`);
        }
      });
  };
  return (
    <div
      style={divStyle}
      className="flex justify-center items-center min-h-screen"
    >
      <div className="w-full m-5 md:max-w-md p-3 bg-black rounded-md">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Update Toy Details
        </h1>
        <form className="mt-3" onSubmit={updateHandler}>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-white text-base">Toy name</span>
            </label>
            <input
              type="text"
              placeholder="Toy name"
              value={toyInfo.name}
              className="input input-bordered w-full max-w-full"
              readOnly
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
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
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
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
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
                value={toyInfo.rating}
                readOnly
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
                value={toyInfo.category}
                readOnly
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
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                className="input input-bordered w-full max-w-full"
              />
            </div>
          </div>
          <div className="form-control w-full max-w-full mt-4">
            <input
              type="submit"
              value="Update"
              className="btn bg-[#ed1d24] border-0 hover:bg-red-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
