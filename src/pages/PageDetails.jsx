import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class PageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
    this.searchId = this.searchId.bind(this);
    // this.testFun = this.testFun.bind(this);
  }

  componentDidMount() {
    this.searchId();
  }

  async searchId() {
    const { match: { params: { id, category } } } = this.props;
    const { results } = await getProductsFromCategoryAndQuery(category);
    const valor = results.find((result) => result.id === id);
    this.setState({ item: valor });
  }

  render() {
    // const { produto: { title, thumbnail} } = this.props;
    // const { produto } = this.props;
    // const categoryId = produto.category_id;
    const { setCart } = this.props;
    const { item: { id, title, thumbnail, price } } = this.state;
    return (
      <div>
        {/* <button type="button" onClick={ this.searchId }>olá</button> */}
        <h1 data-testid="product-detail-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          {price}
        </p>
        <button
          type="button"
          onClick={ () => setCart({ id, title, price, thumbnail }) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}
PageDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;
export default PageDetails;
