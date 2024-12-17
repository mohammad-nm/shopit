import CartBtn from "./navbar/CartBtn";
import ProfileBtn from "./navbar/ProfileBtn";
import SandwichMenu from "./navbar/SandwichMenu";
import Search from "./navbar/Search";
import WishlistBtn from "./navbar/WishlistBtn";
import Logo from "./navbar/Logo";

export default function Navbar() {
  return (
    <div className="bg-[#fcb800] w-full h-20">
      <div className="flex max-w-[850px] mx-auto justify-between items-center h-full px-4 gap-10 ">
        <div className="flex gap-8 w-fit justify-self-start items-center h-full px-4 ">
          <ProfileBtn />
          <CartBtn />
          <WishlistBtn />
        </div>
        <div className="w-full flex gap-8 justify-self-center items-center px-4 h-full ">
          <div className=" w-full h-fit">
            <Search />
          </div>
          <div className="">
            <SandwichMenu />
          </div>
        </div>
        <div className="flex w-fit justify-self-end items-center">
          <Logo />
        </div>
      </div>
    </div>
  );
}
