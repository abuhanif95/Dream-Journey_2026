function calcBill(prices, items) {
  let itemCount = {};

  for (let item of items) {
    if (itemCount.hasOwnProperty(item)) {
      itemCount[item]++;
    } else {
      itemCount[item] = 1;
    }
  }
  let total = 0;
  for (let item in itemCount) {
    let price = prices[item];
    let quantity = itemCount[item];
    let totalPrice = price * quantity;

    total = total + totalPrice;
  }

  return {
    total,
    itemCount,
  };
}

let output = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
console.log(output);
