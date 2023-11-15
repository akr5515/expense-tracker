import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import axiosInstance from "../utils/callApiUtil";
import { setNotification } from "../store/reducers/notificationReducer";
import { useNavigate } from "react-router-dom";
import { login } from "../store/reducers/userReducers";

interface LoginPayload {
  username: string;
  password: string;
}

interface RegisterPayload {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

const useUserHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.user.userId);

  const handleLogin = (data: LoginPayload) => {
    axiosInstance
      .post("/auth/login", {
        email: data.username,
        password: data.password,
      })
      .then((res) => {
        dispatch(login(res.data));
        dispatch(setNotification({ message: "Logged In", isOpen: true }));

        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userId", res.data.userId);
        navigate("/");
      })
      .catch((err) => {
        dispatch(
          setNotification({
            message: "Provide valid credentials",
            isOpen: true,
          })
        );
      });
  };

  const handleRegister = (data: RegisterPayload) => {
    axiosInstance
      .post("/user/register", {
        email: data.email,
        password: data.password,
        firstName: data.firstName ? data.firstName : "",
        lastName: data.lastName ? data.lastName : "",
      })
      .then((res) => {
        dispatch(
          setNotification({
            message: "Successfully Registered. Please login now.",
            isOpen: true,
          })
        );

        navigate("/login");
      })
      .catch((err) => {
        dispatch(
          setNotification({
            message: "Provide valid credentials",
            isOpen: true,
          })
        );
      });
  };

  return { handleLogin, handleRegister };
};

export default useUserHook;
