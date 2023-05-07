import React, { useState } from 'react';
import './scss/Header.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation, } from "react-i18next";
import { NavLink } from 'react-router-dom'

const Header =()=> {
    const[openMenu, toggleOpenMenu] = useState(false);
    const{ t, i18n } = useTranslation();

    const toggleMenu = () => {
        console.log('toggle');
        toggleOpenMenu(!openMenu)
    }

    const changeLanguage = (language) =>{
        i18n.changeLanguage(language)
    }

    return(
        <header>
            <div className="header-top">
                <div className="header-top-content">
                    <span><LocationOnIcon />1 Great Neck Rd #5C, Great Neck, NY 11021 / <LocalPhoneIcon />(718)-971-0200</span>
                    <span onClick={()=>changeLanguage(i18n.language==="en"? "cn" : "en")}>{i18n.language==="en"? "中文" : "English"}</span>
                </div>
            </div>

            <div className="header-nav">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <a className="navbar-brand" href="/">
                        <img src="/images/logo.png" />
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
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} exact to="/" activeClassName="active-main-menu" >{t("menu.0")}</NavLink>
                            </li>
                            <li className="nav-item t-c">
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} to="/service" activeClassName="active-main-menu" >{t("menu.1")}</NavLink>
                            </li>
                            <li className="nav-item t-c">
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} to="/gallery" activeClassName="active-main-menu" >{t("menu.2")} </NavLink>
                            </li>
                            <li className="nav-item t-c">
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} to="/about" activeClassName="active-main-menu" >{t("menu.3")}</NavLink>
                            </li>
                            <li className="nav-item t-c">
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} to="/contact" activeClassName="active-main-menu" >{t("menu.4")}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <br />
                   
                </nav>
            </div>
        </header>
    )
}

export default Header;