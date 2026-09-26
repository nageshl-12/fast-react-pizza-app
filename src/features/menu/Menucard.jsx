import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../services/helperFunctions";
import { addItem, getCurrentCartItem } from "../cart/cartReducer";
import Button from "../ui/components/Button";
import DeleteButton from "../ui/components/DeleteButton";
import CartQuantity from "../cart/CartQuantity";

function Menucard({ pizza }) {
  const { id, name, unitPrice, soldOut, ingredients, imageUrl } = pizza;
  const isCart = useSelector(getCurrentCartItem(id));
  const dispatch = useDispatch();
  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      ingredients,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div
      className={`flex ${soldOut ? "grayscale" : ""} px-1 py-1 items-center`}
    >
      <div className="flex gap-2 grow min-w-0">
        <img className="h-25 shrink-0" src={imageUrl} alt={name} />

        <div className="flex justify-between flex-col min-w-0">
          <span>
            <h1 className="font-semibold">{name}</h1>
            <p className="italic text-xs truncate">{ingredients.join(", ")}</p>
          </span>

          <span>
            {soldOut ? (
              <p className="text-sm italic">Soldout</p>
            ) : (
              formatCurrency(unitPrice)
            )}
          </span>
        </div>
      </div>

      <div className="shrink-0 flex flex-col  justify-between ml-2">
        {!soldOut &&
          (isCart ? (
            <div className="flex gap-2 flex-col sm:gap-4 md:gap-6 lg:gap-8 sm:flex-row md:flex-row lg:flex-row">
              <CartQuantity pizzaId={id} />
              <DeleteButton id={id} />
            </div>
          ) : (
            <Button onClick={handleAddItem} type="small">
              Add to cart
            </Button>
          ))}
      </div>
    </div>
  );
}

export default Menucard;
