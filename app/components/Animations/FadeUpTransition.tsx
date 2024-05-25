import {
  BaseTransition,
  BaseTransitionProps,
} from "@/app/components/Animations/BaseTransition";
import styles from "@/app/components/Animations/FadeUpTransition.module.scss";

// ----------------------------------------------------------------

type FadeUpTransitionProps = Omit<BaseTransitionProps, "classNames">;

// ----------------------------------------------------------------

export const FadeUpTransition = (props: FadeUpTransitionProps) => {
  const { children, ...rest } = props;

  return (
    <BaseTransition
      classNames={{
        enter: styles.fadeUpEnter,
        enterActive: styles.fadeUpEnterActive,
        exit: styles.fadeUpExit,
        exitActive: styles.fadeUpExitActive,
      }}
      {...rest}
    >
      {children}
    </BaseTransition>
  );
};
