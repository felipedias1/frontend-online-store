import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };

    this.setCart = this.setCart.bind(this);
    // this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
  }

  // Essa função abaixo vai guardar no localStorage os items no carrinho
  // É prática de mercado guardar itens de carrinho no localStorage
  setCart(product) {
    this.setState((state) => ({ cart: [...state.cart, product] }), () => {
      // Guarda do state do ListProducts.
      const { cart } = this.state;
      // Guarda no localStorage caso o usuário abra novamente a página e seus itens ainda continuam no carrinho.
      localStorage.setItem('cartItems', JSON.stringify(cart));
    });
  }

  // Pega os dados que estão no LocalStorage
  getFromLocalStorage() {
    const previousCart = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({
      cart: previousCart,
    });
  }

  render() {
    const { cart, categories } = this.state;

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
            render={ () => <Home setCart={ this.setCart } categories={ categories } /> }
          />
          <Route
            exact
            path="/checkout"
            render={ () => <Checkout cart={ cart } /> }
          />
          <Route
            path="/cart"
            render={ () => (<ShoppingCart cart={ cart } />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
