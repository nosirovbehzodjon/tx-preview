import { Button } from "@/app/components/Button";
import styles from "@/app/styles/NotFound.module.scss";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link href="/">
        <Button color="geekblue">Go back to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
