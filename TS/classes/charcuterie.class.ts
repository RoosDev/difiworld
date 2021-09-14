// creation de class filles

class charcuterie extends food {
  public static listCharcuterie: charcuterie[] = [];
  constructor(
    name: string,
    calories: number,
    lipides: number,
    glucides: number,
    protides: number,
    urlImage: string
  ) {
    super(name, ClassFood.MAUVAIS, calories, lipides, glucides, protides, urlImage);
    charcuterie.listCharcuterie.push(this);
  }
  public displayFoods(){
    console.log('Charcuterie : ' + this.name);
    this.displayQuality()
}

}
console.log(charcuterie.listCharcuterie)