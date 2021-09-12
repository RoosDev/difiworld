// URL de connexion à l'API
const url_Api="https://restcountries.eu/rest/v2/all";

// requete fetch de récupération des données de l'API
 fetch(url_Api)
    .then((response:any) => {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json()
        } else {
            console.log("Oops, il y a un bug dans la récupération");
        }
    })
    .then((jsonData) => {
        startApplicationFlag(jsonData)

    })
    .catch((error) => {
        console.log(error);
    })


// Création de l'interface pays

interface Pays{
    name:string;
    flag:string;
    capital:string;
    nbBorders:number;
}


// Tableau de pays

let listePays:Pays[] = [];

let randomPays:Pays;    

// défintion du type des données récupérées

interface Datas{
    translations: {
        fr:string;
        [props:string]:string;
    }
    name:string;
    flag:string;
    capital:string;
    borders:[];
    [props:string]:string|number|{};
}

// fonction de l'application
const divResultFlag = document.querySelector('#result')! as HTMLDivElement;


function startApplicationFlag(allDatas:Datas[]){
    divResultFlag.classList.add('hidden')

    for(let unPays of allDatas){
        const pays:Pays = {
            name : unPays.translations.fr ,
            flag: unPays.flag,
            capital:unPays.capital,
            nbBorders:unPays.borders.length,
        }
        listePays.push(pays);
        
    }
    startGameFlag()
}

// lancement du jeu Drapeaux

function startGameFlag(){
    randomPays = getRandomPays(listePays);
    //affichage du drapeau
    document.querySelector('#flagBody')!.innerHTML = `<img src="${randomPays.flag}" alt="non pas d'indice" class="w-100" border=1px solid grey >`

    const trueAnswer = randomPays.name;
    const wrongAnswer1 = getRandomPays(listePays).name;
    const wrongAnswer2 = getRandomPays(listePays).name;
    const wrongAnswer3 = getRandomPays(listePays).name;

    let answers: string[] = [trueAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3];
    answers = mixArray(answers);
    console.log(answers)
    document.querySelector('#choiceButtons')!.innerHTML = createbutton(answers);
}

// Fonction pour mélanger les boutons de réponse proposés

function mixArray(tab:any){
    let randomTable = tab
    for(let i = randomTable.length-1 ; i>0 ; i--){
        let j = Math.floor( Math.random() * ( i + 1 ) );    //random index
        [randomTable[i], randomTable[j]] = [randomTable[j],randomTable[i]];     // SWAP
    }
    return randomTable;
}


// Fonction pour obtenir un pays au hasard

function getRandomPays(listePays:Pays[]) :Pays {
    let random = Math.floor(Math.random() * listePays.length);
    return listePays[random];

}

// fonction pour générer les boutons

function createbutton(tab:string[]) :string{
    let HTMLButton = "";
    for(let choice of tab){
        HTMLButton += `<button type="button" class="btn btn-info m-4" onClick="checkAnswer('${choice}')">${choice}</button>`
    }

    return HTMLButton;
}

// fonction pour vérifier si la réponse est correcte

function checkAnswer(answer:string):void {
    if(answer == randomPays.name){
        divResultFlag.innerHTML = '<div class="alert alert-success mx-1 w-75"><strong>Bonne réponse, chapeau l\'artiste.<button type="button" class="btn btn-warning mx-2" onClick="startGameFlag()">Pays suivant</button></div> '
    }else{
        divResultFlag.innerHTML = '<div class="alert alert-danger mx-1 w-75"><strong>Mauvaise réponse, essaies encore.</div>' }

}

