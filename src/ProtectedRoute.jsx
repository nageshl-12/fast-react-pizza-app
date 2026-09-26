import { useSelector } from "react-redux";
import Errorpage from "./features/ui/Pages/Errorpage";

function ProtectedRoute({ children }) {
  const username = useSelector((state) => state.user.username);
  return <>{username ? children : <Errorpage />}</>;
}

export default ProtectedRoute;
