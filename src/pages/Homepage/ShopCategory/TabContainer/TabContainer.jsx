import { useEffect, useState } from "react";
import ToyDetailCard from "../ToyDetailCard";
const TabContainer = ({ categoryName }) => {
  const [toysInfo, setToysInfo] = useState();
  useEffect(() => {
    let fetchToys = fetch(`${import.meta.env.VITE_BACKEND}/toys`);
    fetchToys
      .then((res) => res.json())
      .then((data) => {
        let filteredToys = data.toys.filter(
          (toy) => toy.category === categoryName
        );
        setToysInfo(filteredToys);
        // console.log("From tabcontainer", filteredToys);
      });
  }, [categoryName]);
  //   console.log(toysInfo);
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 w-full">
        {toysInfo &&
          toysInfo.map((toyInfo) => (
            <ToyDetailCard key={toyInfo._id} toyInfo={toyInfo} />
          ))}
      </div>
    </>
  );
};

export default TabContainer;
