import React, { Component } from 'react';

export default class BuyerReview extends Component {
  constructor(props) {
    super(props);

    // Adicionando state inicial
    this.state = {
      email: '', // joao@email.com.br
      cpf: '', // 123.456.789-01
      fullName: '', // João do Brasil
      phone: '', // (11) 91234-5678
      cep: '', // 12345-67
      address: '', // Rua Central do Brasil, nr. 123
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Função que quando for digitar algo o state do campo é alterado de imediato na state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, cpf, fullName, phone, cep, address } = this.state;
    return (

      <form className="checkout-user-info">
        <h3>Informações do comprador</h3>
        <input
          type="text"
          placeholder="Nome Completo"
          name="fullName"
          value={ fullName }
          onChange={ (event) => this.handleChange(event) }
          data-testid="checkout-fullname"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ (event) => this.handleChange(event) }
          data-testid="checkout-email"
        />
        <input
          type="text"
          placeholder="CPF"
          name="cpf"
          value={ cpf }
          onChange={ (event) => this.handleChange(event) }
          data-testid="checkout-cpf"
        />
        <input
          type="text"
          placeholder="Telefone"
          name="phone"
          value={ phone }
          onChange={ (event) => this.handleChange(event) }
          data-testid="checkout-phone"
        />
        <input
          type="text"
          placeholder="CEP"
          name="cep"
          value={ cep }
          onChange={ (event) => this.handleChange(event) }
          data-testid="checkout-cep"
        />
        <input
          type="text"
          placeholder="Endereço"
          name="address"
          maxLength="50"
          value={ address }
          onChange={ (event) => this.handleChange(event) }
          data-testid="checkout-address"
        />
      </form>
    );
  }
}
