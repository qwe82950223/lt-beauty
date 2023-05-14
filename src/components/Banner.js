import React, { memo } from 'react'
import styles from '../../global-styles/banner.module.scss'

const Banner = ({title}) =>{
    return(
        <div className={styles.banner} style={{backgroundImage: 'url(./images/bg2.jpg)'}}>
            <h1>{title}</h1>
        </div>
    )
}

export default memo(Banner)