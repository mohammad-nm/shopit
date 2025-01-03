import Headline from "./Headline";
import rocket from "@/svg/rocket.svg";
export default function Headlines() {
  return (
    <div className=" gap-4 w-full justify-between px-8 py-8 grid grid-cols-2 sm:flex-row sm:grid-cols-4">
      <Headline
        title="ضمانت بازگشت"
        description="90 روز ضمانت بازگشت"
        icon={rocket}
      />
      <Headline
        title="پرداخت آسان"
        description="پرداخت آسان خریدها"
        icon={rocket}
      />
      <Headline
        title="ارسال رایگان"
        description="خریدهای بالای 90 هزارتومان"
        icon={rocket}
      />
      <Headline
        title="پشتیبانی همه روزه"
        description="پشتیبانی 7 روز هفته"
        icon={rocket}
      />
    </div>
  );
}
