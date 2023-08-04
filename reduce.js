// EJEMPLO REDUCE

const payments = [
  { name: 'Producto 1', amount: 102.40 },
  { name: 'Producto 2', amount: 251.09 },
  { name: 'Producto 3', amount: 102 },
]

// Sin usar reduce
//   let totalAmount = 0
//   for (let i = 0; i < payments.length; i++) {
//     const payment = payments[i];
//     totalAmount = totalAmount + payment.amount
//   }

// Usando reduce
const totalAmount = payments.reduce((accumulator, payment) => accumulator + payment.amount, 0);

console.log(totalAmount); // Resultado 455.49