import React, { Component } from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import About from "views/About.js";
import Gallery from "views/Gallery.js";
import Shop from "views/Shop.js";
import Contact from "views/Contact.js";

import "./index.css";

var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
          <Router history={hist}>
		 	<Header
		        color="transparent"
		        brand="White Rabbit Ceramics"
		        rightLinks={<HeaderLinks />}
		        fixed
		        changeColorOnScroll={{
		          height: 200,
		          color: "white"
		        }}
		    /> 
		    <Switch>    	   
		      <Route exact path="/" component={ProfilePage} />
		      <Route path="/admin" component={LoginPage} />
		      <Route path="/about" component={About} />
		      <Route path="/shop" component={Shop} />
		      <Route path="/gallery" component={Gallery} />
		      <Route path="/contact" component={Contact} />
		    </Switch>
		  </Router>
      </div>


    );
  }
}

export default App;
