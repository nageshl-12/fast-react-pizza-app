import { formatCurrency } from "../services/helperFunctions";
import UpdateOrder from "./UpdateOrder";

function Totalorderprice({ orderPrice, priorityPrice, priority, order }) {
  return (
    <div className="bg-stone-200/80 my-5 px-2 py-5 space-y-2">
      <p className="text-stone-600">
        Price pizza: {formatCurrency(orderPrice)}
      </p>
      {priority && (
        <p className="text-stone-600">
          Price Priority: {formatCurrency(priorityPrice)}
        </p>
      )}
      <h1 className="font-semibold">
        To pay on delivey:{formatCurrency(orderPrice + priorityPrice)}
      </h1>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export default Totalorderprice;
