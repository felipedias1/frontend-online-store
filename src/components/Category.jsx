import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Este componente é chamado pela Home, para listar as categorias
class Category extends Component {
  render() {
    const { category: { name, id } } = this.props;
    return (
      // Foi escolhido o input option para que o usuário escolha apenas uma opção de categoria
      <label htmlFor={ name }>
        {name}
        <input
          data-testid="category"
          type="radio"
          value={ id }
          id={ name }
          name="category"
        />
      </label>
    );
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Category;
