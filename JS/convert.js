"use strict";
console.log('coucou !! welcome home');
const Dollar = {
    name: "Dollar",
    code: "Dol",
    symbole: "$",
    rate: 1,
};
const Euro = {
    name: "Euro",
    code: "Eur",
    symbole: "€",
    rate: 1.2,
};
const Livre = {
    name: "Livre",
    code: "Liv",
    symbole: "£",
    rate: 1.39,
};
const Yuan = {
    name: "Yuan",
    code: "Yua",
    symbole: "&yen;",
    rate: 0.15,
};
const devises = [Dollar, Euro, Livre, Yuan];
let menuDevisesStart = document.querySelector("#devisestart");
let menuDevisesEnd = document.querySelector("#deviseend");
menuDevisesStart.innerHTML = creerListeDevises(devises);
menuDevisesEnd.innerHTML = creerListeDevises(devises);
function creerListeDevises(listeDevises) {
    let listeDev = "";
    for (let devise of listeDevises) {
        listeDev += `<option value="${devise.code}">${devise.symbole} - ${devise.name} </option>`;
    }
    return listeDev;
}
let amount = 0;
const amountValueIn = document.querySelector("#amount");
let deviseStartValueIn = menuDevisesStart.value;
let deviseEndValueIn = menuDevisesEnd.value;
const divResult = document.querySelector("#result");
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
function calculResult(in_amount, in_codeDevisein, in_codeDeviseOut) {
    let deviseInitObjet = getDevise(in_codeDevisein, devises);
    let deviseInit;
    if (deviseInitObjet)
        deviseInit = deviseInitObjet;
    else
        throw { message: "Devise initiale incorrecte" };
    let deviseEndObjet = getDevise(in_codeDeviseOut, devises);
    let deviseEnd;
    if (deviseEndObjet)
        deviseEnd = deviseEndObjet;
    else
        throw { message: "Devise initiale incorrecte" };
    return (in_amount * deviseInit.rate) / deviseEnd.rate;
}
function getDevise(codeDevise, in_devises) {
    for (let devise of in_devises) {
        if (codeDevise === devise.code) {
            return devise;
        }
    }
    return null;
}
//# sourceMappingURL=convert.js.map