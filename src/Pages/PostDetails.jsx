import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { postDetailsData } from "src/Services/user";

import styles from "./postDetails.module.css";
import { getCategory } from "src/Services/Admin";
import Loader from "src/Components/modules/Loader";

function PostDetails() {
  const { id } = useParams();

  const { refetch, data, isLoading, error } = useQuery(
    ["post"],
    () => postDetailsData(id)
  );

  const { data: category } = useQuery(
    ["category"],
    getCategory
  );

  useEffect(() => {
    refetch();
  }, [id]);

  if (isLoading) <Loader />;

  const post = data?.data.post;

  const selectedCategory = category?.data.find(
    (data) => data._id === post?.category
  );

  return (
    <div className={styles.container}>
      {data ? (
        <>
          <div className={styles.image}>
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                post?.images
              }`}
              alt=""
            />
          </div>
          <div className={styles.text}>
            <h1>{post?.options.title}</h1>
            <div
              style={{
                borderBottom:
                  "1px solid rgba(0, 0, 0, 0.22)",
              }}
            >
              <span>شهر :</span>
              <span>{post?.options.city}</span>
            </div>
            <div
              style={{
                borderBottom:
                  "1px solid rgba(0, 0, 0, 0.22)",
              }}
            >
              <span>دسته بندی :</span>
              <span>{selectedCategory?.name}</span>
            </div>
            <div className={styles.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eum nam quod culpa dolores
                nihil? Minus in ratione est tempore
                praesentium ad inventore vero eveniet
                accusantium non, facilis, consectetur eos
                exercitationem.
              </p>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default PostDetails;
