export default function HeadSlider() {
  return (
    <div className=" w-full box-content text-black flex justify-center items-center ">
      <img
        src="//mimwp.com/theme/martfury/demo8/wp-content/uploads/revslider/home_market_v4/s6-1.jpg"
        alt=""
        className="w-full"
      />
      <div className="absolute left-6 p-4  bg-gray-300">left</div>
      <div className="absolute right-6 p-4  bg-gray-300">right</div>
      <div className="absolute bg-gray-300">product</div>
    </div>
  );
}
