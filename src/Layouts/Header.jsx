import React from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "src/Components/Template/DropDownMenu";
import styles from "src/Layouts/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" alt="location" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <DropDownMenu />

        <Link to="/dashboard" className={styles.button}>
          ثبت اگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
