var Espresso = /** @class */ (function () {
    function Espresso() {
        this.name = 'Espresso';
    }
    Espresso.prototype.grindCoffe = function () {
        console.log("Your ".concat(this.name, " is being grinded..."));
        console.log("Your coffe is ready!");
    };
    Espresso.prototype.makeCoffe = function () {
        console.log("Your ".concat(this.name, " is being made..."));
        console.log("Your coffe is ready!");
    };
    Espresso.prototype.pourIntoCup = function () {
        console.log("Pouring the ".concat(this.name, " into your cup..."));
        console.log("Your coffe is ready!");
    };
    return Espresso;
}());
var Cappuccino = /** @class */ (function () {
    function Cappuccino() {
        this.name = 'Cappuccino';
    }
    Cappuccino.prototype.grindCoffe = function () {
        console.log("Your ".concat(this.name, " is being grinded..."));
        console.log("Your coffe is ready!");
    };
    Cappuccino.prototype.makeCoffe = function () {
        console.log("Your ".concat(this.name, " is being made..."));
        console.log("Your coffe is ready!");
    };
    Cappuccino.prototype.pourIntoCup = function () {
        console.log("Pouring the ".concat(this.name, " into your cup..."));
        console.log("Your coffe is ready!");
    };
    return Cappuccino;
}());
var Americano = /** @class */ (function () {
    function Americano() {
        this.name = 'Espresso';
    }
    Americano.prototype.grindCoffe = function () {
        console.log("Your ".concat(this.name, " is being grinded..."));
        console.log("Your coffe is ready!");
    };
    Americano.prototype.makeCoffe = function () {
        console.log("Your ".concat(this.name, " is being made..."));
        console.log("Your coffe is ready!");
    };
    Americano.prototype.pourIntoCup = function () {
        console.log("Pouring the ".concat(this.name, " into your cup..."));
        console.log("Your coffe is ready!");
    };
    return Americano;
}());
var CoffeFactory = /** @class */ (function () {
    function CoffeFactory() {
    }
    CoffeFactory.prototype.orderCoffe = function (typeCoffee) {
        if (typeCoffee === 'Espresso') {
            return new Espresso();
        }
        else if (typeCoffee === 'Cappuccino') {
            return new Cappuccino();
        }
        else if (typeCoffee === 'Americano') {
            return new Americano();
        }
        else {
            throw new Error('Not an existing coffe.');
        }
    };
    return CoffeFactory;
}());
var coffeFactory = new CoffeFactory();
var coffeEspresso = coffeFactory.orderCoffe('Espresso');
coffeEspresso.grindCoffe();
coffeEspresso.makeCoffe();
coffeEspresso.pourIntoCup();
