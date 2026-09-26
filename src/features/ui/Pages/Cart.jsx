import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../../cart/cartReducer";
import Emptycart from "../../cart/Emptycart";
import Cartitems from "../../cart/Cartitems";

function Cart() {
  const isCart = useSelector(getTotalCartQuantity);
  return (
    <div className="scale-90 ">{isCart ? <Cartitems /> : <Emptycart />}</div>
  );
}

export default Cart;
