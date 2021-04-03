/*
  1. Написать функцию, преобразующую число в объект. 
  Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
  в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
  Например, для числа 245 мы должны получить следующий объект:
  {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
  Если число превышает 999, 
  необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function getObjectNum(num) {
    let stringNum = String(num);
    let sizeStringNum = stringNum.length;
    let obj = {};
    if (sizeStringNum > 3) {
        console.log('Число превышает 999, передайте функции трёхзначное число')
        return obj;
    } else if (sizeStringNum == 3) {
        obj['единицы'] = +stringNum[2];
        obj['десятки'] = +stringNum[1];
        obj['сотни'] = +stringNum[0];
        return obj;
    } else if (sizeStringNum == 2) {
        obj['единицы'] = +stringNum[1];
        obj['десятки'] = +stringNum[0];
        obj['сотни'] = 0;
        return obj;
    } else {
        obj['единицы'] = +stringNum[0];
        obj['десятки'] = 0;
        obj['сотни'] = 0;
        return obj;
    }
}

console.log(getObjectNum(100));
