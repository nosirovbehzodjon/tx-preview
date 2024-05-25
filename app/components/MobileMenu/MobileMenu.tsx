"use client";

import styles from "@/app/components/MobileMenu/MobileMenu.module.scss";
import { menuList } from "@/app/config/navbar";
import cn from "classnames";
import Image from "next/image";
import React, { forwardRef } from "react";

interface IMobileMenuProps {
  handelClose: () => void;
}

export const MobileMenu = forwardRef(
  (props: IMobileMenuProps, ref: React.Ref<HTMLDivElement>) => {
    const { handelClose } = props;

    return (
      <div ref={ref} className={cn(styles.mobileMenu)}>
        <div className={styles.closeContainer}>
          <span onClick={handelClose}>
            <Image
              src={"/assets/icons/x-close.svg"}
              alt="logo"
              height={24}
              width={24}
            />
          </span>
        </div>
        <ul className={styles.navlinks}>
          {menuList.map((item) => {
            return (
              <li key={item.id} onClick={handelClose}>
                <a href={`#${item.id}`}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);
