
import React, { useEffect, useState, useRef } from 'react';
import styles from '../global-styles/about.module.scss'
import Banner from '../src/components/Banner'

function Book() {
        const containerRef = useRef(null);

  useEffect(() => {
    // Add the Square Appointments script only once
    if (!document.getElementById('square-widget-script')) {
      const script = document.createElement('script');
      script.src = 'https://app.squareup.com/appointments/buyer/widget/q7hk1c0pj80vjk/LNJFVDVN32JDC.js';
      script.async = true;
         containerRef.current.appendChild(script);
    }

  }, []);

    return (
    <section>
          <Banner title="Booking" />   
            <div ref={containerRef} style={{height: '950px'}}/>
     
    </section>
  );
}

export default Book;