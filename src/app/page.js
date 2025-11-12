"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Hero } from "./components/layout/Pages/Home/Home/Hero/Hero";
import { Category } from "./components/layout/Pages/Home/Home/Category/Category";

export default function Home() {
  return (
   <div className="bg-white">
     <Hero />
   <p className="text-green-700 text-center text-3xl ">Shop by Category 
   </p>
   <Category  />
   </div>
  
  
  );
}
