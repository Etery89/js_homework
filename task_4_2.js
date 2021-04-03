/*
    2.Продолжить работу с интернет-магазином:
    2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    2.2. Реализуйте такие объекты.
    2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

//let basket = [['яблоки', 70, 1], ['груши', 90, 2], ['молоко', 69, 4]]

function getProductObj (nameProduct, price, count) {
    let productObj = {};
    productObj['nameProduct'] = nameProduct;
    productObj['price'] = price;
    productObj['count'] = count;
    return productObj;
}

function addProduct (basketArr, productObj) {
    basketArr.push(productObj);
    return basketArr;
}

let userBasket = [];

addProduct(userBasket, getProductObj('яблоки', 70, 1));
addProduct(userBasket, getProductObj('груши', 90, 2));
addProduct(userBasket, getProductObj('молоко', 69, 4));

console.log(userBasket);


function getBasketPrice(basket) {
    let countProducts = basket.length;
    let sumPriceBasket = 0;
    for (let item = 0; item < countProducts; item++) {
        sumPriceBasket += basket[item].price * basket[item].count;
    }
    return sumPriceBasket;
}

console.log(getBasketPrice(userBasket));



// Продукт в каталоге:
/*
Продукт в каталоге на мой взгляд мог бы выглядеть так:
    let product = {
        изображение:;
        название:;
        модель:;
        производитель:;
        цена:;
        описание:;
        характеристики = {
            мощность:;
            вес:;
            ...
        }

    }
*/