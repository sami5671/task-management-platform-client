// import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Components/Hooks/UseAuth";
import img from "../../assets/Image/login.jpg";

import { Link } from "react-router-dom";

// import swal from "sweetalert";
// import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
// import { AiFillGoogleCircle } from "react-icons/ai";
// import axios from "axios";

const Login = () => {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  //   //   =================================================================
  const { signInUser, signInWithGoogle } = UseAuth();

  // =====================For getting the value from user=========================================================
  //   const handleLogin = (event) => {
  //     event.preventDefault();
  //     const email = event.target.email.value;
  //     const password = event.target.password.value;

  //     event.target.email.value = "";
  //     event.target.password.value = "";

  //     //==================Create user in firebase==============================================================
  //     signInUser(email, password)
  //       .then((result) => {
  //         const loggedInUser = result.user;
  //         console.log(loggedInUser);
  //         const user = { email };
  //         swal({
  //           text: "Successfully Login!!!",
  //         });

  //         // get access token
  //         axios
  //           .post("https://mermaid-pearl-server.vercel.app/jwt", user, {
  //             withCredentials: true,
  //           })
  //           .then((res) => {
  //             console.log(res.data);
  //             // redirect to to the page where the use had clicked(wanted to watch details)
  //             navigate(location?.state ? location.state : "/");
  //           });
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //         swal({
  //           text: ("Have some issues", error.message),
  //         });
  //       });
  //   };

  // =================================Handle Google Sign In================================================================
  //   const handleGoogleSignIn = () => {
  //     signInWithGoogle()
  //       .then((result) => {
  //         console.log(result.user);
  //         swal({
  //           text: "Successfully Login!!!",
  //         });
  //         navigate(location?.state ? location.state : "/");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         swal({
  //           text: ("Have some issues", error.message),
  //         });
  //       });
  //   };
  // =================================================================================================

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Are you new here Please:
              <Link className="text-orange-600 font-bold" to="/register">
                Sign Up
              </Link>
            </p>
            <p className="flex">
              <button className="btn btn-ghost">Google</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
