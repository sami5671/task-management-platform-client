import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // destructure the authcontext
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  //   console.log(location.pathname);

  if (loading) {
    return (
      <div className="radial-progress" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
