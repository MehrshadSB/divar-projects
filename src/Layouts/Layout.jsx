import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}>{chi-ldren}</div>
      <Footer />
    </>
  );
}

export default Layout;
