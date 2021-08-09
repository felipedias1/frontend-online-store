import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input">
          <input
            name="input"
            type="search"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
