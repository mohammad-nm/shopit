import Image from "next/image";
import rocket from "@/svg/rocket.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-[#e1e1e1] flex flex-col gap-4 text-black" dir="rtl">
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
      <div className="flex justify-between px-8 py-4 my-4">
        <div className="flex flex-col gap-2">
          <div>لینک های سریع</div>
          <div className="flex flex-col gap-2">
            <Link href="/">ارسال</Link>
            <Link href="/">حریم خصوصی</Link>
            <Link href="/">سوالات متداول</Link>
            <Link href="/">قوانین و مقررات</Link>
            <Link href="/">رویه بازگرداندن کالا</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>شرکت ما</div>
          <div className="flex flex-col gap-2">
            <Link href="/">درباره ما</Link>
            <Link href="/">سوابق ما</Link>
            <Link href="/">نمایندگی</Link>
            <Link href="/">تماس با ما</Link>
            <Link href="/">فروشنده شوید</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <div>برگه های دیگر</div>
          <div className="flex flex-col gap-2">
            <Link href="/">پرداخت</Link>
            <Link href="/">فروشگاه</Link>
            <Link href="/">سبد خرید</Link>
            <Link href="/">حساب من</Link>
            <Link href="/">ارسال محصولات</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <div>خبرنامه</div>
          <div>
            <button>اشتراک</button>
            <input type="text" placeholder="ایمیل" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>لوازم الکتریکی:</div>
          <div>
            لوازم اداری | ماشین لباسشویی | یخچال | الکترونیک خودرو | تلویزیون |
            تهویه هوا | صوت و تصویر
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
