import { useDispatch } from "react-redux";
import axiosInstance from "../utils/callApiUtil";
import { setNotification } from "../store/reducers/notificationReducer";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useAuthHook } from "./useAuthHook";

export interface AddBudgetPayload {
  label: string;
  amount: string;
}

export interface MonthlyBudgetData {
  dayList: number[];
  sumList: number[];
}

export const useBudgetHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useAuthHook();
  const [monthlyBudgetData, setMonthlyBudgetData] = useState<MonthlyBudgetData>(
    { dayList: [], sumList: [] }
  );
  const [monthlyBudgetList, setMonthlyBudgetList] = useState([]);

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

  const getMonthlyBudgetData = useCallback(() => {
    axiosInstance.get(`expense/budget-monthly/${userId}`).then((res) => {
      setMonthlyBudgetData(res.data);
    });
  }, [userId]);

  const getMonthlyBudgetList = useCallback(() => {
    axiosInstance.get(`user/budget-list/${userId}`).then((res) => {
      setMonthlyBudgetList(res.data);
    });
  }, [userId]);

  useEffect(() => {
    getMonthlyBudgetData();
    getMonthlyBudgetList();
  }, [getMonthlyBudgetData, getMonthlyBudgetList]);

  return {
    handleAddBudget,
    getMonthlyBudgetData,
    monthlyBudgetData,
    monthlyBudgetList,
  };
};
