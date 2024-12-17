import Footer from "@/components/Footer";
import Headlines from "@/components/footer/Headlines";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import HeadSlider from "./components/HeadSlider";
export default function Home() {
  const products = [
    {
      id: 1,
      name: "product 1",
      price: 100,
    },
    {
      id: 2,
      name: "product 2",
      price: 200,
    },
    {
      id: 3,
      name: "product 3",
      price: 300,
    },
    {
      id: 4,
      name: "product 4",
      price: 400,
    },
    {
      id: 5,
      name: "product 5",
      price: 500,
    },
    {
      id: 6,
      name: "product 6",
      price: 600,
    },
    {
      id: 7,
      name: "product 7",
      price: 700,
    },
    {
      id: 8,
      name: "product 8",
      price: 800,
    },
    {
      id: 9,
      name: "product 9",
      price: 900,
    },
  ];
  return (
    <div className="bg-white">
      <Navbar />
      <Route />
      <div className="max-w-[840px] mx-auto">
        <HeadSlider />

        <div className="w-full bg-white text-black ">
          <Headlines />
        </div>

        <div className="w-full bg-white flex justify-between items-center gap-8 px-4 py-8">
          <div>
            <img
              src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2019/08/bn10.jpg"
              alt=""
              className="border border-gray-400"
            />
          </div>
          <div>
            <img
              src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2019/08/bn11.jpg "
              alt=""
              className="border border-gray-400"
            />
          </div>
        </div>

        <div className="w-full flex justify-between  gap-8 px-16 py-8 bg-white">
          <div
            className="w-full h-full flex flex-col gap-4 border border-yellow-600 p-4"
            dir="rtl"
          >
            <div className="text-2xl text-start font-bold text-blue-400 border-b-2 border-gray-300 pb-4 ">
              پیشنهاد شگفت انگیز
            </div>
            <div className="w-full h-full">
              <div className="w-full h-full bg-gray-400">slider</div>
            </div>
          </div>
          <div className="w-1/3 h-full border border-gray-300 p-4">
            <div
              dir="rtl"
              className="text-2xl mb-8 font-bold text-blue-400 border-b border-gray-300 pb-4"
            >
              پرفروش ترین ها
            </div>
            <div className="flex flex-col gap-4 ">
              {products.map((product) => {
                return (
                  <div key={product.id} className="flex justify-between ">
                    <div className="flex flex-col gap-2 items-center w-full justify-center">
                      <div className="text-xl font-bold text-blue-400">
                        {product.name}
                      </div>
                      <div className="gap-2 flex items-center text-md font-bold text-gray-400">
                        <span className="text-sm text-gray-400">تومان</span>
                        {product.price}
                      </div>
                    </div>
                    <div className="w-1/2">
                      <img
                        src="https://mimwp.com/theme/martfury/demo8/wp-content/uploads/2019/08/14a.jpg"
                        alt="product image"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
      </div>
      <Footer />
    </div>
  );
}
