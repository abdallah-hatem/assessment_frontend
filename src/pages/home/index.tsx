import { useSelector, useDispatch } from "react-redux";
import { logIn, logout } from "../../features/user/userSlice";
import ButtonComp from "../../components/buttonComp";

export default function Home() {
  const user = useSelector((state: any) => state.user.loggedIn);

  const dispatch = useDispatch();
  return (
    <>
      <div>Home Page</div>
      <ButtonComp onClick={() => dispatch(logIn())} title="Login" />
      <ButtonComp
        style={{ marginLeft: 20, backgroundColor: "red" }}
        onClick={() => dispatch(logout())}
        title="Logout"
      />
      <p>{user ? "Logged In" : "Logged out"}</p>
    </>
  );
}
