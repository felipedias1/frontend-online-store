import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListProducts extends Component {

  render() {
    return (
      <section>
        <div className="card-container">

          <h4>Lista de Produtos</h4>

        </div>
      </section>
    );
  }
}

ListProducts.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ListProducts;
