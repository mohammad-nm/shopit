import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Route from "@/components/Route";
export default function Product() {
  return (
    <div className="bg-[#fff] text-black">
      <Navbar />
      <Route />
      <div className="max-w-[850px] mx-auto mt-14 mb-20" dir="rtl">
        <div className="flex justify-between items-center mb-8 border-b border-gray-300 pb-4">
          <div className="text-xl font-bold">مک بوک رتینا 12 اینچ</div>
          <div className="text-2xl font-bold">share icons</div>
        </div>
        <div className="flex gap-4 mb-10">
          <div className="w-1/2">
            <div className="w-full h-[400px] bg-[#f2f2f2]"></div>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-gray-300 pb-4">
              <div className="text-2xl font-bold">6939 تومان</div>
              <div className="text-sm text-[#00a881]"> وضعیت: موجود</div>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <div className="text-xs flex flex-col gap-1 font-semibold text-gray-400">
                <div>⁕ اسپیکرهای استریو با قابلیت سینک مستر</div>
                <div>⁕ اتصال بیسیم اسپیکرها به یکدیگر</div>
                <div>⁕ توان خروجی 20 وات</div>
                <div>⁕ دارای جک 3.5 میلی متری خروجی</div>
                <div>⁕ صدای لایه ای و پخش چند محیطه</div>
              </div>
            </div>
            <div className="flex items-center gap-6 border-b border-gray-300 pb-4">
              <div>تعداد</div>
              <div>
                {" "}
                <button className="bg-[#fcb800] hover:bg-[#fcb155] transition-all duration-300 text-black px-4 py-2 ">
                  افزودن به سبد خرید
                </button>
              </div>
              <div className="gap-2 flex items-center">
                <button>لایک</button>
                <button>مقایسه</button>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <div>شناسه : CD987654318</div>
              <div>
                دسته بندی ها: کامپیوتر و تکنولوژی , لپتاپ , موبایل و لوازم جانبی
              </div>
              <div>برچسب ها: تکنولوژی , لپتاپ</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border-b border-gray-300 gap-10">
          <button className="text-xl font-bold hover:text-[#fcb800] transition-all duration-300 hover:border-b-2 hover:border-[#fcb800] pb-4">
            توضیحات
          </button>
          <button className="text-xl font-bold hover:text-[#fcb800] transition-all duration-300 hover:border-b-2 hover:border-[#fcb800] pb-4">
            مشخصات
          </button>
          <button className="text-xl font-bold hover:text-[#fcb800] transition-all duration-300 hover:border-b-2 hover:border-[#fcb800] pb-4">
            نظرات
          </button>
        </div>
        <div className="mt-10">
          <div className="text-xl font-bold mb-4">
            قالب مارت فیوری یک قالب فروشگاهی ایده آل!
          </div>
          <div className="text-sm text-gray-500 mb-10">
            قالب فروشگاهی Martfury وردپرس یک قالب زیبا برای ایجاد یک فروشگاه چند
            منظوره برای وردپرس است که شما می توانید این قالب را در ژاکت تهیه
            نمایید و از امکانات بی نظیر آن لذت ببرید.لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
            و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </div>
          <img
            src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2013/06/p1.jpg"
            alt="product"
            className="w-full"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
