import Link from "next/link";

export default function BackToHomeBtn() {
  return (
    <Link
      className="bg-[#fcb800] text-black text-sm p-2 sm:p-4 hover:bg-[#e9e6ed] transition-all duration-300 font-bold sm:text-xl rounded-md"
      href="/"
    >
      بازگشت به فروشگاه
    </Link>
  );
}
