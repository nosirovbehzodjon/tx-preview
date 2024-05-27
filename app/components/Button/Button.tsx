import styles from "@/app/components/Button/Button.module.scss";
import cn from "classnames";
import React, { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export const Button = (props: ButtonProps) => {
  const { children, size = "lg", className, ...other } = props;

  return (
    <button className={cn(styles.button, styles[size], className)} {...other}>
      {children}
    </button>
  );
};
