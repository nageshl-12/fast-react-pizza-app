import Linkbutton from "../ui/components/Linkbutton";

function Emptycart() {
  return (
    <div>
      <Linkbutton to={"/menu"}>Go back to menu</Linkbutton>
      <p className="text-lg font-semibold mt-5">
        🍕 Your cart is empty! Add some delicious pizzas to get started.
      </p>
    </div>
  );
}

export default Emptycart;
