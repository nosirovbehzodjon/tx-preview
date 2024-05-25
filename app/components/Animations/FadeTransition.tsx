import {
  BaseTransition,
  BaseTransitionProps,
} from "@/app/components/Animations/BaseTransition";
import styles from "@/app/components/Animations/FadeTransition.module.scss";

// ----------------------------------------------------------------

type FadeTransitionProps = Omit<BaseTransitionProps, "classNames">;

// ----------------------------------------------------------------

export const FadeTransition = (props: FadeTransitionProps) => {
  const { children, ...rest } = props;

  return (
    <BaseTransition
      classNames={{
        enter: styles.fadeEnter,
        enterActive: styles.fadeEnterActive,
        exit: styles.fadeExit,
        exitActive: styles.fadeExitActive,
      }}
      {...rest}
    >
      {children}
    </BaseTransition>
  );
};
