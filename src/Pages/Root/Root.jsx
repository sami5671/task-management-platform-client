import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Promotion from "../../Components/Promotion/Promotion";

const Root = () => {
  return (
    <div>
      <Promotion></Promotion>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
