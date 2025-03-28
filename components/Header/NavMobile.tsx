"use client"
import { useState } from "react"
import { RiMenu2Line } from 'react-icons/ri'
import { IoCloseOutline } from 'react-icons/io5'

import Image from "next/image"
import Link from "next/link"
import logo from '@/public/about/midlogo.jpg'

const links = [
  {
    id:'1',  path:'/', name:'მთავარი', 
  },

  {
      id:'2',  path:'/all', name:'პროდუქტები', 
  },

  {
      id:'3',  path:'/about', name:'ჩვენ შესახებ', 
  },

]

function NavMobile({ containerStyles,  linkStyles }: { iconStyles: string, containerStyles: string, linkStyles: string }) {
  const [active, setActive] = useState(false)

  const handleLinkClick = () => {

    setActive(false)
  }

  return (
        <nav className={`${containerStyles}`}>
      <div onClick={() => setActive(!active)} className="cursor-pointer outline-none">
        <RiMenu2Line className="text-3xl text-white transition-all duration-200" />
      </div>
     <aside className={` ${active ? "right-0" : "-right-full"} bg-black fixed z-20 w-full h-screen p-10 top-0 transition-all duration-500`}>

        <div className="flex flex-col items-center  h-full">
          <div>
            <div onClick={() => setActive(false)} className="cursor-pointer flex items-center justify-center text-4xl text-white absolute w-10 h-10 top-8 bg-green left-8">
              <IoCloseOutline />
            </div>

            <Link href='/'>
              <Image src={logo} width={50}  alt="logo" />
            </Link>
          </div>

          <div className="flex text-black mt-[150px] flex-col gap-y-8">
            {links.map((l) => {
              return (
                <Link
                key={l.id} 
                href={l.path} 
                className="flex text-white items-center gap-x-3 text-xl" 
                onClick={handleLinkClick} 
              >
                <div className={`${linkStyles}`}>
                  {l.name}
                </div>
              </Link>
              )
            })}
          </div>

    
        </div>
      </aside>
    </nav>
  
 
  
  )
}

export default NavMobile
