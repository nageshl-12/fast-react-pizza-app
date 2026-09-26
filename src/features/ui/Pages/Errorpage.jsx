import LinkButton from "../components/Linkbutton";
import { useRouteError } from "react-router-dom";
function Errorpage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <LinkButton to="/">back to home</LinkButton>

      <p className="my-3 mx-2">{error?.data || error?.message}</p>
    </div>
  );
}

export default Errorpage;
