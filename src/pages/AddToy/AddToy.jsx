import spiderBg from "../../assets/images/spiderPosterBg.jpg";

const AddToy = () => {
  const divStyle = {
    backgroundImage: `url(${spiderBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
  };
  return (
    <div style={divStyle} className="flex justify-center items-center h-screen">
      <div className="w-full m-5 md:max-w-md p-3 bg-black rounded-md">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Add A Toy
        </h1>
        <form className="mt-3">
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text text-white text-base">
                Seller name?
              </span>
            </label>
            <input
              type="text"
              placeholder="Seller name"
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
                type="number"
                placeholder="Sub category"
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
