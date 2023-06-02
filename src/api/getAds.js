import axios from "axios";

export const getAds = async (pageCount, size) => {
  const response = await axios.get(
    `https://testguru.ru/frontend-test/api/v1/items?page=${pageCount}&size=${
      size ? size : 20
    }`
  );
  return response;
};
