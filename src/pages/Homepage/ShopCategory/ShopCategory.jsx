import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import ToyDetailCard from "./ToyDetailCard";
import TabContainer from "./TabContainer/TabContainer";
const ShopCategory = () => {
  return (
    <div className="mt-20 mb-8">
      <Tabs className="py-7 px-2 mx-auto bg-black bg-opacity-90 rounded-lg">
        <h1 className="text-3xl pt-4 font-bold text-[#ed1d24] text-center">
          Explore Marvel{"'"}s Toy Universe
        </h1>
        <TabList className="mt-4 flex w-fit bg-[#ed1d24] space-x-2 rounded-t-md text-white cursor-pointer">
          <Tab className="px-4 py-2 text-white rounded-md hover:bg-red-600 transition-colors duration-300 outline-none">
            Action Figures
          </Tab>
          <Tab className="px-4 py-2 text-white rounded-md hover:bg-red-600 transition-colors duration-300 outline-none">
            Props & Replicas
          </Tab>
          <Tab className="px-4 py-2 text-white rounded-md hover:bg-red-600 transition-colors duration-300 outline-none">
            Vehicles
          </Tab>
        </TabList>

        <div className="mt-8 md:w-fit mx-auto p-4">
          <TabPanel>
            <TabContainer categoryName="Action Figures" />
          </TabPanel>
          <TabPanel>
            <TabContainer categoryName="Props & Replicas" />
          </TabPanel>
          <TabPanel>
            <TabContainer categoryName="Vehicles" />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
