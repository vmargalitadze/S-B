
import React from "react";

import { FaArrowRight } from "react-icons/fa";
import "./single.css";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import first from "@/public/prod/1.jpg";
import second from "@/public/prod/2.jpg";
import mesame from "@/public/prod/3.jpg";
import meotxe from "@/public/prod/4.jpg";
const products = [
  { id: 1, image: first, title: "Product One", desc: "მატრასი" },
  { id: 2, image: second, title: "Product Two", desc: "მატრასი" },
  { id: 3, image: mesame, title: "Product Three", desc: "მატრასი" },
  { id: 4, image: meotxe, title: "Product Four", desc: "მატრასი" },

];

function Products() {
  return (
<section className=" mt-5 pt-16  pb-11  lg:pb-16 ">
  <div className="container px-6 mx-auto">
    {/* Header Section */}
    <div className="flex flex-col lg:flex-row justify-between items-center mb-6 lg:mb-0">
      <h2 className="text-xl lg:text-[30px] leading-tight text-center mb-4 font-semibold">
        ჩვენი პროდუქტები
      </h2>
      <div className="flex items-center gap-2 group"> {/* Add group class here */}
  <Link className="flex gap-2 items-center hover:text-primary font-medium transition-all border-primary" href="/all">
    <span>დაათვალიერე</span>
    <span className="transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300">
      <FaArrowRight />
    </span>
  </Link>
</div>

    </div>

    {/* Product Grid Section */}
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
   
             {products.map((i) => (
     <div key={i.id} className="max-w-sm w-full rounded-2xl shadow-xl mb-9 relative group">
       
       {/* Image Container */}
       <div className="w-full h-96 cursor-pointer overflow-hidden relative rounded-lg">
         <Image 
           fill 
           className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-lg" 
           src={i.image} 
           alt="productImg" 
         />
       </div>
   
       {/* Card Content */}
       <div className="border border-gray-100 bg-white rounded-b-2xl flex flex-col justify-between leading-normal">
         <div className="p-4">
           
           <h2 className="text-gray-800 font-bold text-xl">{i.title}</h2>
           
           <p className="text-[16px] text-gray-600 font-normal"> {i.desc} </p>
         </div>
   
   
     
       </div>
     </div>
   ))}
    </div>
  </div>
</section>

 
  
  );
}

export default Products;
