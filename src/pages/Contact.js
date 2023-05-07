import React from 'react'
import Banner from '../components/Banner'
import './scss/Contact.scss'
import { useTranslation } from "react-i18next";
//formik
import { Formik, Form, Field } from 'formik';
//icon
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InitialMap from '../components/InitialMap';

const Contact = () =>{
    const { t } = useTranslation();
    
    return(
        <setion className="contact">
            <Banner title="Contact Us" />
            <div className="contact-body">
                <div className="row">
                
                    <div className="col-lg-5 pt-5">
                        <InitialMap />
                    </div>
                    <div className="col-lg-7 px-4 py-5">
                        <p><b>{t("contact_summary")}</b></p>
                        <p><LocationOnIcon />1 Great Neck Rd #5C, Great Neck, NY 11021</p>
                        <p><EmailIcon />info@ltbeauty.us</p>
                        <p><PhoneIcon />(718)-971-0200</p>
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

                                    <button type="submit" className="btn btn-dark mt-3">{t("submit")}</button>
                                   
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