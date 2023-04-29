import React, { memo } from 'react'
import './scss/Banner.scss'

const Banner = ({title}) =>{
    return(
        <div className="banner" style={{backgroundImage: 'url(./images/bg2.jpg)'}}>
            <h1>{title}</h1>
        </div>
    )
}

export default memo(Banner)