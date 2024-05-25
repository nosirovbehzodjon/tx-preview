import { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

// ----------------------------------------------------------------

type PortalProps = {
  children: ReactNode;
};

// ----------------------------------------------------------------

export const Portal = (props: PortalProps) => {
  const { children } = props;

  const portalRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    portalRef.current = document.getElementById("portal");
    setIsMounted(true);
  }, []);

  return isMounted && portalRef.current
    ? ReactDOM.createPortal(children, portalRef.current)
    : null;
};
