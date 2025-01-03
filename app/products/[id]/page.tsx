"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Route from "@/components/Route";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import getProduct from "./tools/getProduct";
import AddToWishlistBtn from "./components/AddToWishlistBtn";
import cookies from "js-cookie";
import AddToCartBtn from "./components/AddToCartBtn";
import QuantityInput from "./components/QuantityInput";
import CompareBtn from "./components/ComapreBtn";
import ProductTitle from "./components/ProductTitle";
import ProductImage from "./components/ProductImage";
import ProductPrice from "./components/ProductPrice";
import ProductOptions from "./components/ProductOptions";
import SectionsBtn from "./components/SectionsBtn";
import ProductId from "./components/ProductId";
import ProductDescription from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";
import ProductComments from "./components/ProductComments";
interface Product {
  title: "";
  pictureUrls: string[];
  options: [];
  id: "";
  categories: [];
  tags: [];
  available: false;
  price: "";
  description: "";
  info: [];
  comments: [];
}

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
  const [product, setProduct] = useState<Product>({
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
      <div className="w-full md:w-4/5 mx-auto mt-14 mb-20" dir="rtl">
        <ProductTitle title={product.title} />
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <ProductImage image={product.pictureUrls[0]} />

          <div className="w-full md:w-1/2 flex flex-col gap-4 p-8">
            <ProductPrice price={product.price} available={product.available} />
            <ProductOptions options={product.options as []} />
            <div className="flex flex-col xl:flex-row  items-center gap-6 border-b border-gray-300 pb-4">
              <QuantityInput
                quantity={quantity as number}
                setQuantity={setQuantity}
              />
              <AddToCartBtn
                productId={productId as string}
                quantity={quantity as number}
              />
              <div className="gap-20 p-4 flex items-center">
                <AddToWishlistBtn
                  productId={productId as string}
                  token={token}
                />
                <CompareBtn />
              </div>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <ProductId
              categories={product.categories as []}
              id={product.id}
              tags={product.tags as []}
            />
          </div>
        </div>
        <SectionsBtn
          description={description}
          setDescription={setDescription}
        />
        {description === "description" ? (
          <ProductDescription
            description={product.description}
            image={product.pictureUrls[0]}
          />
        ) : description === "info" ? (
          <ProductInfo info={product.info as []} />
        ) : description === "comments" ? (
          <ProductComments
            comments={product.comments as []}
            title={product.title}
          />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
