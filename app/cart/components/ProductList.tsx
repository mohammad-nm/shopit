import Product from "./Product";

export default function ProductList({
  handleDelete,
  products,
  cart,
}: {
  handleDelete: any;
  products: [];
  cart: [];
}) {
  return (
    <div className=" w-full p-4 flex flex-col items-center mb-10">
      <div className="text-md font-bold sm:flex justify-between w-full px-24 bg-[#f2f2f2] rounded-md p-2 hidden ">
        <div className="w-1/2">محصول</div>
        <div className="w-1/2 flex justify-between">
          <div>قیمت</div>
          <div>تعداد</div>
          <div>جمع کل</div>
        </div>
      </div>
      {products.map((item: any) => {
        const cartItem = cart.find((c: any) => c.productId === item._id) || {
          quantity: 0,
        };
        return (
          <Product
            item={item}
            cartItem={cartItem}
            key={item._id}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}
