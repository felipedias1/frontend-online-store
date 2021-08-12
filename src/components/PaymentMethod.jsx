import React, { Component } from 'react';

// Quando se declara o export default desta forma, e no BuyerReview também, a função handleChange pode ser lida nesta classe sem necessidade de props
export default class PaymentMethod extends Component {
  render() {
    // Renderização simples de input type radio simulando opção bancária
    return (
      <div className="checkout-payment-method">
        <h3>Método de pagamento</h3>
        <label htmlFor="boleto">
          Boleto
          <input
            type="radio"
            id="boleto"
            name="payment"
            value="boleto"
            // Cada vez que o usuário alterar opção, o value é colocado no state
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="boleto">
          Visa
          <input
            type="radio"
            id="boleto"
            name="payment"
            value="visa"
            // Cada vez que o usuário alterar opção, o value é colocado no state
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="boleto">
          Master Card
          <input
            type="radio"
            id="boleto"
            name="payment"
            value="masterCard"
            // Cada vez que o usuário alterar opção, o value é colocado no state
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
      </div>
    );
  }
}
