import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import contact_banner from './images/contact-banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faEnvelope,faGlobe  } from '@fortawesome/free-solid-svg-icons'



class Contact extends Component
{
    render()
    {
        return (
<div className="app">


    <div class="container-fluid nmnp">
        <img src={contact_banner} className="d-block w-100" />
    </div>
    <div className="container">

        <div className="row cat-area">
            <div className="col col-lg-12">
                <h2>Get in Touch</h2>
            </div>
        </div>
        <div className="row" id="contatti">
            <div clasclassNames="container mt-5">

                <div className="row" style={{ height: '550px' }}>
                    <div className="col-md-6 maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase mt-3 font-weight-bold mt0px">Contact Us</h4>
                        <form action="">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" class="form-control mt-2" placeholder="Nome" required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" class="form-control mt-2" placeholder="Company" required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" class="form-control mt-2" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="number" class="form-control mt-2" placeholder="Phone" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3" required></textarea>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-light subform" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                        <div className="text-black"><br /><br />
                            <h4 className="text-uppercase mt-4 font-weight-bold">dove siamo <FontAwesomeIcon icon={faCoffee} /></h4><br />
                            <FontAwesomeIcon icon={faPhone} /> <a href="tel:+">(+39) 123456</a>
                            <br /><br />
                            <FontAwesomeIcon icon={faEnvelope} /> <a href="">info@test.it</a>
                            <br /><br />
                            <FontAwesomeIcon icon={faGlobe} /> <a href="">Piazza del Colosseo, 1, 00184 Roma</a>
                            <br /><br />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <section className="newsletter-area section-padding-100-0">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-xl-7">
                    <div className="newsletter-text mb-100">
                        <h2>Subscribe for a <span>25% Discount</span></h2>
                        <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                    <div className="newsletter-form mb-100">
                        <form action="#" method="post">
                            <input type="email" name="email" className="nl-email" placeholder="Your E-mail" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


</div>


          );

    }
}

export default Contact;