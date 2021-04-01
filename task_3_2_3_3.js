/*
2. С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
*/
/*
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
let basket = [['яблоки', 70, 1], ['груши', 90, 2], ['молоко', 69, 4]]


function getBasketPrice (basket) {
    let countProducts = basket.length;
    let sumPriceBasket = 0;
    for (let i = 0; i < countProducts; i++) {
        sumPriceBasket += (basket[i][1] * basket[i][2]);
    }
    return sumPriceBasket;
}

getBasketPrice(basket);