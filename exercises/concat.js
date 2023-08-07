// EJEMPLO CONCAT

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Usando bucle
// for (let i = 0; i < array2.length; i++) {
//   array1.push(array2[i]);
// }
// console.log(array1);

// Usando concat
// const arrayUnion = array1.concat(array2);
// const arrayUnion = array1.concat(4,5,6);

// Usando spread operator
const arrayUnion = [...array1, ...array2];

console.log(arrayUnion); // Resultado [1, 2, 3, 4, 5, 6]
