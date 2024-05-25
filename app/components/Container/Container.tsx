import styles from "@/app/components/Container/Container.module.scss";
import React, { ComponentProps } from "react";

interface ContainerProps extends ComponentProps<"div"> {}

export const Container = (props: ContainerProps) => {
  const { children, ...other } = props;
  return (
    <div className={styles.container} {...other}>
      {children}
    </div>
  );
};
