import React from 'react'
import Head from 'next/head'
import styles from  '../global-styles/contact.module.scss'
import { useTranslation } from "react-i18next";
//formik
import { Formik, Form, Field } from 'formik';
//icon
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InitialMap from '../src/components/InitialMap';

const Contact = () =>{
    const { t, i18n } = useTranslation();
    
    return(
        <setion className={styles.contact}>
            <Head>
                <title>Contact - LT Beauty Great Neck, New York</title>
                <meta name="description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:title" content="Contact - LT Beauty Great Neck, New York" />
                <meta property="og:description" content="LT Beauty providing top-quality skincare service such as facial treatments, microblading, laser hair removal which located at Great Neck, New York" />
                <meta property="og:url" content="https://ltbeautyny.com/contact" />
                <meta property="og:type" content="website" />
                <meta http-equiv = "content-language" content = {i18n.language}></meta>
                <link rel="icon" href="/images/logo.png" />
            </Head>
            <div className={styles.map}>
                <InitialMap />
            </div>
            <div className={`${styles.contactBody} container`}>
                <div className="row">
                    <div className="col-lg-5 text-center">
                        <br />
                        <h5>CONTACT INFO</h5>
                        <p><LocationOnIcon />1 Great Neck Rd #5C, Great Neck, NY 11021</p>
                        <p><EmailIcon />info@ltbeauty.us</p>
                        <p><PhoneIcon />(516)-288-5526</p>
                        <br />
                        <h5>BUSINESS HOUR</h5>
                        <p>Please call to make appointment</p>
                        <p>Everyday 10:00AM - 7:00PM</p>
                        <br />
                    </div>
                    <div className="col-lg-7">
                        <p>{t("contact_summary")}</p>
                    
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                                message: '',
                            }}
                            onSubmit={(data,{setSubmitting}) => {
                                setSubmitting(true);
                                //onsubmit function
                                
                                
                                setSubmitting(false);
                            }}
                        >
                             {({ isSubmitting, values }) => (
                                <Form>
                                     <div className="form-group">
                                        <Field 
                                            name='name'
                                            label="name"
                                            type="text"
                                            placeholder={t("contact_name")}
                                            className="form-control mn-3"
                                            as='input'
                                        />
                                    </div>
                                
                                    <div className="form-group">
                                        <Field 
                                            name='email'
                                            label="email"
                                            type="email"
                                            placeholder={t("contact_email")}
                                            className="form-control mt-3"
                                            as='input'
                                        />
                                    </div>
                           
                                    <div className="form-group">
                                        <Field 
                                            name='phone'
                                            label="phone"
                                            type="phone"
                                            placeholder={t("contact_phone")}
                                            className="form-control mt-3"
                                            as='input'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Field 
                                            name='message'
                                            label="message"
                                            type="textarea"
                                            placeholder={t("contact_message")}
                                            className="form-control mt-3"
                                            as='textarea'
                                            rows="6"
                                        />
                                    </div>

                                    <button type="submit" className={`${styles.btn} btn btn-dark mt-3`}>{t("submit")}</button>
                                   
                                </Form>
                             )}
                        </Formik>
                    </div>
                
                </div>
                
            </div>
        
        </setion>
         
    )
}

export default Contact