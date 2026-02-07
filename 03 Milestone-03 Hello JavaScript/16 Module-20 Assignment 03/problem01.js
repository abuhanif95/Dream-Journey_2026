/*
==> Problem 01: New Price for Eid Sale
*/
function newPrice(currentPrice, discount) {
  // Your code here
  if (
    typeof currentPrice !== "number" ||
    discount < 0 ||
    discount > 100 ||
    typeof discount !== "number"
  ) {
    return "Invalid";
  }
  let discountPrice = (currentPrice * discount) / 100;
  let newPrice = currentPrice - discountPrice;
  return newPrice.toFixed(3);
}

console.log(newPrice(1500, "5"));
console.log(newPrice(1500, 20));
console.log(newPrice(2000, 15));
console.log(newPrice(1200, 7));
console.log(newPrice("1000", 10));
console.log(newPrice(2000, 17.17));
console.log(newPrice(500, "5"));
