import spiderBg from "../../assets/images/spiderPosterBg.jpg";
import { HiStar } from "react-icons/hi2";
const ToyDetails = () => {
  const divStyle = {
    backgroundImage: `url(${spiderBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
  };

  const toy = {
    id: 1,
    picture: "https://i.ibb.co/y47dSkG/spiderman-3093340-960-720.jpg",
    name: "Spider Man Action Figure",
    category: "spiderMan",
    price: 19.99,
    sellerName: "john doe",
    sellerEmail: "johndoe@mail.com",
    rating: 4.5,
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, molestias blanditiis? Ullam in doloribus vero iure accusamus laudantium dolores iusto quidem voluptas beatae perspiciatis voluptatem, hic praesentium, maiores odio laborum.",
  };

  return (
    <>
      <div style={divStyle} className="h-full">
        <div className="mx-auto w-full md:max-w-3xl m-5 bg-black p-4 rounded-md">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <img src={toy.picture} alt="" className="rounded-md" />
            <div className="text-white">
              <h2 className="text-xl font-semibold text-gray-400 mb-2">
                Toy Info
              </h2>
              <h1 className="text-2xl font-bold">{toy.name}</h1>
              <div className="grid md:grid-cols-2">
                <p className="text-base text-gray-300 font-medium w-full">
                  Category: {toy.category}
                </p>
                <p className="text-base text-gray-300 font-medium flex gap-2">
                  <HiStar className="w-5 h-5 text-purple-500" /> {toy.rating}
                </p>
              </div>
              <p className="text-base text-orange-500 font-medium">
                Price: ${toy.price}
              </p>
              <h2 className="text-xl font-semibold text-gray-400 mb-2 mt-2">
                Seller Info
              </h2>
              <p className="text-base text-gray-300 font-medium">
                Seller: {toy.sellerName}
              </p>
              <p className="text-base text-gray-300 font-medium">
                Email: {toy.sellerEmail}
              </p>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-400 mb-2 mt-4">
            Toy Description
          </h2>
          <p className="text-base text-white font-medium">{toy.descripton}</p>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
