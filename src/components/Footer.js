import React from 'react';
import '../../global-styles/footer.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () =>{
    return(
        <section className='footer'>
            <div className="footer-body">
                <img src="./images/logo_white.png"  alt="lt beauty logo" />
                <ul>
                    <li><InstagramIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><TwitterIcon /></li>
                </ul>
                <small>@Copy right of ltbeauty.com</small>
            </div>
            <div className="footer-bottom">

            </div>
        </section>
    )
}

export default Footer;