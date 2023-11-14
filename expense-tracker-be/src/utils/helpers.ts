export const calculateSum = (obj) => {
  return obj.reduce((sum, budget) => sum + parseInt(budget.amount), 0);
};
