import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.setCart = this.setCart.bind(this);
  }

  // O ideal seria adicionar essa função no ProductCard mas ela vai pesar no App pois o ProductCard é chamado para cada item na lista
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

  render() {
    // Recebe a props de Produtos listados do filtro Categorias do componente Home
    const { products } = this.props;
    return (
      <section>
        <div className="card-container">
          {/* <h4>Lista de Produtos</h4> */}
          {products.map((produto) => (
            <ProductCard
              key={ produto.id }
              produto={ produto }
              setCart={ this.setCart }
            />
          ))}
        </div>
      </section>
    );
  }
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListProducts;
