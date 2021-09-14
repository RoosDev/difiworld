// creation de class filles

class fruits extends food {
  public static listFruits: fruits[] = [];
  constructor(
    name: string,
    calories: number,
    lipides: number,
    glucides: number,
    protides: number,
    urlImage: string
  ) {
    super(name, ClassFood.BON, calories, lipides, glucides, protides, urlImage);
    fruits.listFruits.push(this);
  }

  public displayFoods(){
      console.log('Fruits : ' + this.name);
      this.displayQuality()
  }
}
console.log(fruits.listFruits)