import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import PageDetails from './pages/PageDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.setCart = this.setCart.bind(this);
    this.updateQuant = this.updateQuant.bind(this);
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
    if (localStorage.cartItems) {
      this.getFromLocalStorage();
    }
  }

  getFromLocalStorage() {
    const previousCart = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({
      cart: previousCart,
    });
  }

  setCart(product) {
    this.setState((state) => ({ cart: [...state.cart, product] }), () => {
      const { cart } = this.state;
      localStorage.setItem('cartItems', JSON.stringify(cart));
    });
  }

  updateQuant(id, bool) {
    this.setState((state) => ({
      cart: state.cart.map((elem) => {
        if (!bool && elem.id === id) return { ...elem, quant: elem.quant - 1 };
        if (bool && elem.id === id) return { ...elem, quant: elem.quant + 1 };
        return elem;
      }),
    }));
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
          <Route
            path="/product/:category/:id"
            component={ PageDetails }
            render={ () => <PageDetails /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
