import { useParams } from "react-router-dom";
import OrderDetails from "../../order/OrderDetails";

function Order() {
  const { id } = useParams();

  return <div>{id && <OrderDetails />}</div>;
}

export default Order;
