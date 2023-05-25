import { useContext, useEffect, useState } from "react";
import spiderBg from "../../assets/images/spiderPosterBg.jpg";
import { AuthContext } from "../../context/AuthContextProvider";
import Spinner from "../../Shared/Spinner/Spinner";
import { toast } from "react-toastify";

const AddToy = () => {
  const divStyle = {
    backgroundImage: `url(${spiderBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
  };
  const { user, loading } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sellerName, setSellerName] = useState();
  const [sellerEmail, setSellerEmail] = useState();
  const [quantity, setQuantity] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");
  useEffect(() => {
    setSellerName(user?.displayName);
    setSellerEmail(user?.email);
  }, [user]);
  const addToyHandler = (event) => {
    event.preventDefault();
    const bodyData = {
      sellerName,
      sellerEmail,
      name,
      price,
      description,
      quantity,
      category,
      rating,
      picture,
    };
    console.log(bodyData);
    fetch(`${import.meta.env.VITE_BACKEND}/addtoy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("🤩 Yay! Your toy added.");
        } else {
          toast.error(`😪 We can't added your toy.`);
        }
      });
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div
        style={divStyle}
        className="flex justify-center items-center h-full p-8 "
      >
        <div className="w-full m-5 md:max-w-md p-3 bg-black rounded-md">
          <h1 className="text-4xl font-bold text-red-600 text-center">
            Add A Toy
          </h1>
          <form className="mt-3" onSubmit={addToyHandler}>
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
                readOnly
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
                readOnly
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
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                name="Name"
                className="input input-bordered w-full max-w-full"
              />
            </div>
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text text-white text-base">
                  Photo Url of your toy
                </span>
              </label>
              <input
                type="text"
                placeholder="Photo Url"
                value={picture}
                onChange={(event) => {
                  setPicture(event.target.value);
                }}
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
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="form-control w-full max-w-full flex-row gap-4">
              <div>
                <label className="label">
                  <span className="label-text text-white text-base">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={price}
                  onChange={(event) => {
                    setPrice(parseFloat(event.target.value));
                  }}
                  className="input input-bordered w-full max-w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-white text-base">
                    Rating
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  value={rating}
                  onChange={(event) => {
                    setRating(parseFloat(event.target.value));
                  }}
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
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
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
                  onChange={(event) => {
                    setQuantity(parseInt(event.target.value));
                  }}
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
  }
};

export default AddToy;
