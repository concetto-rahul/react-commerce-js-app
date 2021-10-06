import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'react-notifications/lib/notifications.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { NotificationContainer } from "react-notifications";

import Home from './components/home';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/category';
import Product from './components/product';
import Cart from './components/cart';
function App() {
  return(
    <>
      <NotificationContainer />
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:slug" component={Category} />
            <Route path="/product/:slug" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route component={PageNotFound} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
