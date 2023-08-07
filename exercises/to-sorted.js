// EJEMPLO TO SORTED

const numbers = [2, 4, 5, 1, 3];

  // Sin usar toSorted
  // numbers.sort();
  // console.log(numbers); // Resultado  [1, 2, 3, 4, 5]

  // Usando toSorted
  // Por defecto no poner nada es como poner numbers.toSorted((a, b) => b - a); 
  // const sortedNumbers = numbers.toSorted();
  // console.log(sortedNumbers); // [1, 2, 3, 4, 5]

    // Usando toSorted de mayor a menor
    const sortedNumbers = numbers.toSorted((a, b) => b - a);
    console.log(sortedNumbers); // [1, 2, 3, 4, 5]