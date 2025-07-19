// setTimeout function

setTimeout(
  (ing1, ing2) => console.log(`here is your pizza with 
    ${ing1} and ${ing2}`),
    3000,
     'olives',
     'spinach',
     'onion'
);
console.log('...waiting');

//clearTimeout

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`here is your pizza with 
    ${ing1} and ${ing2}`),
    3000,
    ...ingredients
);

console.log('...waiting');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

