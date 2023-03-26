import React from "react"
import Image from "next/image"
import MapIcon from "../../public/Assets/iconos/ic_pin.svg"
import arrow from "../../public/Assets/iconos/arrow.svg"
import navSlider from "../../public/Assets/iconos/nav_slider.svg"
import Tendencias from "./tendencias"
import styles from "./home.module.css"
import TrendCard from "@/components/TrendCard/TrendCard"
import Blog from "./blog"
function HomePage() {
  return (
    <>
      <div className={` relative z-0 w-screen ${styles.home}`}>
        <div className="  mx-auto md:mx-0 w-11/12 md:w-screen md:pl-52 md:justify-start titles content-center justify-center text-2xl  flex-wrap text-white h-full flex">
          <div className=" md:text-5xl inline-flex uppercase gap-3 font-bold border-b-2 border-white pb-3 pr-12 md:pr-0 mb-5">
            <Image className="object-contain" src={MapIcon} alt="" />
            america del sur
          </div>

          <div className="text-xl md:inline-flex md:text-2xl  mx-auto md:mx-0 font-semibold capitalize w-11/12 ">
            <span> lugares maravillosos por america del sur</span>
          </div>
          <div className="">
            {" "}
            <p className="hidden md:inline-flex text-base w-[500px]">
              Estos son algunos lugares que eligen la mayoria de los turistas
              que visitan America del sur.
            </p>
          </div>
        </div>
        <div className="  w-[150px] -left-16 nav-slider z-10 md:left-0 bottom-5 absolute  ">
          <Image src={navSlider} alt="" width={200} height={60} />
        </div>
        <div className={` ${styles.nextAdventure} hidden md:flex`}>
          <div className="w-[85%]">
            <div className="text-custom-pink font-bold uppercase text-base inline-flex gap-5">
              Proxima aventura <Image src={arrow} alt="" />
            </div>

            <div className="font-bold text-base">Europa Meridional</div>
            <div className="text-sm opacity-90">
              Forman parte de veinte paies, ej. España,Francia,etc.
            </div>
          </div>
        </div>
      </div>
      <Tendencias />
    </>
  )
}

export default HomePage
