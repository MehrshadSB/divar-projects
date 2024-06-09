import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/auth">
          <span>
            <img src="profile.svg" alt="profile" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard" className={styles.button}>
          ثبت اگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
