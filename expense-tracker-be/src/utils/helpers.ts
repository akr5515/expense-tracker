export const calculateSum = (obj) => {
  return obj.reduce((sum, budget) => sum + parseInt(budget.amount), 0);
};

export const getCurrentMonthYear = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  return { currentMonth, currentYear, totalDaysInMonth };
};
