import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './../images/logo.png';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';


class Footer extends Component

{
    render()
    {
        return(
<footer className="footer_area clearfix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-4">
                    <div className="single_widget_area">
                        <div className="footer-logo mr-50">
                            <a href="#"><img src={logo} alt="" /></a>
                        </div>
                        <p className="copywrite"> 
Copyright © 2020 All rights reserved
 </p>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="single_widget_area">
                        <div className="footer_menu">
                            <nav className="navbar navbar-expand-lg justify-content-end">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                                <div className="collapse navbar-collapse" id="footerNavContent">
                                    <ul className="navbar-nav ml-auto">
                   
                                        <li className="nav-item active">
                                                <Link to="/" className="nav-link"> Home</Link>
                                        </li>
                                        <li className="nav-item">
                                                <Link to="/" className="nav-link"> About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                                <Link to="/category" className="nav-link"> Categories</Link>
                                        </li>
                                        <li className="nav-item">
                                                <Link to="/cart" className="nav-link"> Cart</Link>
                                        </li>
                                        <li className="nav-item">
                                             <Link to="/contact" className="nav-link"> Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

        )
    }

}
export default Footer