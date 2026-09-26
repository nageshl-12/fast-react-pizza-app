import {
  decreaseItemQuantity,
  getCurrentCartItemQuantity,
  increaseItemQuantity,
} from "./cartReducer";
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/components/Button";

function CartQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentCartItemQuantity(pizzaId));
  return (
    <div className="flex gap-2 items-center font-semibold">
      <Button
        type="rounde"
        className="cursor-pointer"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <p className="font-bold">{quantity}</p>
      <Button
        type="rounde"
        className="cursor-pointer"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default CartQuantity;
