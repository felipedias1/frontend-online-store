import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ListProducts extends Component {
  render() {
    // Recebe a props de produtos listados do filtro Categorias do componente Home
    const { products } = this.props;
    const { setCart } = this.props;
    return (
      <div className="card-container">
        {products.map((produto) => (
          <ProductCard
            key={ produto.id }
            produto={ produto }
            setCart={ setCart }
          />
        ))}
      </div>
    );
  }
}

ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ListProducts;
