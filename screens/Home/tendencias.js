import Loading from "@/components/Loading/Loading.jsx"
import TrendCard from "@/components/TrendCard/TrendCard"
import React, { useEffect, useState } from "react"
import { trending } from "../../data/data.js"
import Blog from "./blog.js"

function Tendencias() {
  const [isMobile, setIsMobile] = useState(true)
  const [loading, setLoading] = useState(false)

  const setViewport = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
      console.log("mobile")
    } else {
      setIsMobile(false)
      console.log("desktop")
    }
  }
  const setBadge = (date) => {
    const currentDate = new Date().toLocaleDateString()
    if (date === currentDate) {
      return true
    } else {
      return false
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    setViewport()
    window.addEventListener("resize", setViewport)
  }, [])
  return (
    <div id="tendencias">
      {" "}
      <div className="h-screen w-full bg-custom-gray d-flex  ">
        <h1 className="pl-[40px] pt-[45px] md:pt-[4rem] uppercase text-2xl font-bold text-start md:pl-[9rem]">
          Tendencias
        </h1>
        <div className="flex gap-5 justify-center mt-[1rem] sm:mt-[2rem] prueba">
          {loading ? (
            <div className="flex w-screen h-screen pt-20 justify-center">
              <Loading />
            </div>
          ) : trending && !isMobile ? (
            trending.map((trend) => (
              <TrendCard
                key={trend.id}
                img={trend.img}
                title={trend.title}
                badge={setBadge(trend.date)}
                subtitle={trend.description}
              />
            ))
          ) : (
            <TrendCard
              key={trending[0].id}
              img={trending[0].img}
              title={trending[0].title}
              badge={setBadge(trending[0].date)}
              subtitle={trending[0].description}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Tendencias
