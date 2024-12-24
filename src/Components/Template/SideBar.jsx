import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/Services/Admin";

import styles from "./sideBar.module.css";

function SideBar() {
  const { data } = useQuery(["category"], getCategory);
  console.log(data);

  return (
    <div className={styles.sideBar}>
      <h1>دسته بندی ها</h1>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
