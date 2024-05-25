import styles from "@/app/components/Button/Button.module.scss";
import cn from "classnames";
import React, { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button"> & {
  color: "danger" | "orange" | "geekblue";
  children: ReactNode;
};

export const Button = (props: ButtonProps) => {
  const { color, children, className, ...other } = props;

  return (
    <>
      <button
        className={cn(styles.button, styles[color], className)}
        {...other}
      >
        {children}
      </button>
    </>
  );
};
