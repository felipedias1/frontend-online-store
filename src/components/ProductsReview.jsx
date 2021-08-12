import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsReview extends Component {
  render() {
    // Recebe a props cart de carrinho do componente Checkout
    const { cart } = this.props;
    // Valor inicial do reduce para fazer início da somatória
    const magicNumber = 0;

    return (
      <div className="checkout-cart">
        <h3>Revise seus produtos</h3>

        {/* Percorre a props cart com o map listando os produtos na tela */}
        {cart.map((product) => (
          <div key={ product.id }>
            <img src={ product.thumbnail } alt="product" />
            <p>{product.title}</p>
            <p>{product.price * product.quant}</p>
            <p>{product.quant}</p>
          </div>
        ))}

        <p>
          Total:
          {/* Uso o reduce para pegar o valor total do preço do carrinho */}
          {cart.reduce((a, b) => {
            a += b.price * b.quant;
            return a;
          }, magicNumber)}
        </p>
      </div>
    );
  }
}

ProductsReview.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsReview;
