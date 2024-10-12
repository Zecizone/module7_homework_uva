// Задание 7.7.4
// Я не поняла задачу, возможно функция работает не так, как ожидалось

function setFullName(fullName) {
    this.fullName = fullName;
  }
  
  const person = { name: 'Алиса', age: 17 }
  
  const setPersonFullName = setFullName.bind(person);
  
  setPersonFullName("John Smith");
  
  console.log(person.fullName); 

  