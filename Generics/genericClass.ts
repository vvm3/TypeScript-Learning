interface Course{
    name: string,
    owner:string
}

interface Car{
    name:string,
    price: number
}


class Sell<T>{

    public cart: T[] = []
    addToCart(item:T){
        this.cart.push(item)
    }
}

let JS = new Sell();
JS.addToCart({name:"JavaScript", owner:"virat"});
console.log(JS.cart[0]);
console.log(JS.cart[1]);


let Maruti = new Sell();
Maruti.addToCart({name:"alto 800", price:400000});
console.log(Maruti.cart[0]);
console.log(Maruti.cart[4]);

