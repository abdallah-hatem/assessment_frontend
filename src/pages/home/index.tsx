import { useSelector, useDispatch } from "react-redux";
import { logIn, logout } from "../../features/user/userSlice";

export default function Home() {
  const user = useSelector((state: any) => state.user.loggedIn);

  const dispatch = useDispatch();
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <p>{user ? "Logged In" : "Logged out"}</p>
    </>
  );
}
