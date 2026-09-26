import { useSelector } from "react-redux";
import Createuser from "../../user/Createuser";
import UserBanner from "../../user/UserBanner";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex flex-col items-center gap-6 ">
      <div className="mt-10 text-center text-2xl font-semibold">
        <h1>The best pizza.</h1>
        <h1 className="text-yellow-500">
          Straight out of oven, straight to you.
        </h1>
      </div>
      {!username ? <Createuser /> : <UserBanner />}
    </div>
  );
}
export default Home;
