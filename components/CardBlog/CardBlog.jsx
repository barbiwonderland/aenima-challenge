import { Clock } from '@/public/Assets/iconos'
import Image from 'next/image'
import React from 'react'
import styles from "./cardBlog.module.css"

function CardBlog({title,footer,img}) {
  return (
      <>
          <div className={`lowercase ${styles.cardContainer}`}>
              <div className={styles.cardImg}><Image src={img} alt="" width={352} height={210} /></div>
              <div className="pt-3">
                  <h1 className='font-bold text-dark first-letter:uppercase text-base'>{title}</h1>
                  <div className=' gap-2 inline-flex color-[custom-gray]  text-[13px]'><Image alt='' src={Clock} width={16} height={16} /><p className='first-letter:uppercase'>{ footer}</p></div>
              </div>
      </div>
      </>
  )
}

export default CardBlog