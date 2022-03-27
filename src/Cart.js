import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import { Nav, Navbar, NavDropdown,FormControl,Button,Form,Carousel,Card    } from 'react-bootstrap';
import cart_banner from './images/cart.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faEnvelope,faGlobe  } from '@fortawesome/free-solid-svg-icons'



class Cart extends Component
{
    render()
    {
        return (
<div className="app">


    <div class="container-fluid nmnp">
        <img src={cart_banner} className="d-block w-100" />
    </div>
 

       

        <div className="container">

          <div className="row cat-area">
          <div className="col col-lg-12">
              <h2>Cart</h2>
            </div>
    </div>
    <div className="row cat-area">
    <div className="col-sm-12 col-md-12">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Total</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="col-sm-8 col-md-6">
                        <div className="media">
                            <a className="thumbnail pull-left" href="#"> <img class="media-object img-responsive" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" /> </a>
                            <div className="media-body">
                                <h4 className="media-heading"><a href="#">Product 1</a></h4>
                                <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
                                
                            </div>
                        </div></td>
                        <td className="col-sm-1 col-md-1" >
                        <input type="email" className="form-control" id="exampleInputEmail1" value="3" />
                        </td>
                        <td className="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                        <td className="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                        <td className="col-sm-1 col-md-1">
                        <button type="button" className="btn btn-danger">
                            <span className="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                    </tr>
                    <tr>
                        <td className="col-md-6">
                        <div className="media">
                            <a className="thumbnail pull-left" href="#"> <img class="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"/> </a>
                            <div className="media-body">
                                <h4 className="media-heading"><a href="#">Product 2</a></h4>
                                <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
                            </div>
                        </div> </td>
                        <td class="col-md-1" >
                        <input type="email" class="form-control" id="exampleInputEmail1" value="2" />
                        </td>
                        <td className="col-md-1 text-center"><strong>$4.99</strong></td>
                        <td className="col-md-1 text-center"><strong>$9.98</strong></td>
                        <td className="col-md-1">
                        <button type="button" className="btn btn-danger">
                            <span className="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Subtotal</h5></td>
                        <td className="text-right"><h5><strong>$24.59</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Estimated shipping</h5></td>
                        <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h3>Total</h3></td>
                        <td className="text-right"><h3><strong>$31.53</strong></h3></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td>
                        <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                        </button></td>
                        <td>
                        <button type="button" className="btn btn-success">
                            Checkout <span className="glyphicon glyphicon-play"></span>
                        </button></td>
                    </tr>
                </tbody>
            </table>
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

export default Cart;