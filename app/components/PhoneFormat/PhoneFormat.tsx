import styles from "@/app/components/input/input.module.scss";
import cn from "classnames";
import React, { ReactNode, forwardRef } from "react";
import { PatternFormatProps, PatternFormat } from "react-number-format";

interface PatternFormatPropsType extends PatternFormatProps {
  message?: string;
  icon: ReactNode;
}

export const PhoneFormat = forwardRef(
  (props: PatternFormatPropsType, ref: React.Ref<HTMLInputElement>) => {
    const { message, icon, className, ...other } = props;
    return (
      <div className={cn(styles.inputContainer, className)}>
        <div className={styles.iconInputContainer}>
          <span className={styles.icon}>{icon}</span>
          <PatternFormat
            className={styles.input}
            {...other}
            getInputRef={ref}
          />
        </div>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    );
  }
);
