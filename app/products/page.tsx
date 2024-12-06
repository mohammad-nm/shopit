import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";

export default function Products() {
  return (
    <div className="bg-[#fff] text-black">
      <Navbar />
      <Route />
      <div className="flex max-w-[850px] mx-auto p-8" dir="rtl">
        <div className="w-1/4 flex flex-col gap-8">
          <div className="bg-[#f8f8f8] p-4 flex flex-col gap-2 text-sm font-semibold text-gray-500">
            <div className="text-lg text-black mb-4">دسته بندی ها</div>
            <div className="flex items-center justify-between gap-2">
              <div>بدون دسته‌بندی</div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>آشپزخانه و باغبانی</div>
              <div>{">"}</div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>پوشاک</div>
              <div>{">"}</div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>جواهرات و ساعت</div>
              <div>{">"}</div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>کتاب</div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>لوازم الکتریکی</div>
              <div>{">"}</div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>مادر و فرزند</div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>موبایل و لوازم جانبی</div>
              <div>{">"}</div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div>ورزشی</div>
              <div>{">"}</div>
            </div>
          </div>
          <div className="bg-[#f8f8f8] p-4 flex flex-col gap-4">
            {" "}
            <div>
              <div>فیلترهای فعال</div>
              <div>فیلترز</div>
            </div>
            <div>
              <div>فیلتر براساس برند</div>
              <div>
                <input
                  type="text"
                  placeholder="جستجوی برند"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <div>آدیداس</div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <div>اپل</div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <div>تسکو</div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <div>سامسونگ</div>
              </div>
            </div>
            <div>
              <div>فیلتر براساس قیمت</div>
              <div>
                <input type="range" className="w-full" />
              </div>
            </div>
            <div>
              <button className="bg-[#fcb800] text-black px-4 py-2 rounded-md w-full hover:bg-[#fcb155] transition-all duration-300 text-sm font-semibold">
                فیلتر
              </button>
            </div>
            <div>
              <div>فیلتر بر اساس رنگ</div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <div>سفید</div>
              </div>{" "}
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <div>مشکی</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex flex-col px-8">
          <div className="mb-6">نتیجه مطالعه برای ""</div>
          <div className="flex w-full justify-between bg-[#f5f5f5] p-4 items-center">
            <div className="flex gap-4">
              <div>نوع نمایش</div>
              <div className="flex gap-2">
                <div>icon</div>
                <div>icon</div>
              </div>
            </div>
            <div>
              <select
                name="sorting"
                id="sorting"
                className="w-72 border border-gray-300 px-3 h-9"
              >
                {" "}
                <option value="ارتباط"> ارتباط</option>
                <option value="ارتباط"> ارتباط</option>
                <option value="ارتباط"> ارتباط</option>
                <option value="ارتباط"> ارتباط</option>
              </select>
            </div>
            <div>10 محصول یافت شد</div>
          </div>
          <div className="p-4 flex flex-wrap w-full">
            <div className="w-1/4 hover:border border border-transparent hover:border-gray-400 p-2">
              <div className="w-full mb-2">
                <img
                  src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2019/08/18a.jpg"
                  alt=""
                />
              </div>
              <div className="text-blue-500 mb-2 font-semibold">
                تلویزیون هوشمند سامسونگ
              </div>
              <div className="font-medium">750 تومن</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
