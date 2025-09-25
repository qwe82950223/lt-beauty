import React from 'react';
import styles from '../../global-styles/footer.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation, } from "react-i18next";
import Link from 'next/link';

const Footer = () =>{
     const{ t, i18n } = useTranslation();
     
    return(
        <section className={styles.footer}>
            <div className={styles.footerBody}>
                <img src="/images/logo_white.png"  alt="lt beauty logo" />
                <ul>
                    <li><InstagramIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><TwitterIcon /></li>
                </ul>
                 <Link className={`${styles.appointment} btn btn-dark`} href="/book" >Contact Us</Link>
                 <br/>
                <small>@Copy right of ltbeauty.com</small>
            </div>
            <div className={styles.footerBottom}>

            </div>
        </section>
    )
}

export default Footer;