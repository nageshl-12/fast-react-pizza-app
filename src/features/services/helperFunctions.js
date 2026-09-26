export function formatCurrency(currency) {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(currency);
  return formatted;
}

export function generateOrderId() {
  const id = crypto.randomUUID();
  return id;
}
