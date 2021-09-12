console.log('coucou !! welcome home')

interface DeviseType {
  name: string;
  code: string;
  symbole: string;
  rate: number;
}

const Dollar: DeviseType = {
  name: "Dollar",
  code: "Dol",
  symbole: "$",
  rate: 1,
};

const Euro: DeviseType = {
  name: "Euro",
  code: "Eur",
  symbole: "€",
  rate: 1.2,
};

const Livre: DeviseType = {
  name: "Livre",
  code: "Liv",
  symbole: "£",
  rate: 1.39,
};

const Yuan: DeviseType = {
  name: "Yuan",
  code: "Yua",
  symbole: "&yen;",
  rate: 0.15,
};

const devises: DeviseType[] = [Dollar, Euro, Livre, Yuan];

let menuDevisesStart = document.querySelector(
  "#devisestart"
)! as HTMLSelectElement;
let menuDevisesEnd = document.querySelector("#deviseend")! as HTMLSelectElement;

menuDevisesStart.innerHTML = creerListeDevises(devises);
menuDevisesEnd.innerHTML = creerListeDevises(devises);

function creerListeDevises(listeDevises: DeviseType[]): string {
  let listeDev = "";
  for (let devise of listeDevises) {
    listeDev += `<option value="${devise.code}">${devise.symbole} - ${devise.name} </option>`;
  }

  return listeDev;
}

let amount: number = 0;
const amountValueIn = document.querySelector("#amount")! as HTMLInputElement;
let deviseStartValueIn: string = menuDevisesStart.value;
let deviseEndValueIn = menuDevisesEnd.value;
const divResult = document.querySelector("#result")! as HTMLDivElement;

amountValueIn.addEventListener("keyup", () => {
  amount = +amountValueIn.value;
  displayResult();
});

menuDevisesStart.addEventListener("change", () => {
  deviseStartValueIn = menuDevisesStart.value;
  displayResult();
});

menuDevisesEnd.addEventListener("change", () => {
  deviseEndValueIn = menuDevisesEnd.value;
  displayResult();
});


function displayResult() {
  divResult.innerHTML =
    "Résultat : " + calculResult(amount, deviseStartValueIn, deviseEndValueIn);
}

function calculResult(
  in_amount: number,
  in_codeDevisein: string,
  in_codeDeviseOut: string
): number {
  let deviseInitObjet = getDevise(in_codeDevisein, devises);
  let deviseInit: DeviseType;
  if (deviseInitObjet) deviseInit = deviseInitObjet as DeviseType;
  else throw { message: "Devise initiale incorrecte" };

  let deviseEndObjet = getDevise(in_codeDeviseOut, devises);
  let deviseEnd: DeviseType;
  if (deviseEndObjet) deviseEnd = deviseEndObjet as DeviseType;
  else throw { message: "Devise initiale incorrecte" };
  return (in_amount * deviseInit.rate) / deviseEnd.rate;
}

function getDevise(
  codeDevise: string,
  in_devises: DeviseType[]
): DeviseType | null {
  for (let devise of in_devises) {
    if (codeDevise === devise.code) {
      return devise;
    }
  }
  return null;
}
