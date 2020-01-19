var Item = require('./item');

function Drink(type) {
    Item.call(this, type);
}

Drink.prototype = Object.create(Item.prototype);

Drink.Coke = {
    type: 'coke',
    name: 'Coca Cola',
    price: 50,
    calories: 40
};

Drink.Coffee = {
    type: 'coffee',
    name: 'Americano',
    price: 80,
    calories: 20
};

Drink.prototype.getType = function () {
    return this.type.type;
};

Drink.prototype.calculatePrice = function () {
    return this.type.price;
};

Drink.prototype.calculateCalories = function () {
    return this.type.calories;
};

module.exports = Drink;