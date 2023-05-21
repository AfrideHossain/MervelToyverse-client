import { HiEnvelope, HiOutlineKey, HiUser, HiPhoto } from "react-icons/hi2";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContextProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { userCreateWithEmailAndPass, googleSignIn } = useContext(AuthContext);

  const registerHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    let email = form.email?.value;
    let username = form.username?.value;
    let photourl = form.photourl?.value;
    let pass = form.password?.value;

    userCreateWithEmailAndPass(email, pass)
      .then((createdUser) => {
        let user = createdUser.user;
        updateProfile(user, {
          displayName: username,
          photoURL: photourl,
        })
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
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
            Join Marvel Toyverse
          </h1>
          <form onSubmit={registerHandler}>
            <div className="space-y-3">
              <div className="form-control w-full">
                <label className="input-group">
                  <span>
                    <HiUser className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="input-group">
                  <span>
                    <HiEnvelope className="w-5 h-5" />
                  </span>
                  <input
                    type="email"
                    placeholder="info@site.com"
                    name="email"
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control w-full">
                <label className="input-group">
                  <span>
                    <HiPhoto className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    placeholder="Photo url"
                    name="photourl"
                    className="input input-bordered w-full"
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
                    name="password"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <p className="text-gray-300 my-2">
              Already have an account? Please{" "}
              <Link className="text-[#ed1d24]" to="/login">
                login.
              </Link>
            </p>
            <div className="form-control w-full mt-5">
              <input
                type="submit"
                value="Register"
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

export default Register;
