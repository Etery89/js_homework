/*3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

const productList = [['яблоки', 80, 2], ['груши', 120, 3], ['молоко', 68, 4]];

const userBasket = {
    basketBlock: null,
    basketList: [],
    productList,
    sumPriceBasket: 0,
    stringToBlock: null,
    init() {
        this.basketBlock = document.querySelector('.basket');
        this.fillBasket();
        this.getBasketPrice();
        this.createStringToBlock();
        this.basketBlock.innerHTML = this.stringToBlock;
    },
    fillBasket() {
        for (let product = 0; product < productList.length; product++) {
            let productObj = {};
            productObj['nameProduct'] = this.productList[product][0];
            productObj['price'] = this.productList[product][1];
            productObj['count'] = this.productList[product][2];
            this.basketList.push(productObj);
        }
    },
    getBasketPrice() {
        let sumPrice = 0;
        for (let item = 0; item < this.basketList.length; item++) {
            this.sumPriceBasket += this.basketList[item].price * this.basketList[item].count;
        }
    },
    createStringToBlock() {
        if (this.basketList.length == 0) {
            this.stringToBlock = "basket is empty";
        } else {
            this.stringToBlock = `There are ${this.basketList.length} items in the basket for the amount of ${this.sumPriceBasket}`
        }
    },
}

userBasket.init();

