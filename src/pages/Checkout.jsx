import React, { Component } from 'react';
import ProductsReview from '../components/ProductsReview';
import BuyerReview from '../components/BuyerReview';
import PaymentMethod from '../components/PaymentMethod';

class Checkout extends Component {
  emptyCart() {
    console.log('finalizar compra');
  }

  render() {
    // Recebe a props cart vinda do App.js com as informações atuais do carrinho
    const { cart } = this.props;

    return (
      <div>
        {/* Chama o componente de Revisão do carrinho */}
        <ProductsReview cart={ cart } />
        {/* Chama o componente de Revisão do comprador */}
        <BuyerReview />
        {/* Chama o componente de método de pagamento */}
        <PaymentMethod />
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Checkout;
