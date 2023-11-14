import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import axiosInstance from "../utils/callApiUtil";
import { setNotification } from "../store/reducers/notificationReducer";
import { useNavigate } from "react-router-dom";

interface AddDebtPayload {
  label: string;
  amount: string;
}

export const useDebtHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.user.userId);

  const handleAddDebt = (data: AddDebtPayload) => {
    const payload = {
      ...data,
      userId,
    };
    axiosInstance
      .post("/expense/debt", payload)
      .then((res) => {
        dispatch(setNotification({ message: "Added Debt", isOpen: true }));

        navigate("/");
      })
      .catch((err) => {
        dispatch(setNotification({ message: "Error", isOpen: true }));
      });
  };

  return { handleAddDebt };
};
