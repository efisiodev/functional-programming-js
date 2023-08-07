// EJEMPLO DE RECURSIVIDAD

const numbers = [1, 2, 3, 4, 5];

  // Sin usar programación funcional
  // let totalAmount = 0;
  // for (let index = 0; index < numbers.length; index++) {
  //   const number = numbers[index];
  //   totalAmount = totalAmount + number;
  // }

  // Usando función recursiva
  const recursiveSum = (array) => {
    if (!array.length) {
      return 0;
    }
    const [first, ...rest] = array;
    return first + recursiveSum(rest)
  }
  const totalAmount = recursiveSum(numbers)
  
  // Usando reduce
  // const totalAmount = numbers.reduce((accumulator, item) => accumulator + item, 0);

  console.log(totalAmount); // Resultado 15