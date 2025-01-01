import CartBtn from "./navbar/CartBtn";
import ProfileBtn from "./navbar/ProfileBtn";
import SandwichMenu from "./navbar/SandwichMenu";
import Search from "./navbar/Search";
import WishlistBtn from "./navbar/WishlistBtn";
import Logo from "./navbar/Logo";

export default function Navbar() {
  return (
    <div className="bg-[#fcb800] w-full h-fit sticky top-0 z-50">
      <div className="w-full h-full px-4 grid grid-cols-2 sm:grid-cols-6 grid-rows-2 sm:grid-rows-1 sm:w-4/5 mx-auto">
        <div className="col-span-1 sm:col-span-2 row-span-1 flex gap-8 justify-self-start items-center p-4 ">
          <ProfileBtn />
          <CartBtn />
          <WishlistBtn />
        </div>
        <div className=" col-span-2 sm:col-span-3 max-w-[70%] min-w-[60%] row-span-1 sm:col-start-3 row-start-2 sm:row-start-1 gap-8  w-full flex justify-center items-center mx-auto">
          <div className=" w-full h-fit">
            <Search />
          </div>
          <div className="w-fit ">
            <SandwichMenu />
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center gap-8 p-4 sm:col-start-6 sm:row-start-1">
          <Logo />
        </div>
      </div>
    </div>
  );
}
