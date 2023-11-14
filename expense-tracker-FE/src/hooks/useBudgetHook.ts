import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import axiosInstance from "../utils/callApiUtil";
import { setNotification } from "../store/reducers/notificationReducer";
import { useNavigate } from "react-router-dom";

interface AddBudgetPayload {
  label: string;
  amount: string;
}

export const useBudgetHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.user.userId);

  const handleAddBudget = (data: AddBudgetPayload) => {
    const payload = {
      ...data,
      userId,
    };
    axiosInstance
      .post("/expense/budget", payload)
      .then((res) => {
        dispatch(setNotification({ message: "Added Budget", isOpen: true }));

        navigate("/");
      })
      .catch((err) => {
        dispatch(setNotification({ message: "Error", isOpen: true }));
      });
  };

  return { handleAddBudget };
};
