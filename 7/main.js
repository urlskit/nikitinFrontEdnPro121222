const city = prompt('Введите город');
switch(city){
case'Днепр':
	console.log('48.472229645907724, 35.02369637268961');
	break;
case'Киев':
	console.log('50.46755588008747, 30.53543135925086');
	break;
case'Одесса':
	console.log('46.47171030971377, 30.713154515117218');
	break;
case'Львов':
	console.log('49.851198760290416, 24.01428280211391');
	break;
case'Чернигов':
	console.log('51.504735479132115, 31.277147490325277');
	break;
default:
	console.log('Нет координат этого города');
}

