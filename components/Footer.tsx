import Category from "./footer/Category";
import Links from "./footer/Links";
import Headlines from "./footer/Headlines";
import DevelopedBy from "./footer/DevelopedBy";
export default function Footer() {
  return (
    <div className="bg-[#f8f8f8]">
      <div
        className=" flex flex-col gap-4 text-black w-full sm:w-4/5 mx-auto"
        dir="rtl"
      >
        <Headlines />
        <Links />
        <Category />
        <DevelopedBy />
      </div>
    </div>
  );
}
