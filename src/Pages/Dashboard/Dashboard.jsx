import {
  FaHome,
  FaShoppingCart,
  FaStore,
  FaToolbox,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAuth from "../../Components/Hooks/UseAuth";

const Dashboard = () => {
  const { user } = UseAuth();

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Dashboard sidebar */}
      <div className="w-full lg:w-1/5 lg:min-h-screen bg-gradient-to-l from-gray-500 to-cyan-500 text-white font-bold">
        <ul className="menu">
          {user ? (
            <>
              <li>
                <NavLink to="/userHome">
                  <FaUser /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/createNewTask">
                  <FaToolbox /> Create New Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/toDoList">
                  <FaShoppingCart /> To-Do-List
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* Shared nav links for non-logged-in users */}
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/allAcceptedProducts">
                  <FaStore /> Products
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Dashboard content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
