// EJEMPLO EVERY

const users = [
  { id: '001', name: 'Alicia', surname: 'González', age: 25 },
  { id: '002', name: 'Roberto', surname: 'Fernández', age: 30 },
  { id: '003', name: 'Carlos', surname: 'Martínez', age: 17 },
  { id: '004', name: 'David', surname: 'López', age: 20 },
  { id: '005', name: 'Eva', surname: 'Sánchez', age: 16 },
];

// Sin usar every
// let allUsersAreAdults = true
// for (let i = 0; i < users.length & allUsersAreAdults; i++) {
//   const user = users[i];
//   if (user.age < 18) {
//     allUsersAreAdults = false
//   }
// }

// Usando every
const allUsersAreAdults = users.every(item => item.age >= 18)
console.log(allUsersAreAdults); // Resultado false