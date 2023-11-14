import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { logout } from "../store/reducers/userReducers";
import { useNavigate } from "react-router-dom";

export const useAuthHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token =
    useSelector((state: RootState) => state.user.accessToken) ||
    localStorage.getItem("token");

  const userId =
    useSelector((state: RootState) => state.user.userId) ||
    localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(logout());
    navigate("/login");
  };
  return { token, userId, handleLogout };
};
