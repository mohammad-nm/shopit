import Image from "next/image";
import CartSvg from "@/svg/cart.svg";
import Link from "next/link";

export default function CartBtn() {
  return (
    <Link href="/cart" className="relative">
      <Image src={CartSvg} alt="cart" width={40} height={40} />
      <div className=" absolute bottom-[-5px] left-[-2px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
        5
      </div>
    </Link>
  );
}
