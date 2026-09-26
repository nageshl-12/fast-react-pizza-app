import { clearItem } from "./cartReducer";
import { useDispatch } from "react-redux";
function ClearCart() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(clearItem())}
      className=" py-2 px-5 text-stone-500 font-semibold hover:bg-stone-200 cursor-pointer rounded-full focus:ring-stone-200 transition-all duration-300 bg-stone-200/50 uppercase  text-sm focus:outline-none focus:ring focus:ring-offset-2"
    >
      Clear cart
    </button>
  );
}

export default ClearCart;
