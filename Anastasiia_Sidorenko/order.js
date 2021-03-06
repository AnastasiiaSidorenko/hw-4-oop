function Order() {
    this.order = [];
    this.payment = false;
}

Order.prototype.addItem = function (item) {
    if (this.payment) {
        console.log('Заказ оплачен, невозможно добавить позицию');
    } else {
        this.order.push(item);
    }
};

Order.prototype.removeItem = function (item) {
    if (this.payment) {
        console.log('Заказ оплачен, невозможно удалить позицию');
    } else {
        var itemIndex = this.order.indexOf(item);
        if (itemIndex !== -1) {
            this.order.splice(itemIndex, 1);
        }
    }
};

Order.prototype.calculatePrice = function () {
    var price = this.order.reduce(function (sum, item) {
        return item.calculatePrice() + sum;
    }, 0);
    return price;
};

Order.prototype.calculateCalories = function () {
    var calories = this.order.reduce(function (sum, item) {
        return item.calculateCalories() + sum;
    }, 0);
    return calories;
};

Order.prototype.processPayment = function () {
    console.log('Вы должны заплатить: ' + this.calculatePrice());
    this.payment = true;
    Object.freeze(this.order);
};

Order.prototype.processCalories = function () {
    console.log('Каллорийность заказа: ' + this.calculateCalories());
};

module.exports = Order;