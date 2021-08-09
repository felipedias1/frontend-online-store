import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h4>
      </div>
    );
  }
}

export default ShoppingCart;
