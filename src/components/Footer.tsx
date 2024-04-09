import mapIcon from "../assets/map-marker.svg";
import searchIcon from "../assets/search.svg";
import bagIcon from "../assets/shopping-bag.svg";
import userIcon from "../assets/user1.svg";

const Footer = () => {
  return (
    <div className=" w-full absolute z-50 bg-white  bottom-0 flex items-center justify-between border-t-2 py-1 shadow-lg ">
      <div className=" w-1/4 h-full  flex flex-col justify-end items-center ">
        <img src={mapIcon} alt="" /> <p className=" text-sm">Near Me</p>
      </div>
      <div className=" w-1/4 h-full   flex flex-col justify-end items-center">
        <img src={searchIcon} alt="" /> <p className=" text-sm">Near Me</p>
      </div>
      <div className=" w-1/4 h-full  flex  flex-col justify-end items-center">
        <div>
          <img src={bagIcon} alt="" />
          <div className=" absolute top-1 right-[117px]  w-4 flex items-center justify-center h-4 rounded-full bg-red-600 text-xs text-white">3</div>
        </div>
        <p className=" text-sm">Near Me</p>
      </div>
      <div className=" w-1/4 h-full   flex flex-col justify-end items-center">
        <img src={userIcon} alt="" /> <p className=" text-sm mt-2">Near Me</p>
      </div>
    </div>
  );
};

export default Footer;
