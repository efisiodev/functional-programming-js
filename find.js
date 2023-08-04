// EJEMPLO FIND

const users = [
  { id: '001', name: 'Alicia', surname: 'González', age: 25 },
  { id: '002', name: 'Roberto', surname: 'Fernández', age: 30 },
  { id: '003', name: 'Carlos', surname: 'Martínez', age: 17 },
  { id: '004', name: 'David', surname: 'López', age: 20 },
  { id: '005', name: 'Eva', surname: 'Sánchez', age: 16 },
];

// Sin usar find
// let userFound;
// for (let i = 0; i < users.length && !userFound; i++) { // Mejorado con userFound
//   const user = users[i];
//   if (user.id === '003') { 
//     userFound = user;
//   }
// }

// Usando find
const user = users.find(item => item.id === '003')

console.log(user); // Resultado { id: '003', name: 'Carlos', surname: 'Martínez', age: 17 }