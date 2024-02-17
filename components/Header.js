import logo from "../assets/images/logo-240.png";
import { RiShoppingCartLine, RiSearchLine } from "react-icons/ri";
import { TbDiscount2, TbInfoCircle, TbUserCircle } from "react-icons/tb";

export default function Header() {
  return (
    <div className="w-full h-auto sticky top-0 z-10 flex flex-row p-4 lg:px-32 justify-between bg-primary">
      <div className="flex flex-row items-center">
        <img src={logo} alt="logo" className="w-12" style={{ width: 60 }} />
        <p className="text-white text-2xl font-bold px-4">Foodie</p>
      </div>
      <div className="flex gap-8 py-auto justify-center font-semibold text-gray-200 items-center">
        <div className="flex items-center hover:text-white hover:transition-colors hover:cursor-pointer ">
          <RiSearchLine className="mr-2" />
          Search
        </div>
        <div className="flex items-center hover:text-white  hover:transition-colors hover:cursor-pointer">
          <TbDiscount2 className="mr-2" />
          Offers
        </div>
        <div className="flex items-center hover:text-white  hover:transition-colors hover:cursor-pointer">
          <TbInfoCircle className="mr-2" />
          About
        </div>
        <div className="flex items-center hover:text-white  hover:transition-colors hover:cursor-pointer">
          <TbUserCircle className="mr-2" />
          Sign In
        </div>
        <div className="flex items-center hover:text-white  hover:transition-colors hover:cursor-pointer">
          <RiShoppingCartLine className="mr-2" />
          Cart
        </div>
      </div>
    </div>
  );
}
