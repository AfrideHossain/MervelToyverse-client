import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ShopCategory = () => {
  return (
    <div>
      <Tabs className="mt-20 mb-8 py-7 px-2 mx-auto bg-black bg-opacity-90 rounded-lg">
        <h1 className="text-3xl pt-4 font-bold text-[#ed1d24] text-center">
          Photos of Our Legendary Toys
        </h1>
        <p className="font-medium text-center text-white">
          Marvelous Figures on Display
        </p>
        <TabList className="flex w-fit bg-[#ed1d24] space-x-2 rounded-t-md text-white cursor-pointer">
          <Tab className="px-4 py-2 text-white rounded-md hover:bg-red-600 transition-colors duration-300 outline-none">
            Title 1
          </Tab>
          <Tab className="px-4 py-2 text-white rounded-md hover:bg-red-600 transition-colors duration-300 outline-none">
            Title 2
          </Tab>
          <Tab className="px-4 py-2 text-white rounded-md hover:bg-red-600 transition-colors duration-300 outline-none">
            Title 3
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
