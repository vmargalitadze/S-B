
import Hero from "@/components/Hero/Hero";
import Info from "@/components/Info/Info";
import Products from "@/components/Products/Products";


export default function Home() {
  return (
   <>
   
   <div className="w-full max-w-[1440px] mx-auto bg-white">

   <Hero />
   <Info />
   <Products />

   </div>
   </>
  );
}
