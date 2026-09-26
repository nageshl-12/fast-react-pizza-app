import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartValue } from "./cartReducer";
import { useSelector } from "react-redux";
import { formatCurrency } from "../services/helperFunctions";

function CartPreview() {
  const cartValue = useSelector(getTotalCartValue);
  const cartQuantity = useSelector(getTotalCartQuantity);
  if (!cartQuantity) return null;

  return (
    <div className="bg-stone-800 text-stone-200 flex justify-between items-center px-3 sm:py-3">
      <span className="uppercase sm:flex gap-2">
        <p>{cartQuantity} Pizzas</p>
        <p>{formatCurrency(cartValue)}</p>
      </span>
      <Link className="uppercase flex gap-1 items-center" to={"/cart"}>
        Open Cart <ArrowRight size={19} />
      </Link>
    </div>
  );
}

export default CartPreview;
