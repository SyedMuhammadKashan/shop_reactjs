import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Header from './includes/Header';
import Footer from './includes/Footer';
import Category from './Category';
import Cart from './Cart';

function Routing()
{

return(
<React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
            </Route>
            <Route path="/category">
            <Category />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>

);


}
export default Routing;