/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 5) 
и вернуть полученное значение (использовать switch). */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            sum = getSumTwoNums(arg1, arg2);
            alert(sum);
            break;
        case "-":
            difference = getDifferenceTwoNums(arg1, arg2);
            alert(difference);
            break;
        case "*":
            product = getProductTwoNums(arg1, arg2);
            alert(product);
            break;
        case "/":
            quotient = getQuotienTwoNums(arg1, arg2);
            alert(quotient);
            break;
    }
}


let userFirstNum = +prompt("Введите первое число");
let userSecondNum = +prompt("Введите второе число");
let userOperation = prompt("Введите символ операции: +, - , *, /")

mathOperation(userFirstNum, userSecondNum, userOperation)