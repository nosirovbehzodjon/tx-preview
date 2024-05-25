import {
  BaseTransition,
  BaseTransitionProps,
} from "@/app/components/Animations/BaseTransition";
import styles from "@/app/components/Animations/SlideTransition.module.scss";

// ----------------------------------------------------------------

type SlideTransitionProps = Omit<
  BaseTransitionProps,
  "classNames" | "timeout"
> & {
  side?: "left" | "right";
};

// ----------------------------------------------------------------

export const SlideTransition = (props: SlideTransitionProps) => {
  const { children, side = "left", ...rest } = props;

  const className =
    side === "left"
      ? {
          enter: styles.slideEnter,
          enterActive: styles.slideEnterActive,
          exit: styles.slideExit,
          exitActive: styles.slideExitActive,
        }
      : {
          enter: styles.slideRightEnter,
          enterActive: styles.slideRightEnterActive,
          exit: styles.slideRightExit,
          exitActive: styles.slideRightExitActive,
        };

  return (
    <BaseTransition timeout={500} classNames={className} {...rest}>
      {children}
    </BaseTransition>
  );
};
