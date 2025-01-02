"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Route from "@/components/Route";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";
import CompareSvg from "@/svg/compare.svg";
import MinusSvg from "@/svg/minus.svg";
import PlusSvg from "@/svg/plus.svg";
import getProduct from "./tools/getProduct";
import AddToWishlistBtn from "./components/AddToWishlistBtn";
import cookies from "js-cookie";
import AddToCartBtn from "./components/AddToCartBtn";

export default function Product() {
  const router = useRouter();
  const params = useParams();
  if (!params) {
    router.push("/products");
    return;
  }
  const token = cookies.get("session");
  const productId = params.id;
  if (!productId) {
    router.push("/products");
    return;
  }

  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    title: "",
    pictureUrls: [],
    options: [],
    id: "",
    categories: [],
    tags: [],
    available: false,
    price: "",
    description: "",
    info: [],
    comments: [],
  });
  const [description, setDescription] = useState("description");
  const error = useSelector((state: any) => state.ui.error);

  useEffect(() => {
    const get = async () => {
      console.log(productId);
      const product = await getProduct(productId as string);
      console.log(product);
      setProduct(product);
    };
    get();
  }, []);

  return (
    <div className="bg-[#fff] text-black">
      <Navbar />
      <Route />
      <div className="max-w-[850px] mx-auto mt-14 mb-20" dir="rtl">
        <div className="flex justify-between items-center mb-10 border-b border-gray-300 pb-4">
          <div className="text-xl font-bold">{product.title}</div>
          <div className="text-2xl font-bold">share icons</div>
        </div>
        <div className="flex gap-4 mb-10">
          <div className="w-1/2">
            <img
              src={product.pictureUrls[0]}
              alt="product picture"
              className="h-3/4 object-cover w-full"
            />
          </div>

          <div className="w-1/2 flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-gray-300 pb-4">
              <div className="text-2xl font-bold">{product.price} تومان</div>
              <div className="text-sm text-[#00a881]">
                وضعیت: {product.available ? "موجود" : "ناموجود"}
              </div>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <div className="text-xs flex flex-col gap-1 font-semibold text-gray-400">
                {product.options.map((option: any, index: number) => (
                  <div key={index}>⁕ {option.name}</div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-6 border-b border-gray-300 pb-4">
              <div
                className="flex items-center border border-gray-300 rounded-md"
                dir="ltr"
              >
                <button
                  className="cursor-pointer  p-3"
                  onClick={() =>
                    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
                  }
                >
                  <Image src={MinusSvg} alt="minus" width={15} height={15} />
                </button>
                <div>
                  <input
                    type="text"
                    className="w-10 text-center border-none outline-none"
                    placeholder="1"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    value={quantity ? quantity : 1}
                  />
                </div>
                <button
                  className="cursor-pointer p-3"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Image src={PlusSvg} alt="plus" width={15} height={15} />
                </button>
              </div>
              <AddToCartBtn
                productId={productId as string}
                quantity={quantity as number}
              />
              <div className="gap-8 flex items-center">
                <AddToWishlistBtn
                  productId={productId as string}
                  token={token}
                />
                <button className="flex flex-col items-center">
                  <Image
                    src={CompareSvg}
                    alt="compare"
                    width={20}
                    height={20}
                  />
                  <div className="text-xs">Compare</div>
                </button>
              </div>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <div className="flex flex-col gap-1 text-sm">
              <div>شناسه : {product.id}</div>
              <div>دسته بندی ها: {product.categories.join(", ")}</div>
              <div>برچسب ها: {product.tags.join(", ")}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border-b border-gray-300 gap-10">
          <button
            className={`text-xl font-bold hover:text-[#fcb800] transition-all duration-300  hover:border-b-[#fcb800] pb-4 border-b-2 border-b-transparent ${
              description === "description"
                ? "border-b-[#fcb800] text-[#fcb800] "
                : ""
            }`}
            onClick={() => setDescription("description")}
          >
            توضیحات
          </button>
          <button
            className={`text-xl font-bold hover:text-[#fcb800] transition-all duration-300  hover:border-b-[#fcb800] pb-4 border-b-2 border-b-transparent ${
              description === "info" ? "border-b-[#fcb800] text-[#fcb800] " : ""
            }`}
            onClick={() => setDescription("info")}
          >
            مشخصات
          </button>
          <button
            className={`text-xl font-bold hover:text-[#fcb800] transition-all duration-300  hover:border-b-[#fcb800] pb-4 border-b-2 border-b-transparent ${
              description === "comments"
                ? "border-b-[#fcb800] text-[#fcb800] "
                : ""
            }`}
            onClick={() => setDescription("comments")}
          >
            نظرات
          </button>
        </div>
        {description === "description" ? (
          <div className="mt-10" dir="ltr">
            <div className="text-xl font-bold mb-4">{product.description}</div>
            <div className="text-sm text-gray-500 mb-10">
              {product.description}
            </div>
            <img
              src={product.pictureUrls[0]}
              alt="product"
              className="w-full"
            />
          </div>
        ) : description === "info" ? (
          <div className="mt-10">
            <div>
              <div className="flex flex-col ">
                {product.info.map((info: any) => (
                  <div
                    key={info.infoTitle}
                    className="flex border border-gray-300 gap-10 "
                    dir="ltr"
                  >
                    <div className="text-xl font-semibold w-1/6 bg-gray-200 p-4">
                      {info.infoTitle}
                    </div>
                    <div className="text-sm text-gray-500 font-semibold p-4">
                      {info.info}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : description === "comments" ? (
          <div className="mt-14">
            <div className="font-bold text-lg">
              اولین نفری باشید که دیدگاهی را برای “{product.title}” ارسال می
              کنید
            </div>
            <div className="mt-6">امتیاز شما به این محصول</div>

            <div>
              <input
                type="text"
                className="w-full h-32 border border-gray-300 p-4 mt-8 "
              />
              <div className="mt-[-80px] mr-6 font-semibold text-gray-400 ">
                بررسی خود را اینحا بنویسید...
              </div>
            </div>
            <div className="flex justify-between items-center mt-24">
              <button className="bg-[#fcb800] hover:bg-[#fcb155] transition-all duration-300 text-black px-4 py-2 ">
                ارسال دیدگاه
              </button>
            </div>
            <div className="mt-10">
              <div className="text-xl font-bold">دیدگاه ها</div>
            </div>
            <div className="mt-10" dir="ltr">
              {product.comments.map((comment: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 p-4 bg-gray-100 rounded-md mb-4"
                >
                  <div className="text-2xl font-bold">
                    {comment.commentedBy}{" "}
                    <span className="text-gray-500 text-sm">
                      ⁕{comment.date}
                    </span>
                  </div>
                  <div className="text-md text-gray-500">{comment.comment}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Footer />
    </div>
  );
}
