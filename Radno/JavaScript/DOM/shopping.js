"Use strict";
(function immediatlelyInvoking() {
    console.log('Hi');
})
();
class Product{
    constructor(name,price,expirationDate){
        this.name=name;
        this.price=price.toFixed(2);
        this.expirationDate=new Date(expirationDate);
        this.id=(Math.floor(Math.random() * 100000) + 1);
    }
}
const product1=new Product('articoka', 250,'1995-12-17T03:24:00');
console.log(product1);
class ShoppingBag{
    constructor(list){
this.list=list;
    }
}
const shopping = new ShoppingBag(0);
console.log(shopping);