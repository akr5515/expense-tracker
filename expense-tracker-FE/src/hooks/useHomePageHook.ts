import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/callApiUtil";

interface TotalAmountResponse {
  budgets: number;
  expenses: number;
  assets: number;
  debts: number;
}

export const useHomePageHook = () => {
  const [totalAmountData, setTotalAmountData] = useState<TotalAmountResponse>();

  const userId = useSelector((state: RootState) => state.user.userId);

  useEffect(() => {
    axiosInstance.get(`user/get-total/${userId}`).then((res) => {
      setTotalAmountData(res.data);
    });
  }, []);

  return { totalAmountData };
};

export default useHomePageHook;
