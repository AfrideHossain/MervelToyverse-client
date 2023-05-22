import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import { HiOutlineTrash, HiOutlinePencilSquare } from "react-icons/hi2";

const MyToys = () => {
  // TODO pagination
  const toys = useLoaderData();
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
              toys.map((toy, indx) => (
                <Fragment key={indx}>
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
                      <div className="flex gap-2">
                        <button className="btn">
                          <HiOutlinePencilSquare className="text-white h-5 w-5" />
                        </button>
                        <button className="btn">
                          <HiOutlineTrash className="text-white h-5 w-5" />
                        </button>
                      </div>
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
    </>
  );
};

export default MyToys;
