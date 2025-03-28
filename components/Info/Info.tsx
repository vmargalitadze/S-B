import React from 'react'
import first from "@/public/prod/1.jpg";
import Image from 'next/image';


function Info() {
  return (
    <>
      <section className="lg:py-[50px]">
        <section className="py-[20px] lg:py-[70px]">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
              {/* image */}
              <div className="flex-1 order-1 lg:-order-1">
                <Image
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={first}
                />
              </div>

              {/* text */}
              <div className="flex-1 flex flex-col gap-y-10 justify-center">
                <h3 className="text-xl lg:text-[30px] leading-tight text-center mb-4 font-semibold">
                  უზრუნველყოთ თქვენი მშვიდი ძილი
                </h3>
                <div className="font-normal text-lg max-lg:text-center max-w-2xl mx-auto mb-7 lg:mb-9">
                 
                  <p className="text-[18px] text-center lg:text-[20px] leading-relaxed mb-5 lg:mb-9">
                  ამჟამად კომპანია Sleep & Bed ექსპორტს ახორციელებს 25-ზე მეტ ქვეყანაში და 7 კონტინენტზე. ეს ობიექტი გამოირჩევა ეკოლოგიურად სუფთა ენერგიის წარმოების სისტემით. Sleep & Bed-ის ობიექტები აწარმოებენ საკუთარ ენერგიას 
                  მზის პანელების სისტემის მეშვეობით და იყენებენ მხოლოდ ეკოლოგიურად სუფთა და განახლებად ენერგიის წყაროებს.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Info;
