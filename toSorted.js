// EJEMPLO TO SORTED

const numbers = [2, 4, 5, 1, 3];

  // Sin usar toSorted
  // numbers.sort();
  // console.log(numbers); // Resultado  [1, 2, 3, 4, 5]

  // Usando toSorted
  // const sortedNumbers = numbers.toSorted(); // Por defecto no poner nada es como poner numbers.toSorted((a, b) => b - a); 
  // console.log(sortedNumbers); // [1, 2, 3, 4, 5]

    // Usando toSorted de menor a mayor
    const sortedNumbers = numbers.toSorted((a, b) => b - a);
    console.log(sortedNumbers); // [1, 2, 3, 4, 5]