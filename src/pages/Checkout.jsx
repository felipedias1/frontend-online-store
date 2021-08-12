import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

        {/* Criando link para finalização da compra */}
        <Link to="/" onClick={ this.emptyCart }>Finalizar</Link>
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Checkout;
