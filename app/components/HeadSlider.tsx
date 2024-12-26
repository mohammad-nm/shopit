import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
export default function HeadSlider() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "vertical",
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    console.log(swiper);
    // Clean up the Swiper instance when the component unmounts
    return () => swiper.destroy();
  }, []); // Empty dependency array ensures it runs only once

  const slides = [
    "https://mimwp.com/theme/martfury/demo8/wp-content/uploads/revslider/home_market_v4/s6-1.jpg",
    "https://mimwp.com/theme/martfury/demo8/wp-content/uploads/revslider/home_market_v4/s6-1.jpg",
    "https://mimwp.com/theme/martfury/demo8/wp-content/uploads/revslider/home_market_v4/s6-1.jpg",
  ];
  return (
    <div className="swiper mt-20 h-[300px] w-full">
      <div className="swiper-wrapper flex justify-center text-black">
        {slides.map((slide, index) => (
          <div key={index} className="swiper-slide">
            <img src={slide} alt="" className="object-fill w-full h-full " />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
