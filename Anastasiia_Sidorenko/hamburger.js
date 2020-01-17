function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
}

Hamburger.SIZE_SMALL = {
    size: 'small',
    price: 50,
    calories: 20
};

Hamburger.SIZE_LARGE = {
    size: 'large',
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
    return this.size.size;
};

Hamburger.prototype.getStuffing = function () {
    return this.stuffing.stuffing;
};

Hamburger.prototype.calculatePrice = function () {
    return this.size.price + this.stuffing.price;
};

Hamburger.prototype.calculateCalories = function () {
    return this.size.calories + this.stuffing.calories;
};

module.exports = Hamburger;