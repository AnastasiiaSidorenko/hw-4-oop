function Salad(type) {
    this.type = type;
}

Salad.CAESAR = {
    type: 'caesar',
    price: 100,
    calories: 20
};

Salad.OLIVIER = {
    type: 'olivier',
    price: 50,
    calories: 80
};

Salad.prototype.getType = function () {
    return this.type.type;
};

Salad.prototype.calculatePrice = function () {
    return this.type.price;
};

Salad.prototype.calculateCalories = function () {
    return this.type.calories;
};

module.exports = Salad;

