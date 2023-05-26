import { Fragment, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  // TODO pagination
  const totalToys = useLoaderData();
  const [toys, setToys] = useState([]);
  const totalItems = totalToys.length;
  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = () => {
    let pagesArray = [];
    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  };
  // console.log(pages());
  const pageChangeHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND
      }/toys?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((fetchedRes) => {
        setToys(fetchedRes.toys);
      });
  }, [currentPage]);

  const searchHandler = (searchStr) => {
    const searchedToys = totalToys.filter((toy) =>
      toy.name.toLowerCase().includes(searchStr.toLowerCase())
    );
    setToys(searchedToys);
  };
  return (
    <>
      <div className="overflow-x-auto">
        {/* search section  */}
        <div className="flex justify-center p-5">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search by name..."
              onChange={(e) => {
                searchHandler(e.target.value);
              }}
              className="input input-bordered w-full md:w-96"
            />
          </div>
        </div>
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
                <Fragment key={toy._id}>
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
                      <Link to={`/toy/${toy?._id}`} className="btn btn-primary">
                        details
                      </Link>
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
      <div className="w-full my-4 flex justify-center">
        <div className="btn-group">
          {pages().map((btn) => {
            return (
              <button
                key={btn}
                className="btn"
                onClick={() => pageChangeHandler(btn - 1)}
              >
                {(btn += 1)}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllToys;
