import { useSelector } from "react-redux";

import Cartcard from "./Cartcard";
import Button from "../ui/components/Button";
import ClearCart from "./ClearCart";
import Totalprice from "../ui/components/Totalprice";
import Linkbutton from "../ui/components/Linkbutton";
function Cartitems() {
  const cartItems = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);

  return (
    <div className="space-y-2 mx-2 ">
      <Linkbutton to="/menu">Back to menu</Linkbutton>
      <h1 className="mt-5 text-lg font-semibold">
        Your cart,{username}
        {cartItems.length}
      </h1>
      <div className="divide-y divide-stone-400 space-y-4 mt-10 border-b overflow-x-hidden overflow-y-auto max-h-[40vh]">
        {cartItems.map((pizza) => (
          <Cartcard pizza={pizza} key={pizza.pizzaId} />
        ))}
      </div>
      <Totalprice />
      <div className="mt-10 flex gap-3">
        <Button to={`/order/new`} type="normal">
          Order
        </Button>
        <ClearCart />
      </div>
    </div>
  );
}

export default Cartitems;
