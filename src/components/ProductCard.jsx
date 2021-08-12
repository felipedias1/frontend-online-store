import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Este componente é chamado pela Home, para listar as categorias
class ProductCard extends Component {
  render() {
    // Recebe a props produto do componente ListProducts e desconstrói o id, title, thumbail
    const { produto: { id, title, thumbnail, price } } = this.props;
    const { produto } = this.props;
    const { shipping: { free_shipping: freeShipping }, available_quantity: available } = this.props;
    const categoryId = produto.category_id;
    const { setCart } = this.props;

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
            <img src={ thumbnail } alt="{ title }" />
            {freeShipping && (
              <p data-testid="free-shipping">
                Frete grátis
              </p>
            )}
            <p className="product-price">{` R$ ${price}`}</p>
          </div>
        </Link>
        <button
          // O evento click abaixo chama a função setCard que vai ...
          // ...adicionar o item no state do ListProducs e no localStorage.
          onClick={ () => setCart({ id, title, price, quant: 1, thumbnail, available }) }
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default ProductCard;
