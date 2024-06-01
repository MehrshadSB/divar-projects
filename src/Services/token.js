import api from "src/configs/api";
import { getCookies } from "src/utils/Cookies";

const getNewToken = async () => {
  const refreshToken = getCookies("refreshToken");
  if (!refreshToken) return;

  try {
    const response = await api.post(
      "auth/check-refresh-token",
      { refreshToken }
    );
    return { response };

  } catch (error) {
    return { error };
  }
};

export { getNewToken };
