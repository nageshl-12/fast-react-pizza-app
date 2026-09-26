import { useFetcher } from "react-router-dom";
import Button from "../ui/components/Button";
import { updateOrder } from "../services/apiRestorent";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="small">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function updateOrderAction({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.id, data);
  return null;
}
