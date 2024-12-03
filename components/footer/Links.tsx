import Link from "next/link";

export default function Links() {
  return (
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
  );
}
