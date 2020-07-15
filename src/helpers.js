export function calculateTotal(quantity, deadline) {
  //Quantity
  // 0-1000 = 25%
  //1001-500 = 20%
  //5001-10000 = 15%
  //+10000 = 10%

  let totalQuantity;

  if (quantity <= 1000) {
    totalQuantity = quantity * 0.25;
  } else if (quantity > 1000 && quantity <= 5000) {
    totalQuantity = quantity * 0.2;
  } else if (quantity > 5000 && quantity <= 10000) {
    totalQuantity = quantity * 0.15;
  } else {
    totalQuantity = quantity * 0.1;
  }

  //Calculate deadline of interests

  console.log(totalQuantity);
}
