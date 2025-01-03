import Image from "next/image";
import WishlistSvg from "@/svg/wishlist.svg";
import Link from "next/link";
export default function WishlistBtn() {
  return (
    <div className="w-7 sm:w-14">
      <Link href="/wishlist" className="relative">
        <Image src={WishlistSvg} alt="wishlist" width={30} height={30} />
      </Link>
    </div>
  );
}
