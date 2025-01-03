import Category from "./footer components/Category";
import Links from "./footer components/Links";
import Headlines from "./footer components/Headlines";
import DevelopedBy from "./footer components/DevelopedBy";
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
