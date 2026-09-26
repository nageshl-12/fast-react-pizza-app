import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Linkbutton({ children, to }) {
  return (
    <Link to={to} className="text-blue-500 flex gap-1 items-center">
      <ArrowLeft size={13} />
      {children}
    </Link>
  );
}

export default Linkbutton;
