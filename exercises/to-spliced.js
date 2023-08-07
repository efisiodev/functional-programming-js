// EJEMPLO TO SPLICED

const numbers = [1, 2, 3, 4, 5];

  // Sin usar toSpliced
  // numbers.splice(0, 1);
  // console.log(numbers); // Resultado  [2, 3, 4, 5]

  // Usando toSpliced
  const splicedNumbers = numbers.toSpliced(0, 1);
  console.log(splicedNumbers); // Resultado [2, 3, 4, 5]