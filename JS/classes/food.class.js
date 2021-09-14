"use strict";
// creation de la classe d enumeration
var ClassFood;
(function (ClassFood) {
    ClassFood["MAUVAIS"] = "C";
    ClassFood["MOYEN"] = "B";
    ClassFood["BON"] = "A";
})(ClassFood || (ClassFood = {}));
// creation de la classe food
class food {
    constructor(_name, _qualityNut, calories, lipides, glucides, protides, _urlImage) {
        this._name = _name;
        this._qualityNut = _qualityNut;
        this.calories = calories;
        this.lipides = lipides;
        this.glucides = glucides;
        this.protides = protides;
        this._urlImage = _urlImage;
        food.listFood.push(this);
    }
    // création des getters
    get name() {
        return this._name;
    }
    get quality() {
        return this._qualityNut;
    }
    get image() {
        return this._urlImage;
    }
    // création des setters
    set name(newName) {
        this._name = newName;
    }
    set quality(newQuality) {
        this._qualityNut = newQuality;
    }
    set image(newURL) {
        this._urlImage = newURL;
    }
    displayQuality() {
        console.log("Valeur nutritionelle : " + this.quality);
        console.log("Lipides : " + this.lipides);
        console.log("Glucides : " + this.glucides);
        console.log("Protides : " + this.protides);
    }
}
food.listFood = [];
//# sourceMappingURL=food.class.js.map