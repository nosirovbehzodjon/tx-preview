"use client";

import { FadeTransition } from "@/app/components/Animations/FadeTransition";
import { SlideTransition } from "@/app/components/Animations/SlideTransition";
import { Backdrop } from "@/app/components/Backdrop";
import { Container } from "@/app/components/Container";
import { MobileMenu } from "@/app/components/MobileMenu/MobileMenu";
import { Portal } from "@/app/components/Portal";
import { menuList } from "@/app/config/navbar";
import { useScrollCheck } from "@/app/hook/useScrollCheck";
import styles from "@/app/layouts/Navbar/Navbar.module.scss";
import Image from "next/image";
import React, { Fragment, useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handelOpen = () => {
    if (!isOpen) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    }
    setIsOpen(true);
  };

  const handelClose = () => {
    if (isOpen) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "unset";
      }
    }
    setIsOpen(false);
  };

  useScrollCheck({ isOpen });

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <Container>
          <div className={styles.main}>
            <a
              href="https://turontelecom.uz/ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/assets/icons/logo.svg"}
                alt="logo"
                height={36}
                width={87}
              />
            </a>

            <ul className={styles.navlinks}>
              {menuList.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                );
              })}
            </ul>
            <a href="tel:1132" className={styles.calling}>
              <Image
                src={"/assets/icons/call-calling.svg"}
                alt="logo"
                height={20}
                width={20}
              />
              <span>1132</span>
            </a>
            <span className={styles.toggle} onClick={handelOpen}>
              <Image
                src={"/assets/icons/menu.svg"}
                alt="logo"
                height={24}
                width={24}
              />
            </span>
          </div>
        </Container>
      </nav>
      <Portal>
        <FadeTransition key={"offcanvas-fade-transition"} inProp={isOpen}>
          <Backdrop onClick={handelClose} isOpen={isOpen} />
        </FadeTransition>
        <SlideTransition key={"offcanvas-sidebar-transtion"} inProp={isOpen}>
          <MobileMenu handelClose={handelClose} />
        </SlideTransition>
      </Portal>
    </Fragment>
  );
};
