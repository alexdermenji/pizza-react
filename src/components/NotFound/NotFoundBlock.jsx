import React from "react";
import styles from "./styles.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>This page not exists!</p>
    </div>
  );
}

export default NotFoundBlock;
