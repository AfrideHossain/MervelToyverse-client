import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext, useState } from "react";
const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [showUsername, setShowUsername] = useState(false);
  const logoutHandler = () => {
    userLogout()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">All Toys</Link>
            </li>
            <li>
              <Link>Add A Toy</Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Marvel Toyverse
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="toys">All Toys</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="addtoy">Add A Toy</Link>
              </li>
              <li>
                <Link>My Toys</Link>
              </li>
            </>
          )}
          <li>
            <Link>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link
            className="btn bg-[#ed1d24] hover:bg-red-700 rounded-full border-0"
            to="/login"
          >
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL}
                  onMouseOver={() => setShowUsername(true)}
                  onMouseLeave={() => setShowUsername(false)}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">{user?.displayName}</Link>
              </li>
              <li>
                <Link>{user?.email}</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        )}
        {showUsername && (
          <div className="toast toast-top toast-end mt-14">
            <div className="alert alert-info">
              <div>
                <span>{user?.displayName}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
