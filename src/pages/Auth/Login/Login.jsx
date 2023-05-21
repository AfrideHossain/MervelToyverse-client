import { HiEnvelope, HiOutlineKey } from "react-icons/hi2";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContextProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const { userLoginWithEmailAndPass, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    let email = form.email?.value;
    let pass = form.password?.value;
    userLoginWithEmailAndPass(email, pass)
      .then((createdUser) => {
        let user = createdUser.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        toast.error(`😪 ${err.message}`);
      });
  };
  const googleSignInHandler = () => {
    googleSignIn()
      .then((loggedInUser) => {
        console.log("logged: ", loggedInUser.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="divStyle w-screen h-screen flex justify-center items-center">
        <div className="container px-10 py-6 bg-black bg-opacity-90 w-fit rounded-md">
          <h1 className="text-4xl text-center text-gray-200 font-semibold mb-8">
            Welcome Back Chief
          </h1>
          <p className="text-red-500 mb-3">{error}</p>
          <form onSubmit={loginHandler}>
            <div className="space-y-3">
              <div className="form-control w-full">
                <label className="input-group">
                  <span>
                    <HiEnvelope className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    placeholder="info@site.com"
                    className="input input-bordered w-full"
                    name="email"
                    required
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="input-group">
                  <span>
                    <HiOutlineKey className="w-5 h-5" />
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                    name="password"
                    required
                  />
                </label>
              </div>
            </div>
            <p className="text-gray-300 my-2">
              Don{"'"}t have an account? Please{" "}
              <Link className="text-[#ed1d24]" to="/register">
                create one.
              </Link>
            </p>
            <div className="form-control w-full mt-5">
              <input
                type="submit"
                value="Login"
                className="btn btn-primary bg-[#ed1d24] border-0 hover:bg-red-700"
              />
            </div>
          </form>
          <p className="my-5 text-[#ed1d24] text-center">Or</p>
          <button
            className="btn btn-outline btn-success w-full gap-3"
            onClick={googleSignInHandler}
          >
            <FaGoogle className="text-lg" />
            Login With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
