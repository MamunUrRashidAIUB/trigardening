import React from 'react'
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export const Hero = () => {
  return (
     <div className="p-0 relative">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Slide Example */}
        <SwiperSlide>
          <div className="relative w-full h-[380px] md:h-[460px] lg:h-[520px] flex items-center">
            <img
              src="/images/heroimg1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-30"></div>
            {/* Content */}
            <div className="absolute left-8 md:left-20 top-1/3 transform -translate-y-1/4 z-10">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
                Nurture Your Green Paradise
              </h1>
              <p className="text-white text-lg md:text-xl mb-8">
                Your slogan goes here
              </p>
              <div className="flex gap-5">
                <button className="bg-[#c5731f] hover:bg-[#e0871f] text-white px-8 py-3 rounded-xl font-semibold text-lg transition">
                  Shop Now
                </button>
                <button className="bg-[#c5731f] hover:bg-[#e0871f] text-white px-8 py-3 rounded-xl font-semibold text-lg transition">
                  Call Now
                </button>
              </div>
            </div>
            {/* Swiper Pagination is auto-rendered */}
          </div>
        </SwiperSlide>
        {/* Copy or map for more slides */}
        <SwiperSlide>
          <div className="relative w-full h-[380px] md:h-[460px] lg:h-[520px] flex items-center">
            <img
              src="/images/heroimg1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-30"></div>
            <div className="absolute left-8 md:left-20 top-1/3 transform -translate-y-1/4 z-10">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
                Nurture Your Green Paradise
              </h1>
              <p className="text-white text-lg md:text-xl mb-8">
                Your slogan goes here
              </p>
              <div className="flex gap-5">
                <button className="bg-[#c5731f] hover:bg-[#e0871f] text-white px-8 py-3 rounded-xl font-semibold text-lg transition">
                  Shop Now
                </button>
                <button className="bg-[#c5731f] hover:bg-[#e0871f] text-white px-8 py-3 rounded-xl font-semibold text-lg transition">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[380px] md:h-[460px] lg:h-[520px] flex items-center">
            <img
              src="/images/heroimg1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-30"></div>
            <div className="absolute left-8 md:left-20 top-1/3 transform -translate-y-1/4 z-10">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
                Nurture Your Green Paradise
              </h1>
              <p className="text-white text-lg md:text-xl mb-8">
                Your slogan goes here
              </p>
              <div className="flex gap-5">
                <button className="bg-[#c5731f] hover:bg-[#e0871f] text-white px-8 py-3 rounded-xl font-semibold text-lg transition">
                  Shop Now
                </button>
                <button className="bg-[#c5731f] hover:bg-[#e0871f] text-white px-8 py-3 rounded-xl font-semibold text-lg transition">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
