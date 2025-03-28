import Link from 'next/link'
import React from 'react'
import logo from '@/public/about/midlogo.jpg'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
function Footer() {
  return (
  <>
  <footer className="bgc  text-black  pb-8 px-4">
    <div className=" border-t   border-gray-800 mb-14"></div>
    <div className="mx-auto px-4 container overflow-hidden  flex flex-col lg:flex-row justify-between">
        <Link href="/" className="block mr-4 w-1/3">
            <Image src={logo} className="w-40 ml-4 lg:ml-0" alt="logo" />
        </Link>
        <div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
       
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li className="inline-block py-2 px-3 textColor uppercase text-2xl font-medium tracking-wide"> კომპანია</li>
                <li><Link href="/" className="inline-block text-[20px] py-2 px-3 text-black hover:text-white no-underline">მთავარი</Link>
                </li>
                <li><Link href="/about" className="inline-block text-[20px] py-2 px-3 text-black hover:text-white no-underline">ჩვენს შესახებ</Link></li>
                <li><Link href="/all" className="inline-block text-[20px] py-2 px-3 text-black hover:text-white no-underline">პროდუქტები</Link></li>
            </ul>
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li className="inline-block py-2 px-3 textColor uppercase text-2xl font-medium tracking-wide">კონტაქტები</li>
                <li><p className="inline-block py-2 px-3 text-black hover:text-white no-underline">ტელ ++</p></li>
                <li><p  className="inline-block py-2 px-3 text-black hover:text-white no-underline">მეილი ++</p></li>
                <li><p  className="inline-block py-2 px-3 text-black hover:text-white no-underline">მისამართი ++</p></li>
                
            </ul>
            <div className="text-gray-700 flex flex-col w-full">
                <div className="inline-block py-2 px-3 textColor uppercase text-2xl font-medium tracking-wide">თვალი გვადევნე</div>
                <div className="flex pl-4 justify-start mt-2">
                    <Link className="block  items-center text-black hover:text-white mr-6 no-underline" href="#">
                        <FaFacebook className='w-5 h-5' />
                        </Link>
                    <Link className="block  items-center text-black hover:text-white mr-6 no-underline" href="#">
                       <FaWhatsapp className='w-5 h-5' />
                    </Link>
                   
                </div>
            </div>
        </div>
    </div>
   
</footer>
  
  </>
  )
}

export default Footer