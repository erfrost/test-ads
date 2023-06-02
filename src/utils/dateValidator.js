export const dateValidator = (date) => {
  const newDate = new Date(date?.replace(" ", ""));
  const day = newDate.getDate().toString().padStart(2, "0");
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  const year = newDate.getFullYear().toString();
  const hours = newDate.getHours().toString().padStart(2, "0");
  const minutes = newDate.getMinutes().toString().padStart(2, "0");
  const formattedDate = `${day}.${month}.${year}, ${hours}.${minutes}`;
  return formattedDate;
};
