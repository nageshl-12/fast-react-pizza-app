import { useSelector } from "react-redux";

function Username() {
  const userName = useSelector((state) => state.user.username);
  if (!userName) return null;
  return <p className="md:block hidden uppercase text-stone-800">{userName}</p>;
}

export default Username;
