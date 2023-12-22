import { FaHome, FaStore } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BsBuildingFillDash } from "react-icons/bs";
import img from "../../assets/Image/user.png";
import UseAuth from "../../Components/Hooks/UseAuth";

import MyToDoList from "./MyToDoList";

const Dashboard = () => {
  const { user } = UseAuth();

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Dashboard sidebar */}
      <div className="w-full lg:w-1/5 lg:min-h-screen bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold">
        <ul className="menu">
          {user ? (
            <>
              <li>
                <NavLink to="/">
                  <img
                    src={user?.photoURL || img}
                    className="rounded-full w-[100px] h-[100px]"
                    alt=""
                  />
                </NavLink>
                <div>Name: {user.displayName}</div>
                <div>Email: {user.email}</div>
              </li>
              <li>
                <NavLink to="/createNewTask">
                  <MdAddTask className="text-2xl font-bold"></MdAddTask> Create
                  New Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/toDoList">
                  <BsBuildingFillDash className="text-2xl"></BsBuildingFillDash>{" "}
                  To-Do-List
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
        <MyToDoList></MyToDoList>
      </div>
    </div>
  );
};

export default Dashboard;
