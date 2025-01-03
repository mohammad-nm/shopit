import CartBtn from "./navbar components/CartBtn";
import ProfileBtn from "./navbar components/ProfileBtn";
import SandwichMenu from "./navbar components/SandwichMenu";
import Search from "./navbar components/Search";
import WishlistBtn from "./navbar components/WishlistBtn";
import Logo from "./navbar components/Logo";

export default function Navbar() {
  return (
    <div className="bg-[#fcb800] w-full sti      cky top-0 z-50">
      <div className="w-full px-2 grid grid-cols-2 sm:grid-cols-6 grid-rows-2 sm:grid-rows-1 sm:w-4/5 mx-auto h-fit p-2">
        <div className="col-span-1 sm:col-span-2 row-span-1  flex gap-6 justify-self-start items-center mx-auto ">
          <ProfileBtn />
          <CartBtn />
          <WishlistBtn />
        </div>
        <div className=" col-span-2 sm:col-span-3 max-w-[70%] min-w-[60%] row-span-1 sm:col-start-3 row-start-2 sm:row-start-1 gap-x-8  w-full flex justify-center items-center mx-auto">
          <div className="w-full">
            <Search />
          </div>
          <div className="w-fit ">
            <SandwichMenu />
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex justify-center items-center p-1 sm:col-start-6 sm:row-start-1">
          <Logo />
        </div>
      </div>
    </div>
  );
}
