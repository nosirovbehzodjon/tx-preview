import { MobileMenu } from "@/app/components/MobileMenu/MobileMenu";
import React, { ReactNode, isValidElement, useRef } from "react";
import { CSSTransition } from "react-transition-group";

// ----------------------------------------------------------------

export type BaseTransitionProps = {
  key?: string;
  inProp: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  timeout?: number;
  classNames: {
    enter: string;
    enterActive: string;
    exit: string;
    exitActive: string;
  };
  children: ReactNode;
};

// ----------------------------------------------------------------

export const BaseTransition = (props: BaseTransitionProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const {
    inProp,
    key,
    mountOnEnter = true,
    unmountOnExit = true,
    timeout = 200,
    classNames,
    children,
  } = props;

  children;
  return (
    <CSSTransition
      key={key}
      in={inProp}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      timeout={timeout}
      classNames={classNames}
      nodeRef={nodeRef}
    >
      <React.Fragment>
        {React.Children.map(children, (child: ReactNode) => {
          if (isValidElement(child)) {
            const mewChild = React.cloneElement(child, {
              ...child.props,
              ref: nodeRef,
            });
            return mewChild;
          }
        })}
      </React.Fragment>
    </CSSTransition>
  );
};
