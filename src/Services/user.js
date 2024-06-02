import api from "src/configs/api";

const getProfile = () =>
  api.get("user/whoami").then((res) => res || false);

export default getProfile;
