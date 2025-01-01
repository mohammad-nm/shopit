export default function BestOfTheMonth() {
  return (
    <div className="w-full text-black flex flex-col gap-4 p-8">
      <div className="text-3xl font-bold text-gray-500 text-right mb-10">
        برترین دسته های ماه
      </div>
      <div className="flex flex-wrap max-w-[600px]:flex-col gap-8 justify-between ">
        <div className="min-[600px]:w-1/4 w-full border border-gray-300 p-4 flex flex-col gap-2 items-center justify-center hover:border-yellow-300 hover:shadow-md hover:cursor-pointer ">
          <img
            src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2017/12/1-170x170.jpg"
            alt=""
          />
          <div className="text-md font-bold text-blue-400">لوازم خانگی</div>
        </div>
        <div className="min-[600px]:w-1/4 w-full border border-gray-300 p-4 flex flex-col gap-2 items-center justify-center hover:border-yellow-300 hover:shadow-md ">
          <img
            src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2017/12/2-170x170.jpg"
            alt=""
          />
          <div className="text-md font-bold text-blue-400">لوازم خانگی</div>
        </div>
        <div className="min-[600px]:w-1/4 w-full border border-gray-300 p-4 flex flex-col gap-2 items-center justify-center hover:border-yellow-300 hover:shadow-md ">
          <img
            src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2013/06/27a-170x170.jpg"
            alt=""
          />
          <div className="text-md font-bold text-blue-400">لوازم خانگی</div>
        </div>
        <div className="min-[600px]:w-1/4 w-full border border-gray-300 p-4 flex flex-col gap-2 items-center justify-center hover:border-yellow-300 hover:shadow-md ">
          <img
            src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2013/06/9a-170x170.jpg"
            alt=""
          />
          <div className="text-md font-bold text-blue-400">لوازم خانگی</div>
        </div>
        <div className="min-[600px]:w-1/4 w-full border border-gray-300 p-4 flex flex-col gap-2 items-center justify-center hover:border-yellow-300 hover:shadow-md ">
          <img
            src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2013/06/14a-170x170.jpg"
            alt=""
          />
          <div className="text-md font-bold text-blue-400">لوازم خانگی</div>
        </div>
        <div className="min-[600px]:w-1/4 w-full border border-gray-300 p-4 flex flex-col gap-2 items-center justify-center hover:border-yellow-300 hover:shadow-md ">
          <img
            src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2017/11/34a-170x170.jpg"
            alt=""
          />
          <div className="text-md font-bold text-blue-400">لوازم خانگی</div>
        </div>
      </div>
    </div>
  );
}
