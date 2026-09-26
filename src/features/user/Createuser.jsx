import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../user/userReducer";
import Button from "../ui/components/Button";
import { useEffect, useRef, useState } from "react";
function Createuser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef(null);

  function handleSubmit(e) {
    if (!username) return;
    e.preventDefault();
    dispatch(updateUser(username));
    setUsername("");
    navigate("/menu");
  }
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div>
      <p className="text-center text-stone-500 text-[12px] sm:text-lg">
        😇 Welcome! Please start by telling us your name:
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={ref}
          type="text"
          className="rounded-full mt-3 border border-yellow-400 px-6 py-2 text-stone-800 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />

        {username && (
          <Button onClick={handleSubmit} type="normal" to="/menu">
            Start Ordering
          </Button>
        )}
      </form>
    </div>
  );
}

export default Createuser;
