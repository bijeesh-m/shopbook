import banner from "../assets/3434d51aef7b9463d5c20cd3dbd1b74a.png";
import item from "../assets/ed15ce7ab4d127195700da744cc9dcc1.png";
import starIcon from "../assets/Outline.svg";
import clockIcon from "../assets/clock.svg";
import walletIcon from "../assets/wallet.svg";
import pinIcon from "../assets/pin.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  };

  return (
    <div className=" px-3  py-2  overflow-y-auto mb-16">
      <div className=" space-y-3">
        <p className=" text-lg font-bold ">Promo Banner</p>
        <img className=" rounded-2xl w-full" src={banner} alt="" />

        <p className=" font-bold text-lg">Nearby Stores</p>
        <div className=" space-y-6 ">
          <div className=" flex">
            <div className=" w-1/3  relative ">
              <div className=" absolute  z-30  w-full bg-red-500 py-1 md:py-3 md:text-lg pr-4 md:px-4  text-white text-xs">
                RECCOMENDED
              </div>
              <img className=" rounded-lg w-52" src={item} alt="" />
              <div className=" absolute md:w-2/3 md:text-lg md:p-2  rounded-sm border left-1 md:left-5 -bottom-3 z-30   bg-white text- text-red-500 font-bold">
                30 % OFF
              </div>
            </div>
            <div
              onClick={handleClick}
              className=" w-full space-x-3   md:space-y-3"
            >
              <p className=" ml-3   font-bold md:text-2xl">
                Viceroy Restaurant
              </p>
              <p className=" text-sm md:text-xl text-gray-800 line-clamp-1 md:line-clamp-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis id doloribus quibusdam? Ex dolor accusamus doloribus
                hic eius esse, sint ducimus magni molestias est itaque error,
                asperiores, vitae officia beatae.
              </p>
              <p className=" text-xs md:text-lg mb-1 text-gray-800 ">
                New Bus Stand, Kasaragod
              </p>
              <hr className=" mb-1" />
              <div className=" text-xs md:text-lg w-full justify-between pr-3 flex">
                <div className=" flex space-x-1">
                  <img src={starIcon} alt="" />
                  <p className=" font-bold">4.5</p>
                </div>
                <div className=" flex space-x-1">
                  <img src={clockIcon} alt="" />
                  <p className=" font-bold">45 mins</p>
                </div>
                <div className=" flex space-x-1">
                  <img src={walletIcon} alt="" />
                  <p className=" font-bold">250 for two</p>
                </div>
                <div className=" flex space-x-1">
                  <img src={pinIcon} alt="" />
                  <p className=" font-bold">5 Km</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex">
            <div className=" w-1/3  relative ">
              <img className=" rounded-lg w-52" src={item} alt="" />
              <div className=" absolute md:text-lg  rounded-sm border left-1 md:left-6 md:p-2 -bottom-3 z-30   bg-white text-sm text-red-500 font-bold">
                BUY1GET1
              </div>
            </div>
            <div
              onClick={handleClick}
              className=" w-full space-x-3  md:space-y-3"
            >
              <p className=" ml-3  font-bold md:text-2xl">Viceroy Restaurant</p>
              <p className=" text-sm md:text-xl text-gray-800 line-clamp-1 md:line-clamp-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis id doloribus quibusdam? Ex dolor accusamus doloribus
                hic eius esse, sint ducimus magni molestias est itaque error,
                asperiores, vitae officia beatae.
              </p>
              <p className=" text-xs md:text-lg mb-1 text-gray-800 ">
                New Bus Stand, Kasaragod
              </p>
              <hr className=" mb-1" />
              <div className=" text-xs md:text-lg w-full justify-between pr-3 flex">
                <div className=" flex space-x-1">
                  <img src={starIcon} alt="" />
                  <p className=" font-bold">4.5</p>
                </div>
                <div className=" flex space-x-1">
                  <img src={clockIcon} alt="" />
                  <p className=" font-bold">45 mins</p>
                </div>
                <div className=" flex space-x-1">
                  <img src={walletIcon} alt="" />
                  <p className=" font-bold">250 for two</p>
                </div>
                <div className=" flex space-x-1">
                  <img src={pinIcon} alt="" />
                  <p className=" font-bold">5 Km</p>
                </div>
              </div>
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7].map((i, index): any => {
            return (
              <div key={index} className=" flex">
                <div className=" w-1/3   ">
                  <img className=" rounded-lg w-52" src={item} alt="" />
                </div>

                <div
                  onClick={handleClick}
                  className=" w-full space-x-3  md:space-y-3"
                >
                  <p className=" ml-3  font-bold md:text-2xl">
                    Viceroy Restaurant
                  </p>
                  <p className=" text-sm md:text-xl text-gray-800 line-clamp-1 md:line-clamp-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis id doloribus quibusdam? Ex dolor accusamus
                    doloribus hic eius esse, sint ducimus magni molestias est
                    itaque error, asperiores, vitae officia beatae.
                  </p>
                  <p className=" text-xs md:text-lg mb-1 text-gray-800 ">
                    New Bus Stand, Kasaragod
                  </p>
                  <hr className=" mb-1" />
                  <div className=" text-xs md:text-lg w-full justify-between pr-3 flex">
                    <div className=" flex space-x-1">
                      <img src={starIcon} alt="" />
                      <p className=" font-bold">4.5</p>
                    </div>
                    <div className=" flex space-x-1">
                      <img src={clockIcon} alt="" />
                      <p className=" font-bold">45 mins</p>
                    </div>
                    <div className=" flex space-x-1">
                      <img src={walletIcon} alt="" />
                      <p className=" font-bold">250 for two</p>
                    </div>
                    <div className=" flex space-x-1">
                      <img src={pinIcon} alt="" />
                      <p className=" font-bold">5 Km</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className=" w-full py-2 px-2 bg-[#2A7BF5] rounded-sm my-10 text-white text-sm">
        View more
      </button>
    </div>
  );
};

export default Home;
