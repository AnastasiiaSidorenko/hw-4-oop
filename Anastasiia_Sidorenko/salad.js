function Salad(type, size) {
    this.type = type;
    this.size = size;
}

Salad.CAESAR = {
    size: 100,
    price: 100,
    calories: 20
};

Salad.OLIVIER = {
    size: 100,
    price: 50,
    calories: 80
};

Salad.prototype.getSize = function () {
    return this.type.size;
}

Salad.prototype.calculatePrice = function () {
    return this.type.price / this.type.size * this.size;
};

Salad.prototype.calculateCalories = function () {
    return this.type.calories / this.type.size * this.size;
};

module.exports = Salad;

