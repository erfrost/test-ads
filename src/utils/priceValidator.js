export const priceValidator = (price) => {
  const formattedPrice = price?.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
  });
  return formattedPrice;
};
