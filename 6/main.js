
const action = prompt('Введите действие');
const firstNumber = parseInt(prompt('Введите первое число'));
const secondNumber = parseInt(prompt('Введите второе число'));
const sumAdd = (firstNumber + secondNumber);
const sumSub = (firstNumber - secondNumber);
const sumMult = (firstNumber * secondNumber);
const sumDiv = (firstNumber / secondNumber);

if(action === '+'){
	console.log (`${firstNumber} + ${secondNumber} = ${sumAdd}`);
}
else if(action == '-'){
console.log (`${firstNumber} - ${secondNumber} = ${sumSub}`);
}
else if(action == '*'){
console.log (`${firstNumber} * ${secondNumber} = ${sumMult}`);
}
else if(action == '/'){
console.log (`${firstNumber} / ${secondNumber} = ${sumDiv}`);
}