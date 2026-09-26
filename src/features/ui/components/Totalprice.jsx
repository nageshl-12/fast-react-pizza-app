import {
  getTotalCartQuantity,
  getTotalCartValue,
} from "../../cart/cartReducer";
import { formatCurrency } from "../../services/helperFunctions";
import { useSelector } from "react-redux";
function Totalprice() {
  const cartTotalValue = useSelector(getTotalCartValue);
  const cartTotalQuantity = useSelector(getTotalCartQuantity);
  return (
    <div>
      <span className="flex justify-between">
        <h1>Total Pizzas</h1>
        <h1>{cartTotalQuantity}.Nos</h1>
      </span>
      <span className="flex justify-between">
        <h1>Total Amount</h1>
        <h1>{formatCurrency(cartTotalValue)}</h1>
      </span>
    </div>
  );
}

export default Totalprice;
