import React, { Component } from 'react';
import SearchBar from './SearchBar';

class ListProducts extends Component {
  render() {
    return (
      <div className="card-container">
        {/* Executa o componente SearchBar aparecendo na section da... */}
        {/* ...listagem de produtos */}
        <SearchBar handleSubmit={ this.handleSubmit } />

        <h4>Lista de Produtos</h4>
      </div>
    );
  }
}

export default ListProducts;
