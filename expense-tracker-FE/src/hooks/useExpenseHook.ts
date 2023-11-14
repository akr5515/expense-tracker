import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import axiosInstance from "../utils/callApiUtil";
import { setNotification } from "../store/reducers/notificationReducer";
import { useNavigate } from "react-router-dom";

interface AddExpensePayload {
  label: string;
  amount: string;
}

export const useExpenseHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.user.userId);

  const handleAddExpense = (data: AddExpensePayload) => {
    const payload = {
      ...data,
      userId,
    };
    axiosInstance
      .post("/expense", payload)
      .then((res) => {
        dispatch(setNotification({ message: "Added Expense", isOpen: true }));

        navigate("/");
      })
      .catch((err) => {
        dispatch(setNotification({ message: "Error", isOpen: true }));
      });
  };

  return { handleAddExpense };
};
