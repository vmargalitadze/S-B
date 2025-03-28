
import React from 'react'
import Link from 'next/link'
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

 function Nav({containerStyles, linkStyles}:{containerStyles:string, linkStyles:string } ) {
  
  return (
  <nav className={` ${containerStyles} `}>
    {links.map( (l) => {
        return <Link key={l.id}
        className={` ${linkStyles} `}
       href={l.path}> {l.name} </Link>
    } )}
  </nav>
  )
}

export default Nav