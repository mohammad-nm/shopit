import Image from "next/image";
import WishlistSvg from "@/svg/wishlist.svg";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function WishlistBtn() {
  const likes = useSelector((state: any) => state.user.likes);
  return (
    <Link href="/wishlist" className="relative">
      <Image src={WishlistSvg} alt="wishlist" width={40} height={40} />
    </Link>
  );
}
