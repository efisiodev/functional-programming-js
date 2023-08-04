// EJEMPLO FILTER Y REDUCE

const transactions = [
  { description: 'Grocery shopping', amount: 150.00 },
  { description: 'Electricity bill payment', amount: 80.00 },
  { description: 'Cash withdrawal', amount: 200.00 },
  { description: 'Credit card payment', amount: 120.00 },
  { description: 'Transfer to friend', amount: 50.00 }
];

  // Sin usar filter ni reduce

  // let totalBigTransactions = 0;

  // for (let i = 0; i < transactions.length; i++) {
  //   const transaction = transactions[i];
  //   if (transaction.amount > 100.00) {
  //     totalBigTransactions += transaction.amount;
  //   }
  // }

  // Usando filter y reduce
  const totalBigTransactions  = transactions
    .filter(item => item.amount > 100.00)
    .reduce((accumulator, transaction) => accumulator + transaction.amount, 0);

  console.log(totalBigTransactions ); // Resultado 470