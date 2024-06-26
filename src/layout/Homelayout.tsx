import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

const Homelayout = () => {
  return (
    <div className=" w-screen h-screen flex flex-col  ">
      <Header />
      <Outlet />
      <Footer  />
    </div>
  );
};

export default Homelayout;
