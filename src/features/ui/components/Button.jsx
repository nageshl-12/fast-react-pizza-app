import { Link } from "react-router-dom";

function Button({ children, to, onClick, type, htmlType }) {
  const base =
    "font-bold hover:bg-yellow-200 rounded-full focus:ring-yellow-500 transition-all duration-300 bg-yellow-300 uppercase font-light text-xs focus:outline-none focus:ring focus:ring-offset-2";
  const sizes = {
    rounde: base + " py-2 px-3 ",

    small:
      "py-1 px-2 font-light cursor-pointer hover:bg-yellow-200 rounded-full focus:ring-yellow-500 transition-all duration-300 bg-yellow-300 uppercase  text-xs focus:outline-none focus:ring focus:ring-offset-2",
    normal:
      " py-2 px-5 font-semibold hover:bg-yellow-200 cursor-pointer rounded-full focus:ring-yellow-500 transition-all duration-300 bg-yellow-300 uppercase  text-sm focus:outline-none focus:ring focus:ring-offset-2",
  };

  if (to)
    return (
      <Link onClick={onClick} to={to} className={sizes[type] + " shrink-0"}>
        {children}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      type={htmlType}
      className={sizes[type] + " shrink-0"}
    >
      {children}
    </button>
  );
}

export default Button;
