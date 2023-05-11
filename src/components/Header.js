import React, { useState, useRef, useEffect } from 'react';
import styles from '../../global-styles/header.module.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation, } from "react-i18next";

const Header =()=> {
    const[openMenu, toggleOpenMenu] = useState(false);
    const headerRef = useRef(null);
    const [fixedHeader, setFixedHeader] = useState('header-nav');
    const [color, setColor] = useState('black');
    const [winWidth ,setWinWidth] = useState(0);
    const [logo, setLogo] = useState("/images/logo.png")
    const{ t, i18n } = useTranslation();

    useEffect(() => {
        const bottomPosition = headerRef.current.offsetHeight;
        const onScroll = () => {
            if(window.scrollY>bottomPosition) { 
                setFixedHeader('header-nav fixed-header');
                setColor('white');
                setLogo("/images/logo_white.png")
            }else{
                setFixedHeader('header-nav');
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
    }

    return(
        <div className={styles.header} ref={headerRef}>
            <div className={styles.header_top} >
                <div className={styles.header_top_content}>
                    <span className={styles.header_top_content_span}><LocationOnIcon />1 Great Neck Rd #5C, Great Neck, NY 11021 / <LocalPhoneIcon />(718)-971-0200</span>
                    <span onClick={()=>changeLanguage(i18n.language==="en"? "cn" : "en")}>{i18n.language==="en"? "中文" : "English"}</span>
                </div>
            </div>

            <div className={fixedHeader}>
                <nav class="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                        <img src={logo} />
                    </a>
                    <div className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>toggleMenu()}>
                        <div className={`burger-icon ${openMenu? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mainMenu ms-auto">
                            <li className="nav-item t-c">
                                <a  className={(navData) => navData.isActive? "active-main-menu" : ""} href="/" activeClassName="active-main-menu" onClick={()=>toggleMenu()}>{t("menu.0")}</a>
                            </li>
                            <li className="nav-item t-c">
                                <a className={(navData) => navData.isActive? "active-main-menu" : ""} href="/service" activeClassName="active-main-menu" onClick={()=>toggleMenu()}>{t("menu.1")}</a>
                            </li>
                            <li className="nav-item t-c">
                                <a className={(navData) => navData.isActive? "active-main-menu" : ""} href="/gallery" activeClassName="active-main-menu" onClick={()=>toggleMenu()} >{t("menu.2")} </a>
                            </li>
                            <li className="nav-item t-c">
                                <a className={(navData) => navData.isActive? "active-main-menu" : ""} href="/about" activeClassName="active-main-menu" onClick={()=>toggleMenu()}>{t("menu.3")}</a>
                            </li>
                            <li className="nav-item t-c">
                                <a className={(navData) => navData.isActive? "active-main-menu" : ""} href="/contact" activeClassName="active-main-menu" onClick={()=>toggleMenu()}>{t("menu.4")}</a>
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