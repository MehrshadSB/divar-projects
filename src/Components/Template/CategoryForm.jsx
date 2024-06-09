import React, { useState } from "react";

import styles from "Components/Template/categoryForm.module.css";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { addCategory } from "src/Services/Admin";

function CategoryForm() {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const { mutate, isLoading, error, data } = useMutation(
    addCategory,
    {
      onSuccess: () =>
        queryClient.invalidateQueries("category"),
    }
  );

  const changeHanlder = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;

    mutate(form);
  };
  return (
    <form
      onChange={changeHanlder}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">ایکون</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit">تایید</button>
    </form>
  );
}

export default CategoryForm;
