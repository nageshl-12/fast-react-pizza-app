import DeleteButton from "../ui/components/DeleteButton";
import { formatCurrency } from "../services/helperFunctions";

import CartQuantity from "./CartQuantity";
function Cartcard({ pizza }) {
  const { totalPrice, quantity, name, pizzaId } = pizza;

  return (
    <div className="flex justify-between py-2 items-center gap-2">
      <div className="flex flex-col gap-2 md:justify-between lg:justify-between sm:justify-between shrink-0 grow   sm:flex-row md:flex-row lg:flex-row">
        <span className="flex gap-2">
          <p>{quantity}x</p>
          <p>{name}</p>
        </span>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>

      <span className="flex gap-2 shrink-0">
        <CartQuantity pizzaId={pizzaId} />
        <DeleteButton id={pizzaId} />
      </span>
    </div>
  );
}

export default Cartcard;
