// EJEMPLO FILTER

const numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

  // Sin usar filter
  // let positiveNumbers = []
  // for (let i = 0; i < numbers.length; i++) {
  //   const number = numbers[i];
  //   if (number > 0) {
  //     positiveNumbers.push(number)
  //   }
  // }

  // Usando filter con function
  // const positiveNumberFilter = (item) => {
  //   return item > 0;
  // }
  // const positiveNumbers = numbers.filter(positiveNumberFilter)
  
  // Usando filter
  const positiveNumbers = numbers.filter(item => item > 0)
  
  console.log(positiveNumbers); // Resultado [1, 2, 3, 4, 5]