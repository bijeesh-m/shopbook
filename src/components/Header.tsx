import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className=" px-3">
      <div className=" flex justify-between items-center   border-b ">
        <div className=" font-semibold    w-full flex gap-2 items-center">
          Edapally, Kochi
          <div className="w-2 h-2  -rotate-45 border-l-2 border-b-2 border-red-600" />
        </div>
        <div className=" w-24 md:w-32">
          <img  src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};
