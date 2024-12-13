export default function Filters() {
  return (
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
  );
}
