import { Fragment, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  // TODO pagination
  const toys = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const itemsPerPageArray = [5, 10, 15, 20, 25, 30];
  return (
    <>
      <div className="overflow-x-auto w-screen">
        <table className="table table-normal w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Available Quantity</th>
              <th>Seller</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys &&
              toys.map((toy) => (
                <Fragment key={toy.id}>
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={toy?.picture}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{toy?.name}</div>
                          <div className="text-sm opacity-70 text-orange-600 font-medium">
                            Price : ${toy?.price}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{toy?.category}</td>
                    <td>{toy?.quantity}</td>
                    <td>{toy?.sellerName}</td>
                    <th>
                      <button className="btn btn-primary">details</button>
                    </th>
                  </tr>
                </Fragment>
              ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Available Quantity</th>
              <th>Seller</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="w-full my-10 flex justify-center gap-5">
        <select
          className="select w-max border-none"
          onChange={(e) => {
            setItemsPerPage(e.target.value);
          }}
        >
          <option
            disabled
            defaultValue="Select items per page"
            value={itemsPerPage}
          >
            Select items per page
          </option>
          {itemsPerPageArray.map((itemsNumber, indx) => (
            <Fragment key={indx}>
              <option>{itemsNumber}</option>
            </Fragment>
          ))}
        </select>
        <div className="btn-group">
          <button className="btn">1</button>
          <button className="btn btn-active">2</button>
          <button className="btn">3</button>
          <button className="btn">4</button>
        </div>
      </div>
    </>
  );
};

export default AllToys;
