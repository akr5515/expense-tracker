export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getDate(); // Get the day (1-31)
  const month = date.getMonth() + 1; // Get the month (0-11) and add 1 to match the actual month (1-12)
  const year = date.getFullYear(); // Get the year (four digits)

  return `${day}-${month}-${year}`;
};
