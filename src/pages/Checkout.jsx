import React, { Component } from 'react';
import ProductsReview from '../components/ProductsReview';

class Checkout extends Component {
  emptyCart() {
    console.log('finalizar compra');
  }

  render() {
    // Recebe a props cart vinda do App.js com as informações atuais do carrinho
    const { cart } = this.props;

    return (
      <div>
        {/* Chama o componente de Revisão */}
        <ProductsReview cart={ cart } />

      </div>
    );
  }
}

export default Checkout;
