import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import axiosInstance from "../utils/callApiUtil";
import { setNotification } from "../store/reducers/notificationReducer";
import { useNavigate } from "react-router-dom";

interface AddAssetPayload {
  label: string;
  amount: string;
}

export const useAssetHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.user.userId);

  const handleAddAsset = (data: AddAssetPayload) => {
    const payload = {
      ...data,
      userId,
    };
    axiosInstance
      .post("/expense/asset", payload)
      .then((res) => {
        dispatch(setNotification({ message: "Added Asset", isOpen: true }));

        navigate("/");
      })
      .catch((err) => {
        dispatch(setNotification({ message: "Error", isOpen: true }));
      });
  };

  return { handleAddAsset };
};
