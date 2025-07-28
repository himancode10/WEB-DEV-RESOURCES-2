///////////////////////////////////////
// Exporting and Importing in ES6 Modules

// Importing module
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);

console.log('Importing module');
console.log(shippingCost);

//importing all at same time

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

//DEFAULT IMPORT CAN GIVE ANY NAME HERE LIKE ADD we given here and here we mixed the named and default export, However in practice, we usually never mix Named and Default Exports in the same module



// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);


//live connection, not copied

import add, {cart } from './shoppingCart.js'
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);