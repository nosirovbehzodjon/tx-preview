import { useMemo } from "react";
import { GroupBase, StylesConfig } from "react-select";

export const useSelectStyles = () => {
  const style: StylesConfig<unknown, boolean, GroupBase<unknown>> | undefined =
    useMemo(() => {
      return {
        control: (base, state) => ({
          ...base,
          backgroundColor: "#ffffff0d",
          borderRadius: "0.375rem",
          minWidth: "280px",
          width: "100%",
          padding: "6px 0px",
          border: state.isFocused
            ? "1px solid #0c83ff"
            : "1px solid  #ffffff1f",
          boxShadow: state.isFocused
            ? " 0 0 0 0.125rem rgba(12, 131, 255, 0.25)"
            : "",
          fontWeight: 500,
          outline: "none",
          opacity: state.isDisabled ? 0.5 : 1,
          ":hover": {
            border: state.isFocused ? "1px solid #0c83ff" : "1px solid #4d4d51",
          },
          borderColor: "red",
        }),
        valueContainer: (base) => ({
          ...base,
          padding: "0rem 0.875rem",
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "#2c2d33",
        }),
        multiValue: (base) => {
          return {
            ...base,
            backgroundColor: "#46474a",
            paddingLeft: "8px",
            fontSize: "16px",
            ":hover": {
              backgroundColor: "#0b76e6",
            },
          };
        },
        multiValueLabel: (base) => ({
          ...base,
          color: "white",
        }),
        multiValueRemove: (base) => ({
          ...base,
          ":hover": {
            backgroundColor: "#0b76e6",
            color: "white",
          },
        }),
        singleValue: (base) => ({
          ...base,
          color: "white",
        }),
        input: (base) => ({
          ...base,
          color: "white",
        }),
      };
    }, []);

  return { style };
};
