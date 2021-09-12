"use strict";
// URL de connexion à l'API
const url_Api = "https://restcountries.eu/rest/v2/all";
// requete fetch de récupération des données de l'API
fetch(url_Api)
    .then((response) => {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
    }
    else {
        console.log("Oops, il y a un bug dans la récupération");
    }
})
    .then((jsonData) => {
    startApplicationFlag(jsonData);
})
    .catch((error) => {
    console.log(error);
});
// Tableau de pays
let listePays = [];
let randomPays;
// fonction de l'application
const divResultFlag = document.querySelector('#result');
function startApplicationFlag(allDatas) {
    divResultFlag.classList.add('hidden');
    for (let unPays of allDatas) {
        const pays = {
            name: unPays.translations.fr,
            flag: unPays.flag,
            capital: unPays.capital,
            nbBorders: unPays.borders.length,
        };
        listePays.push(pays);
    }
    startGameFlag();
}
// lancement du jeu Drapeaux
function startGameFlag() {
    randomPays = getRandomPays(listePays);
    //affichage du drapeau
    document.querySelector('#flagBody').innerHTML = `<img src="${randomPays.flag}" alt="non pas d'indice" class="w-100" border=1px solid grey >`;
    const trueAnswer = randomPays.name;
    const wrongAnswer1 = getRandomPays(listePays).name;
    const wrongAnswer2 = getRandomPays(listePays).name;
    const wrongAnswer3 = getRandomPays(listePays).name;
    let answers = [trueAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3];
    answers = mixArray(answers);
    console.log(answers);
    document.querySelector('#choiceButtons').innerHTML = createbutton(answers);
}
// Fonction pour mélanger les boutons de réponse proposés
function mixArray(tab) {
    let randomTable = tab;
    for (let i = randomTable.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //random index
        [randomTable[i], randomTable[j]] = [randomTable[j], randomTable[i]]; // SWAP
    }
    return randomTable;
}
// Fonction pour obtenir un pays au hasard
function getRandomPays(listePays) {
    let random = Math.floor(Math.random() * listePays.length);
    return listePays[random];
}
// fonction pour générer les boutons
function createbutton(tab) {
    let HTMLButton = "";
    for (let choice of tab) {
        HTMLButton += `<button type="button" class="btn btn-info m-4" onClick="checkAnswer('${choice}')">${choice}</button>`;
    }
    return HTMLButton;
}
// fonction pour vérifier si la réponse est correcte
function checkAnswer(answer) {
    if (answer == randomPays.name) {
        divResultFlag.innerHTML = '<div class="alert alert-success mx-1 w-75"><strong>Bonne réponse, chapeau l\'artiste.<button type="button" class="btn btn-warning mx-2" onClick="startGameFlag()">Pays suivant</button></div> ';
    }
    else {
        divResultFlag.innerHTML = '<div class="alert alert-danger mx-1 w-75"><strong>Mauvaise réponse, essaies encore.</div>';
    }
}
//# sourceMappingURL=flags.js.map