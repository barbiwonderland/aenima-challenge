import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import logo from "../public/Assets/logo/logo_01.png"
import hamburgerIcon from "../public/Assets/iconos/hamburguer_menu.png"
import closeIcon from "../public/Assets/iconos/no.png"
function Navbar() {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
{/*       /*si el navbar esta abierto agrego un div de transparencia en todo el body*/
 }      <div className={nav ? "w-screen h-screen bg-black opacity-30 absolute  z-10" : null }></div>
      <div className={"navbar flex px-10 h-14 justify-between md:px-28 py-4 sm:p-0 items-center w-full z-30 p-4 ease-in duration-300 top-0 bg-white fixed"}>
        <Link href="/"><Image alt='' src={logo} /> </Link>
        {/*Desktop*/}
        <ul className='hidden sm:flex uppercase md:text-2xl'>
          <li  className={router.asPath == "/" ? "text-gray-700 p-4 font-bold" : "text-gray-400 p-4"} ><Link href="/"><span>Home</span></Link></li>
        <li className={router.asPath == "/#tendencias" ? "text-gray-700 p-4 font-bold" : "text-gray-400 p-4"}><Link  href="/#tendencias"><span>Tendecias</span></Link></li>
        <li className={router.asPath == "/#blog" ? "text-gray-700 p-4 font-bold" : "text-gray-400 p-4"}><Link  href="/#blog"><span>Blog</span></Link></li>
        </ul>
 
        {/* mobile  */}

        <div className="hamburger-icon block sm:hidden ">
          <div onClick={handleNav} className="z-20 relative" >
            {!nav ? <Image  src={hamburgerIcon} width="20px" height="20px" alt="" /> : <Image alt="" src={closeIcon} width="20px" height="20px" />}
          </div>
          <div  onClick={handleNav}className={!nav ? "hidden" : "flex  "}>
          <ul className='bg-white  border border-r-3  border-l-0 border-gray-400  z-10 pt-18 h-screen absolute top-0 right-0 pt-16 uppercase w-7/12' >
            <li  className='p-4 text-xl color-gray font-bold'>
              <Link href='/'>Home</Link>
            </li>
            <li  className='p-4 text-xl color-gray font-bold'>
              <Link href='/#tendencias'>Tendencias</Link>
            </li>
            <li  className='p-4 text-xl color-gray font-bold'>
              <Link href='/#blog'>Blog</Link>
            </li>
           
          </ul>
          </div>     
</div>
      </div>
    </>
    )
}

export default Navbar