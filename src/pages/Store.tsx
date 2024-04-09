import top from "../assets/Top.jpeg";
import arrow from "../assets/arrow-left.svg";
import search from "../assets/search.svg";
import send from "../assets/send.svg";
import logo from "../assets/5af8729c173e8e038f7d3eb33176e137.png";
import coupen from "../assets/sale-badge.svg";
const Store = () => {
  return (
    <div className="">
      <div className=" relative h-[250px] md:h-[600px]">
        <img
          className=" absolute -top-24 md:-top-48 rounded-b-[100px]"
          src={top}
          alt=""
        />
        <div className="absolute  w-10 md:w-20 md:h-20 p-2 flex justify-center items-center top-3 md:top-4 left-3  md:left-6 z-10 bg-white rounded-full  ">
          <img
            className=" w-[24px] h-[24px] md:w-[50px] md:h-[50px]"
            src={arrow}
            alt=""
          />
        </div>
        <div className="absolute  w-10 md:w-20 md:h-20 p-2 flex justify-center items-center top-3 md:top-4 right-16 md:right-32 z-10 bg-white rounded-full  ">
          <img className=" w-full" src={search} alt="" />
        </div>
        <div className="absolute  w-10 md:w-20 md:h-20 p-2 flex justify-center items-center top-3 md:top-4 right-3 md:right-6   z-10 bg-white rounded-full  ">
          <img className=" w-full" src={send} alt="" />
        </div>
        <div className="absolute  w-24 md:w-[250px] top-14 md:top-24 left-36 md:left-[275px] z-10 bg-white rounded-2xl  ">
          <img className=" w-full rounded-2xl" src={logo} alt="" />
        </div>
        <div className="absolute border md:space-y-1  w-[250px] md:w-[500px] h-16 md:h-32 top-40 md:top-[370px] px-3 md:px-6 py-2 md:py-4 left-[65px] md:left-[150px]  z-10 bg-white rounded-2xl  ">
          <div className="flex justify-between items-center">
            <p className=" font-bold text-[14px] md:text-xl ">Store Name</p>{" "}
            <div className="w-2 h-2 md:h-5 md:w-5 bg-green-400 rounded-full" />
          </div>
          <p className=" text-[10px] md:text-lg ">
            16B 8th Street, Oud Metha, Dubai
          </p>
          <hr />
          <p className=" font-bold text-[8px] md:text-sm ">
            Distance: 4km | Delivery Time: 45mins | More Info
          </p>
        </div>
      </div>
      <div className=" flex space-x-3 px-3">
        <div className=" border rounded-md w-1/2 h-12 md:h-24 p-1 md:p-5 ">
          <div className=" flex justify-evenly md:justify-normal md:space-x-3">
            <img className="md:w-[30px]" src={coupen} alt="" />
            <p className=" text-sm md:text-3xl font-bold ">GET FLAT 30% OFF</p>
          </div>
          <p className=" text-gray-400 text-sm px-2 md:text-2xl md:px-11">
            Use code GET30
          </p>
        </div>
        <div className=" border rounded-md w-1/2 h-12 md:h-24 p-1 md:p-3">
          <div className=" flex justify-evenly md:justify-normal md:space-x-3">
            <img className="md:w-[30px]" src={coupen} alt="" />
            <p className=" text-sm md:text-3xl font-bold ">BUY 1 GET 1 OFFER</p>
          </div>
          <p className=" text-gray-400 text-sm px-2 md:text-2xl md:px-11">
            Use code BOGO
          </p>
        </div>
      </div>
      <div className=" px-3 mt-4 relative ">
        <input
          className=" shadow-sm focus:outline-none border p-2 px-4 md:p-4 md:px-8 md:text-lg rounded-lg w-full"
          type="text"
          placeholder="search menu"
        />
        <img
          className=" absolute top-2 w-6 md:w-10   right-5 z-30 "
          src={search}
          alt=""
        />
      </div>
    </div>
  );
};

export default Store;
