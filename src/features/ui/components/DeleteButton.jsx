import { useDispatch } from "react-redux";
import { deleteItem } from "../../cart/cartReducer";

function DeleteButton({ id }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(deleteItem(id))}
      className="hover:bg-red-400 px-2 py-1 text-white text-xs rounded-full focus:ring-red-300 transition-all duration-300 bg-red-500 uppercase font-normal focus:outline-none focus:ring focus:ring-offset-2"
    >
      Remove
    </button>
  );
}

export default DeleteButton;
