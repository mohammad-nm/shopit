"use client";
import Footer from "@/components/Footer";
import Headlines from "@/components/footer components/Headlines";
import Navbar from "@/components/Navbar";
import Route from "@/components/Route";
import HeadSlider from "./components/HeadSlider";
import HotOffers from "./components/HotOffers";
import TopSellers from "./components/TopSellers";
import HotOffersSlider from "./components/HotOffersSlider";
import BestOfTheMonth from "./components/BestOfTheMonth";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <Route />
      <div className="w-full sm:w-4/5 mx-auto">
        <div className="w-full">
          <HeadSlider />
        </div>

        <div className="w-full bg-white text-black ">
          <Headlines />
        </div>
        <div>
          <HotOffers />
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between  gap-8 px-4 py-8 bg-white">
          <HotOffersSlider />
          <TopSellers />
        </div>
        <div>
          <BestOfTheMonth />
        </div>
      </div>
      <Footer />
    </div>
  );
}
