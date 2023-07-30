import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  // Getters

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount is not a number');
    }
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' && typeof conversionRate !== 'number') {
      throw new TypeError('Amount is not a number');
    }
    return amount * conversionRate;
  }
}
