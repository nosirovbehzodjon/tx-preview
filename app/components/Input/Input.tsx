import styles from "@/app/components/Input/Input.module.scss";
import cn from "classnames";
import React, { ComponentProps, ReactNode, forwardRef } from "react";

interface IInputProps extends ComponentProps<"input"> {
  message?: string;
  icon: ReactNode;
}

export const Input = forwardRef(
  (props: IInputProps, ref: React.Ref<HTMLInputElement>) => {
    const { message, icon, className, ...other } = props;
    return (
      <div className={cn(styles.inputContainer, className)}>
        <div className={styles.iconInputContainer}>
          <span className={styles.icon}>{icon}</span>
          <input className={styles.input} {...other} ref={ref} />
        </div>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    );
  }
);
