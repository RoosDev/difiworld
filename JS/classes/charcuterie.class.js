"use strict";
// creation de class filles
class charcuterie extends food {
    constructor(name, calories, lipides, glucides, protides, urlImage) {
        super(name, ClassFood.MAUVAIS, calories, lipides, glucides, protides, urlImage);
        charcuterie.listCharcuterie.push(this);
    }
    displayFoods() {
        console.log('Charcuterie : ' + this.name);
        this.displayQuality();
    }
}
charcuterie.listCharcuterie = [];
console.log(charcuterie.listCharcuterie);
//# sourceMappingURL=charcuterie.class.js.map