import React from 'react'
import styles from "./badge.module.css"
function Badge({title}) {
  return (
      <div className={`bottom-[153px] md:bottom-[118px] w-[69px] h-[27px] sm:w-[83px] sm:h-[32px] ${styles.badgeContainer}`}>
          <h1>{ title}</h1>
  </div>
  )
}

export default Badge