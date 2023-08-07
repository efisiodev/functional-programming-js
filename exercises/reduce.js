// EJEMPLO REDUCE

const payments = [
  { name: 'Producto 1', amount: 3, price: 105.00 },
  { name: 'Producto 2', amount: 1, price: 251.09 },
  { name: 'Producto 3', amount: 2, price: 102.20 },
]

// Sin usar reduce
  // let totalPrice = 0;
  // for (let i = 0; i < payments.length; i++) {
  //   const payment = payments[i];
  //   totalPrice = totalPrice + (payment.amount * payment.price);
  // }

// Usando reduce
const totalPrice = payments
  .reduce((accumulator, payment) => accumulator + (payment.amount * payment.price), 0);

console.log(totalPrice); // Resultado 770.49