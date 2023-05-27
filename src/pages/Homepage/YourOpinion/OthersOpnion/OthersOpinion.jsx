import { Fragment, useEffect, useState } from "react";

const OthersOpinion = () => {
  const [opinions, setOpinions] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/opinion`)
      .then((res) => res.json())
      .then((data) => {
        setOpinions(data.opinions);
      });
  }, []);

  return (
    <div>
      <h1 className="text-white text-3xl mb-4 text-center font-medium w-full">
        Others Opinion
      </h1>
      <div className="rounded-md p-6 w-full max-w-md mx-auto space-y-3 overflow-y-auto h-60">
        {opinions.map((opinion, indx) => (
          <Fragment key={indx}>
            <div className="chat chat-start">
              <img
                src={opinion.photo}
                className="chat-image avatar w-11 h-11 object-cover rounded-full"
                alt=""
              />
              <div className="chat-bubble">
                <h1 className="font-semibold chat-header">
                  {opinion.username}
                </h1>
                <p className="text-xs">{opinion.opinion}</p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default OthersOpinion;
