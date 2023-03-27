import { Clock } from '@/public/Assets/iconos'
import Image from 'next/image'
import React from 'react'
import styles from "./recentCard.module.css"
function RecentCardBlog({ title, description, footer, category, img }) {
    console.log(img.src)
  return (
      <>
          <div 
            style={{ background: `url(${(img.src)}) `}}
            className={`lowercase pl-8 grid content-between py-12  w-[360px] sm:w-[720px] ${styles.cardContainer}`}>
              <div className='uppercase font-bold text-white '>
                  {category}
              </div>
              <div className={` text-white ${styles.cardInfo}`}>
                  <div className="pb-5"> <h1 className='font-bold text-2xl first-letter:capitalize'>{title}</h1>
                  <p className='hidden sm:flex first-letter:capitalize'>{description}</p></div>
                  <div className='  color-[custom-gray] inline-flex gap-2 text-[13px]'><Image alt='' src={Clock } width={16} height={16} /><p className='first-letter:capitalize'>{ footer}</p></div>
              </div>
          </div>
      </>
  )
}

export default RecentCardBlog