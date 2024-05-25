import {
  BaseTransition,
  BaseTransitionProps,
} from "@/app/components/Animations/BaseTransition";
import styles from "@/app/components/Animations/BubbleTransition.module.scss";

// ----------------------------------------------------------------

type BubbleTransition = Omit<BaseTransitionProps, "classNames" | "timeout">;

// ----------------------------------------------------------------

export const BubbleTransition = (props: BubbleTransition) => {
  const { children, ...rest } = props;

  const className = {
    enter: styles.slideEnter,
    enterActive: styles.slideEnterActive,
    exit: styles.slideExit,
    exitActive: styles.slideExitActive,
  };

  return (
    <BaseTransition timeout={500} classNames={className} {...rest}>
      {children}
    </BaseTransition>
  );
};
