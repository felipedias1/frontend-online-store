import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Este componente é chamado pela Home, para listar as categorias
class ProductCard extends Component {
  render() {
    // Recebe a props produto do componente ListProducts e desconstrói o id, title, thumbail
    const { produto: { id, title, thumbnail, price } } = this.props;
    const { produto } = this.props;
    const categoryId = produto.category_id;
    if (id.length < 1) return 'Nenhum produto encontrado';
    return (
      <div className="card-container">
        <Link
          key={ `${id} - ${title}` }
          to={ `/product/${categoryId}/${id}` }
          data-testid="product-detail-link"
        >
          <div data-testid="product" className="product-card">
            <p className="product-title">{ title }</p>
            <img src={ thumbnail } alt="" />
            <p className="product-price">{` R$ ${price}`}</p>
            <div>
              <button
                onClick={ () => console.log('Clicou') }
                type="button"
                data-testid="product-add-to-cart"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default ProductCard;
