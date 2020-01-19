var Item = require('./item');

function Hamburger(type, stuffing) {
    Item.call(this, type);
    this.stuffing = stuffing;
}

Hamburger.prototype = Object.create(Item.prototype);

Hamburger.SIZE_SMALL = {
    size: 'small',
    name: 'Small Mac',
    price: 50,
    calories: 20
};

Hamburger.SIZE_LARGE = {
    size: 'large',
    name: 'Big Mac',
    price: 100,
    calories: 40
};

Hamburger.STUFFING_CHEESE = {
    stuffing: 'cheese',
    price: 10,
    calories: 20
};

Hamburger.STUFFING_SALAD = {
    stuffing: 'salad',
    price: 20,
    calories: 5
};

Hamburger.STUFFING_POTATO = {
    stuffing: 'potato',
    price: 15,
    calories: 10
};

Hamburger.prototype.getSize = function () {
    return this.type.size;
};

Hamburger.prototype.getStuffing = function () {
    return this.stuffing.stuffing;
};

Hamburger.prototype.calculatePrice = function () {
    return this.type.price + this.stuffing.price;
};

Hamburger.prototype.calculateCalories = function () {
    return this.type.calories + this.stuffing.calories;
};

module.exports = Hamburger;