var Sell = /** @class */ (function () {
    function Sell() {
        this.cart = [];
    }
    Sell.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    return Sell;
}());
var JS = new Sell();
JS.addToCart({ name: "JavaScript", owner: "virat" });
console.log(JS.cart[0]);
console.log(JS.cart[1]);
var Maruti = new Sell();
Maruti.addToCart({ name: "alto 800", price: 400000 });
console.log(Maruti.cart[0]);
console.log(Maruti.cart[4]);
