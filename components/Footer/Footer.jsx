import { Fb, Ig } from '@/public/Assets/iconos'
import Image from 'next/image'
import React from 'react'
import Logo from "../././../public/Assets/logo/logo_02.svg"
function Footer() {
  return (
      <>
          <div className="darkGrey-bg items-center text-white flex justify-between px-24 bg-black h-[80px] sm:h-[96px] w-full absolute bottom-0  ">
              <div className="">
               <Image alt='logo' src={Logo}/>
              </div>
              <div className="flex gap-3">
              <Image alt='ig' src={Ig} />
              <Image alt='fb' src={Fb} />
 
              </div>
          </div>
      </>
  )
}

export default Footer