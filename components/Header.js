import logo from "../assets/images/logo-240.png";
import { RiShoppingCartFill } from "react-icons/ri";

export function Header() {
  return (
    <div className="w-full h-auto sticky top-0 z-10 flex flex-row">
      <div className="">
        <img src={logo} alt="logo" className="w-12" style={{ width: 80 }} />
      </div>
      <div className="flex flex-row">
        <div> Search</div>
        <div> Offers</div>
        <div> About</div>
        <div>Sign In</div>
        <RiShoppingCartFill />
      </div>
    </div>
  );
}
