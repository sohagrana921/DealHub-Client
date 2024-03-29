import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Shared/Footer/Footer";
import GoToTop from "../Components/GoToTop/GoToTop";
import Popup from "../Components/PopUp/PopUp";

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Popup></Popup>
      <Footer />
      <GoToTop></GoToTop>
    </div>
  );
};

export default MainLayout;
