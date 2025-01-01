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
export default function TopSellers() {
  return (
    <div className="w-full sm:w-1/3 h-full border border-gray-300 p-4">
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
  );
}
