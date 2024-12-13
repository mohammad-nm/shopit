import axios from "axios";

export default function Categories() {
  //   const categories = await axios.get("http://localhost:5000/api/product");
  //   console.log(categories);
  return (
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
  );
}
