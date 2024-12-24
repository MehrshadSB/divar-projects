import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import React from "react";
import {
  deletePosts,
  getAllPosts,
} from "src/Services/user";

import styles from "./Main.module.css";
import { sp } from "src/utils/numbers";
import { Link } from "react-router-dom";

function Main() {
  const { data, isLoading, error } = useQuery(
    ["posts"],
    getAllPosts
  );

  const { mutate } = useMutation(deletePosts, {
    onSuccess: () => queryClient.invalidateQueries(),
  });
  
  // console.log(data ? data : undefined);

  return (
    <div className={styles.container}>
      {data?.data.posts.map((post) => (
        <Link to={`/post/${post._id}`} key={post._id}>
          <div className={styles.card}>
            <div className={styles.info}>
              <p>{post.options?.title}</p>
              <div>
                <p>{sp(post.amount)} تومان</p>
                <span>{post.options?.city}</span>
              </div>
            </div>
            <img
              src={`${import.meta.env.VITE_BASE_URL}${
                post.images[0]
              }`}
            />
            {/* <button onClick={() => mutate(post._id)}>
            Delete
          </button> */}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Main;
