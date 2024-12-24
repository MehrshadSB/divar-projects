import api from "src/configs/api";

const getProfile = () =>
  api.get("user/whoami").then((res) => res || false);

const deletePosts = (id) => api.delete(`post/delete/${id}`);

const getPosts = () => api.get("post/my");

const postDetailsData = (id) => api.get(`post/${id}`);

const getAllPosts = () => api.get("");

export { getProfile, getPosts, getAllPosts, deletePosts, postDetailsData };
