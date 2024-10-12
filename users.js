// Задание 7.7.3

const users = [
    { name: 'Алиса', age: 17 },
    { name: 'Рома', age: 22 },
    { name: 'Кристина', age: 19 },
    { name: 'Давид', age: 16 },
    { name: 'Ева', age: 25 }
  ];

const adultUsers = users.filter(user => user.age >= 18);
const names = adultUsers.map(user => user.name);
  
console.log(adultUsers);
console.log(names);
  