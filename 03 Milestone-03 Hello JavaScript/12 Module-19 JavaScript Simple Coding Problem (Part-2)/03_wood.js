/**
 * chair = 3 cft
 * table = 10 cft
 * bed = 50 cft
 */

function woodQuality(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

  return totalWood;
}

const wood = woodQuality(13, 13, 3);
console.log(("Wood needed:", wood));

/**
 * Shirt price = 500
 * Pant price = 300
 * Shoe Price = 900
 */

function shopping(shirtQuantity, pantQuantity, shoeQuantity) {
  let shirtPrice = 500;
  let pantPrice = 300;
  let shoePrice = 900;

  let perPieceShirt = shirtPrice * shirtQuantity;
  let perPiecePant = pantPrice * pantQuantity;
  let perPieceShoe = shoePrice * shoeQuantity;

  let totalCost = perPieceShirt + perPiecePant + perPieceShoe;

  return totalCost;
}

const shoppingCost = shopping(2, 2, 1);
console.log("Total shopping Cost:", shoppingCost);
