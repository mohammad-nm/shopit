"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { setCart } from "@/store/user";
import ProductList from "./components/ProductList";
import Payment from "./components/Payment";
import RefreashBtn from "./components/RefreashBtn";
import BackToHomeBtn from "./components/BackToHomeBtn";
import Loading from "./components/Loading";
import Empty from "./components/Empty";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.user.cart);
  const userId = useSelector((state: any) => state.user._id);
  const [products, setProducts] = useState<[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const handleDelete = async (productId: string) => {
    try {
      if (!userId) {
        dispatch(
          setCart(cart.filter((item: any) => item.productId !== productId))
        );
        return;
      }
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
        {
          userId,
          productId,
          quantity: 0,
        }
      );
      const data = await res.data;
      if (res.status === 200) {
        dispatch(setCart(data.cart));

        setError("");
      } else {
        setError("محصول با موفقیت حذف نشد");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetProducts = async () => {
    setLoading(true);
    try {
      const ids = cart.map((item: any) => item.productId);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/ids`,
        {
          ids,
        }
      );
      const data = await res.data;
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetProducts();
  }, [cart]);

  return (
    <div className="bg-[#fff]">
      <Navbar />
      <Route />
      <div
        className="flex flex-col sm:p-10 p-4 text-black justify-center items-center sm:mt-14 mt-4  w-full xl:w-4/5 mx-auto sm:mb-20 gap-4"
        dir="rtl"
      >
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="md:text-5xl text-3xl font-bold sm:mb-20 mb-10">
              سبد خرید
            </div>
            {products.length === 0 ? (
              <Empty />
            ) : (
              <>
                <ProductList
                  handleDelete={handleDelete}
                  products={products}
                  cart={cart}
                />
                <div className="flex flex-col text-center sm:justify-between sm:flex-row w-full gap-4 mb-10 sm:px-10">
                  <BackToHomeBtn />
                  <RefreashBtn handleGetProducts={handleGetProducts} />
                </div>
                <Payment products={products} cart={cart} />
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
