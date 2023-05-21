import { useNavigate, useRouteError } from "react-router-dom";
import errDeadpool from "../assets/ErrorImg/pngeggdeadpool.png";
import spiderBg from "../assets/images/spiderPosterBg.jpg";
import "./errorPage.css";
const ErrorPage = () => {
  const divStyle = {
    backgroundImage: `url(${spiderBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
  };
  const routerErr = useRouteError();
  const navigate = useNavigate();
  const goHomeHandler = () => {
    navigate("/");
  };
  return (
    <div
      className="max-w-full h-screen flex justify-center items-center"
      style={divStyle}
    >
      <div className="err-container w-full md:max-w-3xl h-fit m-4 py-9 px-10 bg-black rounded-lg bg-opacity-90">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <img className="w-80" src={errDeadpool} alt="" />
          <div>
            <h1 className="text-9xl font-semibold text-[#ed1d24] text-center mb-5">
              {routerErr.status}
            </h1>
            <p className="text-gray-200 text-center">
              Sorry, it looks like the page you{"'"}re looking for got lost in
              Deadpool{"'"}s twisted sense of humor. Try not to take it
              personally.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={goHomeHandler}
            className="btn bg-[#ed1d24] hover:bg-red-700 rounded-none"
          >
            Go To Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
