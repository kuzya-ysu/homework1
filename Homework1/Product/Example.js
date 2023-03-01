import Product from "./Product";
import ProductHandler from "./ProductHandler"; // не работает вне страницы html
let products = [new Product('Headphones', 5000, 2, 'Great quality'), 
        new Product('Keyboard', 10000, 5, 'Does not break'),
        new Product('Mouse', 3000, 10, 'Decent for this price abc'),];
console.log(ProductHandler.filterProducts(products, 'name-contains-mo&price->1000&quantity->5&description-ends-abc'));