// creation de la classe d enumeration

enum ClassFood {
  MAUVAIS = "C",
  MOYEN = "B",
  BON = "A",
}

// creation de la classe food
abstract class food {
  public static listFood: food[] = [];

  constructor(
    protected _name: string,
    protected _qualityNut: ClassFood,
    public readonly calories: number,
    public readonly lipides: number,
    public readonly glucides: number,
    public readonly protides: number,
    protected _urlImage: string
  ) {
    food.listFood.push(this);
  }

  // création des getters
  get name(): string {
    return this._name;
  }
  get quality(): ClassFood {
    return this._qualityNut;
  }
  get image(): string {
    return this._urlImage;
  }

  // création des setters
  set name(newName: string) {
    this._name = newName;
  }
  set quality(newQuality: ClassFood) {
    this._qualityNut = newQuality;
  }
  set image(newURL: string) {
    this._urlImage = newURL;
  }

  //fonction pour afficher les aliments devient obligatoire dans chaque classe fille
  abstract displayFoods(): void;

  protected displayQuality() {
    console.log("Valeur nutritionelle : " + this.quality);
    console.log("Lipides : " + this.lipides);
    console.log("Glucides : " + this.glucides);
    console.log("Protides : " + this.protides);
  }
}

