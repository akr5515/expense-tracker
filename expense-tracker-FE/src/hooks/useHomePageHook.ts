import { useEffect, useState } from "react";
import axiosInstance from "../utils/callApiUtil";
import { useAuthHook } from "./useAuthHook";

interface TotalAmountResponse {
  budgets: number;
  expenses: number;
  assets: number;
  debts: number;
}
export interface UserTransaction {
  id: string;
  label: string;
  amount: string;
  userId: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export const useHomePageHook = () => {
  const [totalAmountData, setTotalAmountData] = useState<TotalAmountResponse>();
  const [transactionListData, setTransactionListData] = useState<
    UserTransaction[]
  >([]);

  const { userId } = useAuthHook();

  const getTotalAmount = () => {
    axiosInstance.get(`user/get-total/${userId}`).then((res) => {
      setTotalAmountData(res.data);
    });
  };

  const getTransactionList = () => {
    axiosInstance.get(`user/transaction-list/${userId}`).then((res) => {
      setTransactionListData(res.data);
    });
  };

  useEffect(() => {
    getTotalAmount();
    getTransactionList();
  }, []);

  return { totalAmountData, transactionListData };
};

export default useHomePageHook;
