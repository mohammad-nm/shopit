import Image from "next/image";
import rocket from "@/svg/rocket.svg";
export default function Headlines() {
  return (
    <div className="flex items-center gap-4 w-full justify-between px-8 py-4 my-4 ">
      <div className="flex items-center gap-4 justify-center text-right">
        <div>
          <Image src={rocket} alt="rocket" width={30} height={30} />
        </div>
        <div>
          <div>ارسال رایگان</div>
          <div className="text-sm text-gray-500">
            خریدهای بالای 90 هزارتومان
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center text-right">
        <div>
          <Image src={rocket} alt="rocket" width={30} height={30} />
        </div>
        <div>
          <div>ضمانت بازگشت</div>
          <div className="text-sm text-gray-500">90 روز ضمانت بازگشت</div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center text-right">
        <div>
          <Image src={rocket} alt="rocket" width={30} height={30} />
        </div>
        <div>
          <div>پرداخت آسان</div>
          <div className="text-sm text-gray-500">پرداخت آسان خریدها</div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center text-right">
        <div>
          <Image src={rocket} alt="rocket" width={30} height={30} />
        </div>
        <div>
          <div>پشتیبانی همه روزه</div>
          <div className="text-sm text-gray-500">پشتیبانی 7 روز هفته</div>
        </div>
      </div>
    </div>
  );
}
