import React from 'react';
import './scss/Footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () =>{
    return(
        <footer>
            <img src="https://static.wixstatic.com/media/3c570b_864936e30c114ae0bbc2017980bebd39~mv2_d_2500_2287_s_2.png/v1/fill/w_87,h_80,al_c,q_85,usm_0.66_1.00_0.01/HAMMER%20CLUB%20LOGO.webp" alt="hammer carbinetry logo" />
            <ul>
                <li><InstagramIcon /></li>
                <li><FacebookIcon /></li>
                <li><TwitterIcon /></li>
            </ul>
            <small>@Copy right of ltbeauty.com</small>
        </footer>
    )
}

export default Footer;