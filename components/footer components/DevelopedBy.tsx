import Link from "next/link";
import Image from "next/image";
import paypal from "@/svg/paypal.svg";
export default function DevelopedBy() {
  return (
    <div className="flex flex-wrap justify-between px-8 py-4 my-4 gap-2">
      <div className="flex flex-row gap-2 font-semibold" dir="ltr">
        <div className="">Online shop developed by</div>
        <div className="flex gap-2">
          <Link
            href="https://www.github.com/mohammad-nm"
            className="text-blue-500"
          >
            "Github"
          </Link>
          <Link
            href="https://www.github.com/mohammad-nm"
            className="text-blue-500"
          >
            "Linkedin"
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div>درگاه های پرداخت ایمن ما</div>
        <div className="flex flex-wrap gap-2">
          <Image src={paypal} alt="paypal" width={30} />
          <Image src={paypal} alt="paypal" width={30} />
          <Image src={paypal} alt="paypal" width={30} />
        </div>
      </div>
    </div>
  );
}
