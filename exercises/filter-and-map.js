// EJEMPLO FILTER Y MAP

const users = [
	{ id: '001', name: 'Alicia', surname: 'González', age: 25 },
	{ id: '002', name: 'Roberto', surname: 'Fernández', age: 30 },
	{ id: '003', name: 'Carlos', surname: 'Martínez', age: 17 },
	{ id: '004', name: 'David', surname: 'López', age: 20 },
	{ id: '005', name: 'Eva', surname: 'Sánchez', age: 16 },
];

  // Sin filter ni map
  // let usersMapped = []
  // for (let i = 0; i < users.length; i++) {
  //   const user = users[i]
  //   if (user.age >= 18) {
  //     usersMapped.push({
  //       id: user.id,
  //       fullName: user.name + ' ' + user.surname
  //     });
  //   }
  // }

  // Con filter y map

  const usersMapped = users
    .filter(item => item.age >= 18)
    .map(({ id, name, surname }) => ({ id, fullName: name + ' ' + surname }));  

  console.log(usersMapped);
  // Resultado
  // [
  //   { id: '001', fullName: 'Alicia González' },
  //   { id: '002', fullName: 'Roberto Fernández' },
  //   { id: '004', fullName: 'David López' }
  // ]