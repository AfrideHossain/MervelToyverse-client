import OpinionForm from "./OpinionForm/OpinionForm";
import OthersOpinion from "./OthersOpnion/OthersOpinion";

const YourOpinion = () => {
  return (
    <>
      <div className="mx-auto w-full bg-black bg-opacity-95 p-6 mt-10">
        <h1 className="text-white text-3xl mb-4 text-center font-medium w-full">
          Your Opinion Matters
        </h1>
        <div className="grid md:grid-cols-2 md:divide-x-2 py-6">
          <OthersOpinion />
          <OpinionForm />
        </div>
      </div>
    </>
  );
};

export default YourOpinion;
