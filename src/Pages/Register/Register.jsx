import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../../Components/Hooks/UseAuth";
import img from "../../assets/Image/register.jpg";
import swal from "sweetalert";

const Register = () => {
  // =================================================================
  const navigate = useNavigate();
  //   // ====================Destructuring the object=======================================
  const { createUser } = UseAuth();
  // =====================For getting the value from user=========================================================
  const handleRegister = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // =====================clear the input field============================================
    event.target.email.value = "";
    event.target.password.value = "";
    // ==================================================================================
    // Check The password is less than 6 characters, don't have a capital letter, don't have a special character
    if (password.length < 6) {
      swal({
        text: "Password is less than 6 characters!!!!!",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal({
        text: "Password must be at least One UpperCase Character!!!!!",
      });
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/.test(password)) {
      swal({
        text: "Password must be at least One Special Character!!!!!",
      });
      return;
    }
    //==================Create user in firebase==============================================================
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        swal({
          text: "Successfully Registered",
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        swal({
          text: ("Have some issues", error.message),
        });
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Register Here </h1>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
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
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account?
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
