"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";

import { useState } from "react";

import ProductsList from "./components/ProductsList";
import LoadingList from "./components/LoadingList";
import Table from "./components/Table";

export default function Wishlist() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-[#fff] text-black">
      <Navbar />
      <Route />
      {loading ? (
        <LoadingList />
      ) : (
        <div
          className="flex flex-col gap-12 p-4 w-full sm:w-4/5 mx-auto sm:mt-14 mt-4 mb-20"
          dir="rtl"
        >
          <Table />

          {error ? (
            <div className="text-center text-2xl font-bold">{error}</div>
          ) : (
            <ProductsList />
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}
