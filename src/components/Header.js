import React, { useState, useRef, useEffect } from 'react';
import styles from '../../global-styles/header.module.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation, } from "react-i18next";
import Link from 'next/link';
import { useRouter } from 'next/router'

const Header =()=> {
    const[openMenu, toggleOpenMenu] = useState(false);
    const headerRef = useRef(null);
    const [fixedHeader, setFixedHeader] = useState(styles.headerNav);
    const [color, setColor] = useState('black');
    const [winWidth ,setWinWidth] = useState(0);
    const router = useRouter()
    const [logo, setLogo] = useState("/images/logo.png")
    const{ t, i18n } = useTranslation();

    useEffect(() => {
        const bottomPosition = headerRef.current.offsetHeight;
        const onScroll = () => {
            if(window.scrollY>bottomPosition) { 
                setFixedHeader(`${styles.headerNav} ${styles.fixedHeader}`);
                setColor('white');
                setLogo("/images/logo_white.png")
            }else{
                setFixedHeader(`${styles.headerNav}`);
                setColor('black')
                setLogo("/images/logo.png")
            }
        }
        const handleWindowSizeChange = () => {
            setWinWidth(window.innerWidth);
        }

        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", handleWindowSizeChange)

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize" , handleWindowSizeChange);
        }
     
    },[]);

    const toggleMenu = () => {
        console.log('toggle');
        toggleOpenMenu(!openMenu)
    }

    const changeLanguage = (language) =>{
        i18n.changeLanguage(language)
        toggleOpenMenu(false)
    }

    return(
        <div className={styles.header} ref={headerRef}>
            <div className={styles.headerTop} >
                <div className={styles.headerTopContent}>
                    <span><LocationOnIcon />1 Great Neck Rd #5C, Great Neck, NY 11021 / <LocalPhoneIcon />(516)-288-5526</span>
                    <span onClick={()=>changeLanguage(i18n.language==="en"? "cn" : "en")}>{i18n.language==="en"? "中文" : "English"}</span>
                </div>
            </div>

            <div className={fixedHeader}>
                <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
                    <a className={styles.navbarBrand} href="/">
                        <img src={logo} alt="lt-beauty-logo"/>
                    </a>
                    <div className={`${styles.toggler} navbar-toggler ms-auto`} type="button" aria-controls="navbarSupportedContent" onClick={()=>toggleMenu()}>
                        <div className={`${styles.burgerIcon} ${openMenu? styles.open : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={`${styles.collapse} ${openMenu? styles.collapseOpen : styles.collapseClose} navbar-collapse`} id="navbarSupportedContent">
                        <ul className={`${styles.navbarNav} navbar-nav mainMenu ms-auto`}>
                            <li className={`${styles.navItem} navbar-item t-c`}>
                                <Link className={router.pathname === "/"?  styles.activeMainMenu : ""} href="/" onClick={()=>toggleMenu()}>{t("menu.0")}</Link>
                            </li>
                            <li className={`${styles.navItem} navbar-item t-c`}>
                                <Link className={router.pathname === "/service"? styles.activeMainMenu : ""} href="/service"  onClick={()=>toggleMenu()}>{t("menu.1")}</Link>
                            </li>
                            <li className={`${styles.navItem} navbar-item t-c`}>
                                <Link className={router.pathname === "/gallery"?  styles.activeMainMenu : ""} href="/gallery" onClick={()=>toggleMenu()} >{t("menu.2")} </Link>
                            </li>
                            <li className={`${styles.navItem} navbar-item t-c`}>
                                <Link className={router.pathname === "/about"?  styles.activeMainMenu : ""} href="/about"  onClick={()=>toggleMenu()}>{t("menu.3")}</Link>
                            </li>
                            <li className={`${styles.navItem} navbar-item t-c`}>
                                <Link className={router.pathname === "/contact"?  styles.activeMainMenu : ""} href="/contact" onClick={()=>toggleMenu()}>{t("menu.4")}</Link>
                            </li>
                            <li className={`${styles.navItem} navbar-item t-c`}>
                                <Link className={`${styles.appointment} btn btn-dark`} href="/book" onClick={()=>toggleMenu()}>{t("appointment")}</Link>
                            </li>
                            <li className={`${styles.navItem} ${styles.language} navbar-item t-c`}>
                                <a onClick={()=>changeLanguage(i18n.language==="en"? "cn" : "en")}>{i18n.language==="en"? "中文" : "English"}</a>
                            </li>
                        </ul>
                    </div>
                    <br />
                   
                </nav>
            </div>
        </div>
    )
}

export default Header;