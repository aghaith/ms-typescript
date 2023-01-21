"use strict";
/*
let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

console.log(myIceCream.flavor);
*/
let myIceCream;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr = myIceCream[0];
console.log(myStr);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
