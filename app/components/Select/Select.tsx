import styles from "@/app/components/Select/Select.module.scss";
import cn from "classnames";
import React, { ComponentProps, ReactNode, forwardRef } from "react";

interface ISelectProps extends ComponentProps<"select"> {
  message?: string;
  icon: ReactNode;
  placeholder: string;
  options: Array<{ label: string; value: string }>;
}

export const Select = forwardRef(
  (props: ISelectProps, ref: React.Ref<HTMLSelectElement>) => {
    const { message, icon, className, placeholder, options, ...other } = props;
    return (
      <div className={cn(styles.selectContainer, className)}>
        <div className={styles.iconSelectContainer}>
          <select className={styles.select} {...other} ref={ref}>
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options.map((item) => {
              return (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
          <span className={styles.icon}>{icon}</span>
        </div>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    );
  }
);
