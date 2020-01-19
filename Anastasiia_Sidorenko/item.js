function Item(type) {
    this.type = type;
}

Item.prototype.getName = function () {
    return this.type.name;
};

module.exports = Item;