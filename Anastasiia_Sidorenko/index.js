var Order = require('./order');
var Hamburger = require('./hamburger');
var Drink = require('./drink');
var Salad = require('./salad');

var hamburgerSmall = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATO);
var hamburgerLarge = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
var salad = new Salad(Salad.OLIVIER);
var drink = new Drink(Drink.Coffee);
var order = new Order();

order.addItem(hamburgerSmall);
order.addItem(hamburgerLarge);
order.addItem(salad);
order.addItem(drink);
order.processPayment();

order.processCalories();

