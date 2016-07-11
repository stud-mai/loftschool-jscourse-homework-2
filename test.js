require('console-group').install();

//Тестирование первой задачи
let isAllTrue = require('./is_all_true.js');

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

function isNumber(val) {
    return typeof val === 'number';
}

console.group('Проверка первого задания');
console.log(isAllTrue(allNumbers, isNumber));
console.log(isAllTrue(someNumbers, isNumber));
console.log(isAllTrue(noNumbers, isNumber));
console.groupEnd();


//Тестирование второй задачи
let isSomeTrue = require('./is_some_true.js');

console.group('Проверка второго задания');
console.log(isSomeTrue(allNumbers, isNumber));
console.log(isSomeTrue(someNumbers, isNumber));
console.log(isSomeTrue(noNumbers, isNumber));
console.groupEnd();


//Тестирование третей задачи
let calculator = require('./calculator.js');
let myCalculator = calculator(100);

console.group('Проверка третьего задания');
console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));
console.groupEnd();