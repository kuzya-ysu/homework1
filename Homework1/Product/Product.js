export class Product {
  _name;
  _price;
  _quantity;
  _description;

  constructor(name, price, quantity, description) {
    this._name = name;
    this._price = price;
    this._quantity = quantity;
    this._description = description;
  }

  //#region getters & setters

  set name(value) {
    if (value === '' || value == null) {
      throw new Error('Name can not be empty');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set price(value) {
    if (value < 0) {
      throw new Error('Price can not be less then 0');
    }
    this._price = value;
  }

  get price() {
    return this._price;
  }

  set quantity(value) {
    if (value < 0) {
      throw new Error('Quantity can not be less then 0');
    }
    this._quantity = value;
  }

  get quantity() {
    return this._quantity;
  }

  set description(value) {
    if (value === '' || value == null) {
      throw new Error('Description can not be empty');
    }
    this._description = value;
  }

  get description() {
    return this._description;
  }

  //#endregion
}