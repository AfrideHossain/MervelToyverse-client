import { Fragment, useEffect, useState } from "react";
import { HiOutlineTrash, HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const [toys, setToys] = useState();

  // swal style
  const swalDeleteAlert = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary mx-2",
      cancelButton: "btn mx-2",
    },
    buttonsStyling: false,
  });

  useEffect(() => {
    let fetchedToys = fetch(`${import.meta.env.VITE_BACKEND}/mytoys`, {
      method: "GET",
      headers: {
        authtoken: `Bearer ${localStorage.getItem(
          "marvel-toyverse-auth-token"
        )}`,
      },
    });
    fetchedToys
      .then((res) => res.json())
      .then((toysdata) => {
        setToys(toysdata.toys);
      });
  }, [toys]);
  const deleteToy = (id) => {
    swalDeleteAlert
      .fire({
        title: "You want to delete the toy?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          let deleteToy = fetch(`${import.meta.env.VITE_BACKEND}/toy/${id}`, {
            method: "DELETE",
          });
          deleteToy
            .then((res) => res.json())
            .then((deleteRes) => {
              if (deleteRes.success) {
                swalDeleteAlert.fire(
                  "Deleted!",
                  "Your toy has been deleted.",
                  "success"
                );
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalDeleteAlert.fire(
            "Cancelled",
            "Don't worry, your toy is safe :)",
            "error"
          );
        }
      });
  };
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
                        <Link className="btn" to={`/updatetoy/${toy._id}`}>
                          <HiOutlinePencilSquare className="text-white h-5 w-5" />
                        </Link>
                        <button
                          className="btn"
                          onClick={() => deleteToy(toy._id)}
                        >
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
