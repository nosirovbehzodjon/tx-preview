"use client";

import { useEffect } from "react";

interface IScrollCheck {
  isOpen: boolean;
}
export const useScrollCheck = (config: IScrollCheck) => {
  const { isOpen } = config;
  useEffect(() => {
    if (isOpen) {
      const { overflow: initialOverflow, paddingRight: initialPaddingRight } =
        window.getComputedStyle(document.body);

      document.body.style.overflow = "unset";
      const widthDifference = window.innerWidth - document.body.clientWidth;
      document.body.style.overflow = "hidden";

      if (widthDifference > 0) {
        document.body.style.paddingRight = widthDifference + "px";
      }

      return () => {
        document.body.style.overflow = "unset";
        if (widthDifference > 0) {
          document.body.style.paddingRight = initialPaddingRight;
        }
      };
    }
  }, [isOpen]);
};
