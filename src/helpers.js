export function calculateTotal(quantity, deadline) {
  //Calculate interest on quantity
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

  //Calculate interest on deadline
  // 3 = 5%
  // 6 = 10%
  //12 = 15%
  //24 = 20%

  let totalDeadline = 0;

  switch (deadline) {
    case 3:
      totalDeadline = quantity * 0.05;
      break;
    case 6:
      totalDeadline = quantity * 0.1;
      break;
    case 12:
      totalDeadline = quantity * 0.15;
      break;
    case 24:
      totalDeadline = quantity * 0.2;
      break;
    default:
      break;
  }

  return totalDeadline + totalQuantity + quantity;
}
