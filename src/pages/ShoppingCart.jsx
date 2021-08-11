import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';

class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;

    return (
      <div className="checkout">
        <h2>Checkout</h2>
        <div>
          {
            cart.map((product, index) => (
              <ProductCart
                key={ `${product.title} - ${index}` }
                product={ product }
              />
            ))
          }
        </div>
        <Link
          to="/checkout"
          data-testid="checkout-products"
          className="btn"
        >
          Fechar Carrinho
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf,
}.isRequired;

export default ShoppingCart;
