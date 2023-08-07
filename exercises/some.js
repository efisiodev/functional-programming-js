// EJEMPLO SOME

  const users = [
  { id: '001', name: 'Alicia', surname: 'González', age: 25 },
  { id: '002', name: 'Roberto', surname: 'Fernández', age: 30 },
  { id: '003', name: 'Carlos', surname: 'Martínez', age: 17 },
  { id: '004', name: 'David', surname: 'López', age: 20 },
  { id: '005', name: 'Eva', surname: 'Sánchez', age: 16 },
  ];

  // Sin usar some

  // let foundAdultUser = false
  // for (let i = 0; i < users.length && !foundAdultUser; i++) {
  //   const user = users[i];
  //   if (user.age >= 18) {
  //     foundAdultUser = true
  //   }
  // }

  // Usando some
  const foundAdultUser = users.some(item => item.age >= 18)
  console.log(foundAdultUser); // Resultado true