import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
  }

  render() {
    const { cart } = this.state;

    return (
      <BrowserRouter>
        <Header cartItems={ cart } />
        <p className="cart-btn">
          <Link data-testid="shopping-cart-button" to="/cart">
            Carrinho
          </Link>
        </p>

        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home /> }
            // render={ () => <Home setCart={ this.setCart } categories={ categories } /> }
          />
          <Route
            path="/cart"
            render={ () => (<ShoppingCart />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
