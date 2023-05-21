import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi2";

const ToyDetailCard = ({ toyInfo }) => {
  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-64 w-full md:w-96 object-cover"
          src={toyInfo?.picture}
          alt={toyInfo?.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyInfo?.name}</h2>
        <p className="font-medium">Price: $ {toyInfo?.price}</p>
        <p className="flex flex-row items-center gap-2 h-auto">
          <HiStar className="h-5 w-5 text-[#ed1d24]" /> {toyInfo?.rating}
        </p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary bg-[#ed1d24] border-0 rounded-full hover:bg-red-700">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailCard;
