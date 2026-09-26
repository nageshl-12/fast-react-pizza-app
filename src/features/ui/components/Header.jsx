import { Link } from "react-router-dom";

function Header() {
  return (
    <Link className="text-sm sm:text-lg" to={"/"}>
      FAST REACT PIZZA CO.
    </Link>
  );
}

export default Header;
