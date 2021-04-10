/*
    1. Доработать модуль корзины.
    a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
    b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
*/

const productsCatalog = {
    productsCatalogBlock: null,
    basket: null,
    productsObjList: [],
    productsList: [
        ['Творожок "Домик в деревне"', 80], 
        ['Помидоры фасс. 500 гр.', 120], 
        ['Молоко "Весёлый молочник"', 68]
    ],

    init(productCatalogBlockClass, basket) {
        this.fillListObjectGoods();
        this.productsCatalogBlock = document.querySelector(`.${productCatalogBlockClass}`);
        this.basket = basket;
        this.show();
        this.addEventHandlers();
    },

    fillListObjectGoods() {
        for (let product = 0; product < this.productsList.length; product++) {
            let productObj = {};
            productObj['id'] = product + 1;
            productObj['nameProduct'] = this.productsList[product][0];
            productObj['price'] = this.productsList[product][1];
            this.productsObjList.push(productObj);
        }
    },

    show() {
        let lengthProductCatalogList = this.productsObjList.length;
        if (lengthProductCatalogList > 0) {
            this.showCatalogList();
        } else {
            this.showEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.productsCatalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('add-to-basket')) return;
        const idProduct = +event.target.dataset.id;
        const productToAdd = this.productsObjList.find((product) => product.id === idProduct);
        this.basket.addToBasket(productToAdd);
    },
    
    showCatalogList() {
        this.productsCatalogBlock.innerHTML = '';
        this.productsObjList.forEach(productElem => {
            this.productsCatalogBlock.insertAdjacentHTML('beforeend', this.showProductListElem(productElem));
        });
    },
    
    showProductListElem(elem) {
        let stringProductBlock = `
            <div class="product">
                <h3>${elem.nameProduct}</h3>
                <p>${elem.price} р.</p>
                <button class="add-to-basket" data-id="${elem.id}">Добавить в корзину</button>
            </div>
        `;
        return stringProductBlock;
    },

    showEmptyCatalog() {
        this.productsCatalogBlock.innerHTML = '';
        this.productsCatalogBlock.textContent = 'Каталог товаров пуст';
    }
}



const basket = {
    basketBlock: null,
    clearBasketButton: null,
    products: [],

    init(busketBlockClass, clearBasketButton) {
        this.basketBlock = document.querySelector(`.${busketBlockClass}`);
        this.clearBasketButton = document.querySelector(`.${clearBasketButton}`);

        this.addEventHandlers();
        this.show();
    },

    addEventHandlers() {
        this.clearBasketButton.addEventListener('click', this.clearBasket.bind(this));
    },

    clearBasket() {
        this.products = [];
        this.show();
    },

    show() {
        if (this.products.length > 0) {
            this.showBasketList();
        } else {
            this.showEmptyBasket();
        }
    },

    addToBasket(product) {
        if (product) {
            const findInBasket = this.products.find(({id}) => product.id === id);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.products.push(Object.assign({quantity: 1}, product));
            }
            this.show();
        } 
    },

    showEmptyBasket() {
        this.basketBlock.innerHTML = '';
        this.basketBlock.textContent = 'Корзина пуста.';
    },

    showBasketList() {
        this.basketBlock.innerHTML = '';
        this.products.forEach(product => {
            this.basketBlock.insertAdjacentHTML('beforeend', this.showBasketElem(product));
        });
    },

    showBasketElem(elem) {
        let stringElemBlock = `
            <div>
                <h3>${elem.nameProduct}</h3>
                <p>${elem.price} руб.</p>
                <p>${elem.quantity} шт.</p>
            </div>
            `;
        return stringElemBlock;
    },

};

productsCatalog.init('products-catalog', basket);
basket.init('basket', 'clear-basket');
