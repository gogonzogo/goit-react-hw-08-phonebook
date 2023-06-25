import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className="UserMenu">
      <h1>{user.email}</h1>
      <button type="button" onClick={handleClick} className="UserMenu__btn">Logout</button>
    </div>
  );
}

export default UserMenu;