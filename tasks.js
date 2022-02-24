/*
1. Создать функцию, генерирующую шахматную доску. 
При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)
*/

const bordChess = {
    rowCount: 9,
    colCount: 9,
    containerElement: null,
    cellElemements: [],
    cellFirst: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],

    initCell() {
        this.containerElement = document.getElementById("chess")
        for (let row = 0; row < this.rowCount; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);
            for (let col = 0; col < this.colCount; col++) {
                const td = document.createElement('td');
                td.style.textAlign = 'center';
                td.style.verticalAlign = 'middle';
                td.style.width = '60px';
                td.style.height = '60px';
                tr.appendChild(td);
                if (row == 0 || col == 0) {
                    if (row != 0) {
                        td.textContent = row;
                    } else if (col != 0) {
                        td.textContent = this.cellFirst[col - 1];
                    }
                } else {
                    td.style.border = '1px solid black';
                    if ((row + col) % 2) {
                        td.style.backgroundColor = 'black';
                    }
                };
                this.cellElemements.push(td);
            }
        }
    },
}

bordChess.initCell();


/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
    2.1. Пустая корзина должна выводить строку «Корзина пуста»;
    2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

const basket = {
    viewContent: null,
    product: [],

    init() {
        this.viewContent = document.getElementById("basket")
    },

    addToBasket(name, id, price, value) {
        this.product.push([id, name, price, value])
    },

    sum() {
        if (!this.product.length) {
            this.viewContent.innerHTML = "<h1>Карзина пуста</h1>";
        }
        else {
            let result = 0;
            for (x in this.product) {
                result += this.product[x][2] * this.product[x][3];
            }
            this.viewContent.innerHTML = `<h1>В корзине: ${this.product.length} товаров на сумму ${result} рублей</h1>`;
        }
    },

}

//Инициация объекта
basket.init();

//Добавление товаров в карзину
basket.addToBasket("monitor", 1, 500, 3);
basket.addToBasket("mouse", 2, 150, 5);
basket.addToBasket("keybord", 3, 200, 6);

// Подсчет стоимости карзины и вывод на экран.
basket.sum();