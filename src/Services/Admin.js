import api from "src/configs/api";

const addCategory = (data) => api.post("category", data);

const getCategory = () => api.get("category");

const getACategory = (id) => api.get(`category/${id}`);

const deleteCategory = (id) =>
  api.delete(`category/${id}`, id);

export {
  addCategory,
  getCategory,
  deleteCategory,
  getACategory,
};
