import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavDropdown,FormControl,Button,Form,Carousel,Card    } from 'react-bootstrap';
import logo from './../images/logo.png';
import Contact from '../Contact';
import Home from '../Home';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Routing from '../Routing';

class Header extends Component
{
    render()
    {
        return(
            <div className="container-fluid nmnp themecolorbg">
            <div className="container">
               <Navbar bg="dark" variant="dark" className="themecolorbg">
                  <Navbar.Brand >
                  <Link to="/">
                     <img src={logo} alt="Logo" />
                     </Link>
                  </Navbar.Brand>
                  <div class="mr-auto navbar-nav">
                     
                           <Link to="/" className="nav-link"> Home</Link>
                           <Link to="/about" className="nav-link"> About</Link>
                           <Link to="/category" className="nav-link"> Categories </Link> 
                           <Link to="/cart" className="nav-link"> Cart</Link>
                           <Link to="../contact" className="nav-link"> Contact</Link>
                  </div>
                  <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-info">Search</Button>
                  </Form>
               </Navbar>
            </div>
         </div>
           
        )

    }

}
export default Header;