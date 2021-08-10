import React, { Component } from 'react';

class ListProducts extends Component {
  render() {
    // Recebe a props de Produtos listados do filtro Categorias do componente Home
    const { products } = this.props;
    return (
      <section>
        <div className="card-container">
          <h4>Lista de Produtos</h4>
        </div>
      </section>
    );
  }
}

export default ListProducts;
