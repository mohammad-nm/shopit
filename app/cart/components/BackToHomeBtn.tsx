import Link from "next/link";

export default function BackToHomeBtn() {
  return (
    <Link
      className="bg-[#fcb800] text-black px-4 py-4 hover:bg-[#e9e6ed] transition-all duration-300 font-bold text-xl rounded-md"
      href="/"
    >
      بازگشت به فروشگاه
    </Link>
  );
}
