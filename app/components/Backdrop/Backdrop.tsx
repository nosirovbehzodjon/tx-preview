import styles from "@/app/components/Backdrop/Backdrop.module.scss";
import cn from "classnames";
import { forwardRef } from "react";

interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const Backdrop = forwardRef(
  (props: BackdropProps, ref: React.Ref<HTMLDivElement>) => {
    const { className, isOpen, ...rest } = props;

    return (
      <div
        className={cn(
          styles["offcanvas-backdrop"],
          isOpen ? styles["show"] : styles["fade"],
          className
        )}
        {...rest}
        ref={ref}
      ></div>
    );
  }
);
