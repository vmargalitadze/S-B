"use client";
import React from 'react';
;
import 'swiper/css'; // Import Swiper styles
import "swiper/css/effect-coverflow";


import './hero.css';
import "swiper/css/pagination";
import Link from 'next/link';

function Hero() {
  return (
    <>
  <section className=' bg-hero pt-[225px] pb-[54px] relative  lg:bg-center lg:mb-24  bg-right bg-cover bg-no-repeat text-white  w-full h-[850px]'>
    <div className="container mx-auto text-center  ">
      <h1 className='text-2xl lg:max-w-[888px] mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight '> Sleep&Bed </h1>
      <h2 className='mb-[30px] max-w-[672px] mx-auto lg:mb-[65px] lg:text-xl ' > საუკეთესო ძილი ყველასთვის </h2>
      <Link
  className="herolink px-[35px] py-[9px] 
  mb-[160px] text-xl lg:mb-[190px] rounded-md backdrop-blur-md transition lg:py-[16px] lg:px-[80px]"
  href="/all"
>
  დაათვალიერე
</Link>

    </div>
  </section>


      
    </>
  );
}

export default Hero;
