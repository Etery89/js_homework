/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень. 
*/

function getPowNumber (num, pow) {
    if (pow === 1) {
        return num;
    } else {
        return num * getPowNumber(num, pow - 1);
    }
}

console.log(getPowNumber(2, 3));