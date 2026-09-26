import { getOrder } from "./apiRestorent";

export async function fetchOrder({ params }) {
  const order = await getOrder(params.id);
  return order;
}
