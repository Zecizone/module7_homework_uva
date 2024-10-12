//Задание 7.7.2
//Да, лучше писать операторы отдельными функциями, но для такого ТЗ это - хардкод

function calculate(a, b, operator) {
    switch (operator) {
      case 'Addition':
        return a + b;
      case 'Subtraction':
        return a - b;
      case 'Multiplication':
        return a * b;
      case 'Division':
        return a / b;
      default:
        console.log("Я пока так не умею :( \nВозвращайся позже!");
    }
  }
  
  const params = {
    a: 0,
    b: 0,
    operator: ''
  };
  
  const result = calculate.apply(params, [2, 3, 'Addition']);
  
  console.log(result); 
  