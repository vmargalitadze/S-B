"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from '@/public/about/midlogo.jpg'
import Nav from "./Nav"
import NavMobile from "./NavMobile" 

function Header() {
    const [active, setActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Log the scroll position
            console.log("Scroll position:", scrollPosition);

        
            if (scrollPosition > 0 && !active) {
                console.log("Header is now active, scroll position:", scrollPosition);
            }

            setActive(scrollPosition > 0); 
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [active]) 

  return (
    <header className={`${active ? 'bg-black spy-4 p-4 text-white' : 'bg-none textColor py-8 ' }  fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200 `}>
        <div className="container px-6 mx-auto">
            <div className="flex z-[70px] items-center justify-between ">

                <Link href='/'>
                    <div
                        className={`${
                            active ? ' p-2 rounded-md' : ''
                        } transition-all duration-200`}
                    >
                        <Image 
                            src={logo} 
                            width={50} 
                            alt="logo" 
                            className={`transition-all duration-200`} 
                        />
                    </div>
                </Link>

                <Nav 
                    linkStyles={`capitalize ${active ? 'text-white ' : 'text-white'}`} 
                    containerStyles="hidden text-2xl px-6 xl:flex gap-x-12" 
                />

                <NavMobile iconStyles='text-3xl !text-white' containerStyles="xl:hidden h-full z-70" linkStyles="uppercase" />
            </div>
        </div>
    </header>
  )
}

export default Header
