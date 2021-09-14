"use strict";
// creation de class filles
class fruits extends food {
    constructor(name, calories, lipides, glucides, protides, urlImage) {
        super(name, ClassFood.BON, calories, lipides, glucides, protides, urlImage);
        fruits.listFruits.push(this);
    }
    displayFoods() {
        console.log('Fruits : ' + this.name);
        this.displayQuality();
    }
}
fruits.listFruits = [];
console.log(fruits.listFruits);
//# sourceMappingURL=fruits.class.js.map