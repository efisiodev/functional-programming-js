// EJEMPLO MAP

const users = [
  { id: '001', name: 'Alicia', surname: 'González', age: 25 },
  { id: '002', name: 'Roberto', surname: 'Fernández', age: 30 },
  { id: '003', name: 'Carlos', surname: 'Martínez', age: 17 },
  { id: '004', name: 'David', surname: 'López', age: 20 },
  { id: '005', name: 'Eva', surname: 'Sánchez', age: 16 },
];

  // Sin usar map

  // let userIds = []
  // for (let i = 0; i < users.length; i++) {
  //   const user = users[i];
  //   userIds.push(user.id)
  // }

  // Usando map
  const userIds = users.map(item => item.id)
  console.log(userIds); // Resultado ['0001', '0002', '0003', '0004', '0005']
