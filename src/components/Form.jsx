import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      nota: 0,
      comment: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.registerLocalStorage = this.registerLocalStorage.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  registerLocalStorage = (event) => {
    const { id } = this.props;
    event.preventDefault();
    const { email, nota, comment } = this.state;
    let avaliacoes = JSON.parse(localStorage.getItem(id) || '[]');

    const newRegister = {
      id,
      register: {
        email,
        nota,
        comment,
      },
    };

    avaliacoes = [...avaliacoes, newRegister];
    localStorage.setItem(id, JSON.stringify(avaliacoes));
  }

  render() {
    return (
      <form action="userForm" onSubmit={ this.registerLocalStorage }>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating">
          Nota (entre 1 e 5):
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            name="nota"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="comment">
          Avalie o produto:
          <textarea
            name="comment"
            id="comment"
            form="userForm"
            cols="30"
            rows="10"
            maxLength="50"
            placeholder="Deixe seu comentário..."
            data-testid="product-detail-evaluation"
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

Form.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Form;
