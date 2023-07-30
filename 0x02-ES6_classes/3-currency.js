export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getters

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }
  // Setters

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('code is not an string');
    }
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('name is not an string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
