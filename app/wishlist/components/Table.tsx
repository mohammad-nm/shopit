export default function Table() {
  return (
    <>
      <div className="sm:text-5xl text-xl font-bold text-center">
        علاقه مندی ها
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-col gap-4  ">
          <div className="text-3xl font-bold">لیست علاقه مندی های من</div>
          <div className="flex gap-4 justify-between items-center bg-[#f2f2f2] p-2 rounded-md text-sm text-gray-800 xl:gap-x-24">
            <div className="w-1/2 sm:text-center text-left">نام محصول</div>
            <div className="w-1/4 text-center hidden sm:block">قیمت</div>
            <div className="w-1/4 hidden sm:block"> وضعیت</div>
          </div>
        </div>
      </div>
    </>
  );
}
