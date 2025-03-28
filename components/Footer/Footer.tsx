import Link from 'next/link'
import React from 'react'
import logo from '@/public/about/midlogo.jpg'
import Image from 'next/image'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative bg-black text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:justify-between text-center lg:text-left">
          
          {/* Left Side: Logo and Social Media Icons */}
          <div className="w-full lg:w-4/12 px-4 mb-6 lg:mb-0  flex flex-col items-center ">
            {/* Logo */}
            <Image 
              src={logo} 
              width={50} 
              alt="logo" 
              className="transition-all duration-200 mb-4"
            />
            
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" className=" hover:text-blueGray-800">
                <FaFacebook size={30} />
              </a>
              <a href="https://wa.me" target="_blank" className="text-blueGray-600 hover:text-blueGray-800">
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>

          {/* Right Side: Links and Contact Information */}
          <div className="w-full lg:w-7/12 px-4">
            <div className="flex flex-wrap justify-center lg:justify-start">
              {/* Sleep&Bed Links */}
              <div className="w-full lg:w-4/12 px-4 mb-4 lg:mb-0">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Sleep&Bed</span>
                <ul className="list-unstyled text-center lg:text-left">
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">მთავარი</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/all">პროდუქტები</Link>
                  </li>
                  <li>
                    <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">ჩვენს შესახებ</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">კონტაქტები</span>
                <ul className="list-unstyled text-center lg:text-left">
                  <li className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                    <FaMapMarkerAlt className="text-blueGray-600" />
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">მისამართი</p>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                    <FaPhone className="text-blueGray-600" />
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">ტელეფონი</p>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start space-x-2">
                    <FaEnvelope className="text-blueGray-600" />
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">მეილი</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
