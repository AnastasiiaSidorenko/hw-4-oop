var Order = require('./order');
var Hamburger = require('./hamburger');
var Drink = require('./drink');
var Salad = require('./salad');

var hamburgerSmall = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
var hamburgerLarge = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
var saladOlivier = new Salad(Salad.OLIVIER, 150);
var drinkCoffee = new Drink(Drink.Coffee);
var order = new Order();

console.log(hamburgerSmall.getName());
console.log(hamburgerLarge.getName());
console.log(saladOlivier.getName());
console.log(drinkCoffee.getName());

order.addItem(hamburgerSmall);
order.addItem(hamburgerLarge);
order.addItem(saladOlivier);
order.addItem(saladOlivier);
order.addItem(drinkCoffee);

order.removeItem(saladOlivier);

order.processPayment();
order.processCalories();

order.removeItem(drinkCoffee);
order.addItem(hamburgerLarge);


