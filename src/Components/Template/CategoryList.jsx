import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  deleteCategory,
  getCategory,
} from "src/Services/Admin";
import Loader from "../modules/Loader";

import styles from "src/Components/Template/categoryList.module.css";

function CategoryList() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    ["category"],
    getCategory
  );
  console.log(data);

  const { mutate, error } = useMutation(deleteCategory, {
    onSuccess: () => queryClient.invalidateQueries(),
  });

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} />
            <h5>{i.name}</h5>
            <p> slug: {i.slug}</p>
            <span
              onClick={() => {
                mutate(i._id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
              </svg>
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
