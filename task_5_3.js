/*3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

const basket = {
    basketList: [],
    addProduct (basketList, productObj) {
        basketList.push(productObj);
        return basketList;
    },
    getBasketPrice(basketList) {
        let countProducts = basketList.length;
        let sumPriceBasket = 0;
        for (let item = 0; item < countProducts; item++) {
            sumPriceBasket += basketList[item].price * basketList[item].count;
        }
        return sumPriceBasket;
    }
}



function getProductObj (nameProduct, price, count) {
    let productObj = {};
    productObj['nameProduct'] = nameProduct;
    productObj['price'] = price;
    productObj['count'] = count;
    return productObj;
}


function checkBasket(basket) {
    let countProducts = basket.basketList.length;
    let answerString = '';
    if (countProducts == 0) {
        answerString = 'basket is empty';
        return answerString;
    } else {
        let priceBasket = basket.getBasketPrice(basket.basketList);
        answerString = `There are ${countProducts} items in the basket for the amount of ${priceBasket}`;
        return answerString;
    }
}


let product1 = getProductObj('apples', 100, 6);
let product2 = getProductObj('milk', 69, 4);
basket.addProduct(basket.basketList, product1);
basket.addProduct(basket.basketList, product2);
let basketInfo = checkBasket(basket);
const basketBlock = document.querySelector('.basket');
basketBlock.textContent = basketInfo;

