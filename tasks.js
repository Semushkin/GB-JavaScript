/*
1. Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих
свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект:
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть
пустой объект.
*/

let a = 245;

const obj = {
    "еденицы": 0,
    "десяьки": 0,
    "сотни": 0,
};

function split(value) {
    if (value < 1000) {
        obj["еденицы"] = Math.trunc(value / 100);
        obj["десяьки"] = Math.trunc((value % 100) / 10);
        obj["сотни"] = a % 10;
        return obj;
    }
    else {
        console.log('Число превышает 999');
        return obj;
    }
}

console.log(split(a));

/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно
заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const basket = {
    getObject(id, price, value) {
        return {
            id: id,
            price: price,
            value: value,
        }
    },
    addToBasket(name, id, price, value) {
        this[name] = this.getObject(id, price, value);
    },
    sum() {
        let result = 0;
        for (val in this) {
            if (typeof this[val] == 'object') {
                result += (this[val].price * this[val].value);
            }
        }
        return result;
    }
};

// Добавляем товары в карзину.
basket.addToBasket("monitor", 1, 500, 3);
basket.addToBasket("mouse", 2, 150, 5);
basket.addToBasket("keybord", 3, 200, 6);


//Считаем стоимость карзины
console.log(basket.sum())