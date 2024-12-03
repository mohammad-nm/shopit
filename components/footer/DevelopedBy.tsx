import Link from "next/link";
import Image from "next/image";
import paypal from "@/svg/paypal.svg";
export default function DevelopedBy() {
  return (
    <div className="flex flex-row justify-between px-8 py-4 my-4">
      <div className="flex flex-row gap-2" dir="ltr">
        <div>online shop developed by</div>
        <div>
          <Link
            href="https://www.github.com/mohammad-nm"
            className="text-blue-500"
          >
            "Github"
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div>درگاه های پرداخت ایمن ما</div>
        <div>
          <Image src={paypal} alt="paypal" width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
