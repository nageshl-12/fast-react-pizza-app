import { useSelector } from "react-redux";
import Button from "../ui/components/Button";

function UserBanner() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="space-y-6 items-center flex flex-col">
      <Button type="normal" to="/menu">
        Continue ordereing, {username}
      </Button>
    </div>
  );
}

export default UserBanner;
