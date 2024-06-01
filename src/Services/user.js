import api from "src/configs/api";

const getProfile = () => api.get("user/whoami");

export default getProfile;
