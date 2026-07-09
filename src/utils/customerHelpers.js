export function calculateTotal(price, packets) {
  return Number(price) * Number(packets);
}

export function calculateBalance(total, paid) {
  return Number(total) - Number(paid);
}

export function getPaymentStatus(balance) {
  return Number(balance) === 0 ? "Paid" : "Pending";
}