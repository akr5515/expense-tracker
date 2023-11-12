import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useAuthHook = () => {
  const token =
    useSelector((state: RootState) => state.user.access_token) ||
    localStorage.getItem("token");

  return { token };
};
