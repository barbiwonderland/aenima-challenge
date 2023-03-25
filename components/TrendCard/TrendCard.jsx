import Image from 'next/image'
import React from 'react'
import Badge from '../Badge/Badge'
import styles from "./trendCard.module.css"
function TrendCard({ img, title, subtitle, badge }) {
    
  return (
      <>
          <div className={`sm:w-[352px] w-[286px] ${styles.cardContainer}`}>
          
         {badge ? <Badge title="NUEVO"/> : null } 
              <div className={styles.imgContainer}>
                  <Image alt={title}
                      width={352}
                      height={180}
                      src={img.src} />
              </div>
              <div className={`p-8 {styles.textContainer}`}>
              <div className={`text-base font-bold ${styles.titleCard}`}>
                     {title}
              </div>
              <div className={styles.subtitleCard}>
                     {subtitle}     
                  </div>
                  </div>
          </div>
      </>
  )
}

export default TrendCard