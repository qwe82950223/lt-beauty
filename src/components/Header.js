import React, { useState } from 'react';
import './scss/Header.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { NavLink } from 'react-router-dom'

const Header =()=> {
    const[openMenu, toggleOpenMenu] = useState(false);

    const toggleMenu = () => {
        console.log('toggle');
        toggleOpenMenu(!openMenu)
    }

    return(
        <header>
            <div className="header-top">
                <div className="header-top-content">
                    <span><LocationOnIcon />1 Great Neck Rd #5C, Great Neck, NY 11021</span>
                    <span><LocalPhoneIcon />(718)-971-0200</span>
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
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} exact to="/" activeClassName="active-main-menu" >Home</NavLink>
                            </li>
                            <li className="nav-item t-c">
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} to="/service" activeClassName="active-main-menu" >Services</NavLink>
                            </li>
                            <li className="nav-item t-c">
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} to="/gallery" activeClassName="active-main-menu" >Gallery </NavLink>
                            </li>
                            <li className="nav-item t-c">
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} to="/about" activeClassName="active-main-menu" >About Us</NavLink>
                            </li>
                            <li className="nav-item t-c">
                                <NavLink className={(navData) => navData.isActive? "active-main-menu" : ""} to="/contact" activeClassName="active-main-menu" >Contact</NavLink>
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