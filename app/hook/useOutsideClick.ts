import React, { RefObject } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement> | null,
  callback: () => void
) => {
  const handleClick = (e: Event) => {
    if (!ref) {
      return;
    }
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  React.useEffect(() => {
    if (!ref) {
      return;
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
