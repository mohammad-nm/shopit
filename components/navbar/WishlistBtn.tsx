import Image from "next/image";
import WishlistSvg from "@/svg/wishlist.svg";
import Link from "next/link";

export default function WishlistBtn() {
  return (
    <Link href="/wishlist" className="relative">
      <Image src={WishlistSvg} alt="wishlist" width={40} height={40} />
      <div className=" absolute bottom-[-5px] left-[-2px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
        5
      </div>
    </Link>
  );
}
