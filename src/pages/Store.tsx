import top from "../assets/Top.jpeg";
import arrow from "../assets/arrow-left.svg";
import search from "../assets/search.svg";
const Store = () => {
  return (
    <div>
      <div className=" relative">
        <img className=" absolute -top-24 rounded-b-[100px]" src={top} alt="" />
        <div className="absolute  w-10 p-2 top-3 left-2 z-10 bg-white rounded-full  ">
          <img className=" w-full" src={arrow} alt="" />
        </div>
        <div className="absolute  w-10 p-2 top-3 right-16 z-10 bg-white rounded-full  ">
          <img className=" w-full" src={search} alt="" />
        </div>
        <div className="absolute  w-10 p-2  z-10 bg-white rounded-full  ">
          {/* <img className=" w-full" src={arrow} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Store;
