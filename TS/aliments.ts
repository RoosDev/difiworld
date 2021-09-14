// initiation des produits
new fruits("Pomme", 35, 0.2, 14, 0.3, "../images/pomme.png");
new fruits("Poire", 42, 0.5, 24, 1.3, "../images/poire.png");
new charcuterie("Salami", 345, 26.5, 1.4, 13, "../images/salami.png");
new charcuterie("Saucisson", 776, 42, 2.8, 54, "../images/saucisson.png");


let listClassFood = {
    bad: charcuterie.listCharcuterie,
    mid: [],
    good: fruits.listFruits,
}



DisplayDynamicFood();
function DisplayDynamicFood() {
  const tableProduct = document.querySelector(
    "#productList"
  )! as HTMLTableElement;
  let lineProduct = "";

  const selectFoodValue = (
    document.querySelector("#selectQuality")! as HTMLSelectElement
  ).value;

  let listFoodFiltered = getlistTypeFiltered(selectFoodValue);
  if (listFoodFiltered.length > 0) {
    for (let products of listFoodFiltered) {
      lineProduct += `
            <tr class="table-warning">
                <th scope="row">${products.name}</th>
                <td>${products.lipides}</td>
                <td>${products.glucides}</td>
                <td>${products.protides}</td>
                <td>${products.quality}</td>
                <td><img src="${products.image}" width='100px' / ></td>
            </tr>
        `;
    }
  } else {
    lineProduct += `
            <tr class="table-danger">
                <th colspan="6" scope="row" class="text-center">Aucune donnée, <3 </th>
            </tr>
        `;
  }

  tableProduct.innerHTML = lineProduct;
}

// filtre des données liées au menu déroulant
function getlistTypeFiltered(type: string): any[] {
    switch (type) {
      case "all":
        return food.listFood;
        break;
      case "bad":
        return listClassFood.bad;
        break;
      case "mid":
        return listClassFood.mid;
        break;
      case "good":
        return listClassFood.good;
        break;
      default:
        return [];
    }
  }
  