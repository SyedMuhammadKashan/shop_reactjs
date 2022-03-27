import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Nav, Navbar, NavDropdown,FormControl,Button,Form,Carousel,Card    } from 'react-bootstrap';
import './style.css'
import banner1 from './images/banner-1.webp';
import banner2 from './images/banner-2.webp';
import banner3 from './images/banner-3.webp';
import p1 from './images/product-1.jpg';
import p2 from './images/product-2.jpg';
import p3 from './images/product-3.jpg';
import p4 from './images/product-4.jpg';
import p5 from './images/product-5.jpg';
import p6 from './images/product-6.jpg';
import p7 from './images/product-7.jpg';
import p8 from './images/product-8.jpg';
class Home extends Component
{
    render()
    {
        return (
          <div  className="app">
          <div class="container-fluid nmnp">
             <Carousel>
                <Carousel.Item>
                   <img
                      className="d-block w-100"
                      src={banner3}
                      alt="third Babber"
                      />
                </Carousel.Item>
                <Carousel.Item>
                   <img
                      className="d-block w-100"
                      src={banner2}
                      alt="2nd Banner"
                      />
                </Carousel.Item>
                <Carousel.Item>
                   <img
                      className="d-block w-100"
                      src={banner1}
                      alt="1st Banner"
                      />
                </Carousel.Item>
             </Carousel>
          </div>
          <div className="container">

          <div className="row cat-area">
          <div className="col col-lg-12">
              <h2>Popular Categroies</h2>
            </div>
    </div>
    <div className="row cat-area">
    <div className="col col-lg-3">
    <   Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={p1} />
          <Card.Body>
            <Card.Title>Computers</Card.Title>
            <Card.Text>
              Laptops / PC
            </Card.Text>
            <Button variant="primary">Explore Products</Button>
          </Card.Body>
        </Card>
    </div>
    <div className="col col-lg-3">
    <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={p2} />
          <Card.Body>
            <Card.Title>Casual Wear</Card.Title>
            <Card.Text>
              Formal / Casual
            </Card.Text>
            <Button variant="primary">Explore Products</Button>
          </Card.Body>
        </Card>
    </div>
    <div className="col col-lg-3">
    <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={p3} />
          <Card.Body>
            <Card.Title>Mobile</Card.Title>
            <Card.Text>
              Mobile / Accessories
            </Card.Text>
            <Button variant="primary">Explore Products</Button>
          </Card.Body>
        </Card>
    </div>
    <div className="col col-lg-3">
    <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={p4} />
          <Card.Body>
            <Card.Title>Vegetables</Card.Title>
            <Card.Text>
              Fruit / Vegetable
            </Card.Text>
            <Button variant="primary">Explore Products</Button>
          </Card.Body>
        </Card>
    </div>
    </div>

    <div className="row cat-area">
    <div className="col col-lg-3">
    <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={p5} />
          <Card.Body>
            <Card.Title>Automobile</Card.Title>
            <Card.Text>
               Accessories / Spare Parts
            </Card.Text>
            <Button variant="primary">Explore Products</Button>
          </Card.Body>
        </Card>
    </div>
    <div className="col col-lg-3">
    <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={p6} />
          <Card.Body>
            <Card.Title>Watches</Card.Title>
            <Card.Text>
              Watches / Smart Watches
            </Card.Text>
            <Button variant="primary">Explore Products</Button>
          </Card.Body>
        </Card>
    </div>
    <div className="col col-lg-3">
    <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={p7} />
          <Card.Body>
            <Card.Title>TV</Card.Title>
            <Card.Text>
              TV / Accessories
            </Card.Text>
            <Button variant="primary">Explore Products</Button>
          </Card.Body>
        </Card>
    </div>
    <div className="col col-lg-3">
    <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={p8} />
          <Card.Body>
            <Card.Title>Toys</Card.Title>
            <Card.Text>
              Toys / Books
            </Card.Text>
            <Button variant="primary">Explore Products</Button>
          </Card.Body>
        </Card>
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

export default Home;