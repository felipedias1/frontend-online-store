import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputSearch: '',
    };

    // Prepara a função handleChange para ser chamada em todo o componente pelo .this
    this.handleChange = this.handleChange.bind(this);
  }

  // Função quando é feito alguma alteração, em específico no input, é salvo o state inputSearch
  handleChange({ target: { value } }) {
    this.setState({ inputSearch: value });
  }

  render() {
    const { inputSearch } = this.state;
    return (
      <div>
        <label htmlFor="input">
          <input
            name="input"
            value={ inputSearch }
            data-testid="query-input"
            type="search"
            onChange={ this.handleChange }
            placeholder="Buscar produtos, marcas e muito mais..."
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
        >
          Enviar
        </button>
      </div>
    );
  }
}

export default SearchBar;
