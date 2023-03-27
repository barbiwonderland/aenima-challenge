import RecentCardBlog from "@/components/recentCard/RecentCardBlog"
import { blog } from "../data.js"
import React, { useEffect, useState } from "react"
import CardBlog from "@/components/CardBlog/cardBlog.jsx"
import Loading from "@/components/Loading/Loading.jsx"

function Blog() {
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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    setViewport()
    window.addEventListener("resize", setViewport)
  }, [])
  return (
    <>
      <div id="blog" className="  w-full -mt-[14rem]">
        <h1 className="uppercase text-dark text-2xl font-bold  pl-[2rem] sm:pl-[9rem] pb-[2.3rem]">
          Blog
        </h1>
        <div className="gap-7 flex h-[982px]  w-screen content-center flex-wrap flex-col">
          {" "}
          {loading ? (
            <div className="flex w-screen h-screen pt-20 justify-center">
              <Loading />
            </div>
          ) : (
            blog &&
            blog.map((item, index) => {
              if (index < 2) {
                return (
                  <RecentCardBlog
                    title={item.title}
                    key={index}
                    category={item.badge}
                    footer={item.footer}
                    img={item.img}
                    description={item.description}
                  />
                )
              } else if (!isMobile && index < 5) {
                return (
                  <CardBlog
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    footer={item.footer}
                  />
                )
              }
            })
          )}
        </div>
      </div>
    </>
  )
}

export default Blog
