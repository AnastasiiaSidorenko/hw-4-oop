function Drink(type) {
    this.type = type;
}

Drink.Coke = {
    type: 'coke',
    price: 50,
    calories: 40
};

Drink.Coffee = {
    type: 'coffee',
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