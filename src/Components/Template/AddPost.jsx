import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/Services/Admin";

import style from "src/Components/Template/addPost.module.css";
import { useState } from "react";
import axios from "axios";
import { getCookies } from "src/utils/Cookies";
import toast from "react-hot-toast";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    city: "",
    category: "",
    amount: null,
    image: null,
  });

  const { data } = useQuery(["category"], getCategory);
  console.log(data);

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookies("accessToken");

    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}post/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) =>
        toast.success("آگهی با موفقیت ایجاد شد.")
      )
      .catch((error) => toast.error("مشکلی پیش امده است."));
  };

  return (
    <form className={style.form} onChange={changeHandler}>
      <h3>ثبت آگهی</h3>
      <label htmlFor="title">عنوان :</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات :</label>
      <textarea name="content" id="content" />
      <label htmlFor="amount">قیمت :</label>
      <input type="number" name="amount" id="amount" />
      <label htmlFor="city">شهر :</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="city">دسته بندی :</label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="file">عکس :</label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
}

export default AddPost;
