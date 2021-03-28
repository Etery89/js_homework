/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/

let a = 1;
let b = 2;
let c = -4;
let d = -3;
let e = 5;
let f = -2;

function printOperation (firstNum, secondNum) {
    if (firstNum >= 0 && secondNum >= 0) {
        console.log(firstNum - secondNum);
    }
    else if (firstNum < 0 && secondNum < 0) {
        console.log(firstNum * secondNum);
    }
    else {
        console.log(firstNum + secondNum);
    }
}

printOperation(a, b);
printOperation(c, d);
printOperation(e, f);
