"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
const ProductsList = React.lazy(() => import("./components/ProductsList"));
import Categories from "./components/Categories";
import Filters from "./components/Filters";
import { Suspense } from "react";
import SkeletonLoader from "./components/SkeletonLoader";
import PageBtn from "./components/PageBtn";
import TopBar from "./components/TopBar";
export default function Products() {
  return (
    <div className="bg-[#fff] text-black">
      <Navbar />
      <Route />
      <div className="flex w-full md:w-4/5 mx-auto p-8" dir="rtl">
        <div className="w-1/4 flex-col gap-8 hidden md:flex">
          <Categories />
          <Filters />
        </div>
        <div className="w-full md:w-3/4 flex flex-col px-8">
          <TopBar />
          <Suspense fallback={<SkeletonLoader />}>
            <ProductsList />
          </Suspense>
          <PageBtn />
        </div>
      </div>
      <Footer />
    </div>
  );
}
