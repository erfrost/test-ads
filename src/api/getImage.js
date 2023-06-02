import axios from "axios";

export const getImage = async () => {
  const response = await axios.get("https://api.dujin.org/bing/1366.php");
  return response;
};

// api с тз не работает
// минут 40 искал нормальную апишку с изображениями, не нашел, поэтому просто скачал 4 разные картинки
