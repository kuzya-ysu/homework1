export class ProductHandler {

  static filterProducts(products, str) {
    let filteredProducts = Array.from(products);
    let conditions = str.split('&');
    for (let cond of conditions) {
      let condSplit = cond.split('-');
      switch (condSplit[0]) {
        case 'name':
          filteredProducts = this.#filterByName(filteredProducts, condSplit);
          break;
        case 'description':
          filteredProducts = this.#filterByDescription(filteredProducts, condSplit);
          break;
        case 'price':
          filteredProducts = this.#filterByPrice(filteredProducts, condSplit);
          break;
        case 'quantity':
          filteredProducts = this.#filterByQuantity(filteredProducts, condSplit);
      }
    }
  
    return filteredProducts;
  }
  
  static #filterByName(products, condition) {
    switch (condition[1]) {
      case 'contains':
        products = products.filter(p => p.name.toLowerCase().includes(condition[2].toLowerCase()));
        break;
      case 'starts':
        products = products.filter(p => p.name.toLowerCase().startsWith(condition[2].toLowerCase()));
        break;
      case 'ends':
        products = products.filter(p => p.name.toLowerCase().endsWith(condition[2].toLowerCase()));
        break;
      default:
        throw new Error('Incorrect input');
    }
    return products;
  }
  
  static #filterByDescription(products, condition) {
    switch (condition[1]) {
      case 'contains':
        products = products.filter(p => p.description.toLowerCase().includes(condition[2].toLowerCase()));
        break;
      case 'starts':
        products = products.filter(p => p.description.toLowerCase().startsWith(condition[2].toLowerCase()));
        break;
      case 'ends':
        products = products.filter(p => p.description.toLowerCase().endsWith(condition[2].toLowerCase()));
        break;
      default:
        throw new Error('Incorrect input');
    }
    return products;
  }
  
  static #filterByPrice(products, condition) {
    let expression = condition[1].replace(/\d/g,'');
    let number = +condition[1].replace(/\D/g,'');
    switch (expression) {
      case '=':
        products = products.filter(p => p.price === number);
        break;
      case '>':
        products = products.filter(p => p.price > number);
        break;
      case '<':
        products = products.filter(p => p.price < number);
        break;
      case '>=':
        products = products.filter(p => p.price >= number);
        break;
      case '<=':
        products = products.filter(p => p.price <= number);
        break;
    }
    return products;
  }
  
  static #filterByQuantity(products, condition) {
    let expression = condition[1].replace(/\d/g,'');
    let number = +condition[1].replace(/\D/g,'');
    switch (expression) {
      case '=':
        products = products.filter(p => p.quantity === number);
        break;
      case '>':
        products = products.filter(p => p.quantity > number);
        break;
      case '<':
        products = products.filter(p => p.quantity < number);
        break;
      case '>=':
        products = products.filter(p => p.quantity >= number);
        break;
      case '<=':
        products = products.filter(p => p.quantity <= number);
        break;
    }
    return products;
  }
}