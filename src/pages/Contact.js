import React from 'react'
import Banner from '../components/Banner'
import './scss/Contact.scss'
//formik
import { Formik, Form, Field } from 'formik';
//icon
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InitialMap from '../components/InitialMap';

const Contact = () =>{
    return(
        <setion className="contact">
            <Banner title="Contact Us" />
            <div className="contact-body">
                <div className="row">
                
                    <div className="col-lg-5 pt-5">
                        <InitialMap />
                    </div>
                    <div className="col-lg-7 px-4 py-5">
                        <p><b>Ready for some Hammer time?  Write to us or give us a call now, we’re always happy to provide a free consultation and help out with any questions you may ask.</b></p>
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
                                            placeholder="Name"
                                            className="form-control mn-3"
                                            as='input'
                                        />
                                    </div>
                                
                                    <div className="form-group">
                                        <Field 
                                            name='email'
                                            label="email"
                                            type="email"
                                            placeholder="Email"
                                            className="form-control mt-3"
                                            as='input'
                                        />
                                    </div>
                           
                                    <div className="form-group">
                                        <Field 
                                            name='phone'
                                            label="phone"
                                            type="phone"
                                            placeholder="Phone Number"
                                            className="form-control mt-3"
                                            as='input'
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Field 
                                            name='message'
                                            label="message"
                                            type="textarea"
                                            placeholder="Message"
                                            className="form-control mt-3"
                                            as='textarea'
                                            rows="6"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-dark mt-3">Submit</button>
                                   
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