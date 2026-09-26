import { useLoaderData } from "react-router-dom";
import Menucard from "../../menu/Menucard";

function Menu() {
  const pizzas = useLoaderData();

  return (
    <div className="divide-y divide-stone-300 border-b mt-2">
      {pizzas.map((pizza) => (
        <Menucard pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
}

export default Menu;
