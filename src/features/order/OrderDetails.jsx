import { useLoaderData } from "react-router-dom";

import Orderstatus from "./Orderstatus";

function OrderDetails() {
  const data = useLoaderData();

  return (
    <div>
      <Orderstatus data={data} />
    </div>
  );
}

export default OrderDetails;
