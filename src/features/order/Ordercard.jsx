import { formatCurrency } from "../services/helperFunctions";

function Ordercard({ pizza, ingredients, isLoading }) {
  return (
    <div className="flex justify-between items-center mt-4 border-b ">
      <span className="flex gap-2 items-center">
        <h1 className="font-semibold">{pizza.quantity}x</h1>
        <span>
          <h1 className="font-semibold">{pizza.name}</h1>
          <p className="italic text-sm text-stone-600">
            {isLoading ? "Loding ingredients..." : ingredients?.join(", ")}
          </p>
        </span>
      </span>
      <span>{formatCurrency(pizza.totalPrice)}</span>
    </div>
  );
}

export default Ordercard;
