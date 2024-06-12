import { forwardRef } from "react";
import { GroupBase, Props, SelectInstance } from "react-select";
import Select from "react-select";
import styles from "@/app/components/Input/Input.module.scss";
import { useSelectStyles } from "@/app/components/Select/useStyles";

interface IReactSelectProps extends Props {
  message?: string;
}

export const ReactSelect = forwardRef<
  SelectInstance<unknown, boolean, GroupBase<unknown>>,
  IReactSelectProps
>((props, ref) => {
  const { isMulti = false, options, message, placeholder, ...rest } = props;
  const { style } = useSelectStyles();

  return (
    <div className={styles.inputContainer}>
      <Select
        options={options}
        styles={style}
        placeholder={placeholder}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "rgba(12, 131, 255, 0.1)",
            primary50: "rgba(12, 131, 255, 0.1)",
            primary: "#3f4044",
          },
        })}
        isMulti={isMulti}
        ref={ref}
        {...rest}
      />
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
});

ReactSelect.displayName = "ReactSelect";
