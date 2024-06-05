import { Container } from "@/app/components/Container";
import styles from "@/app/layouts/Footer/Footer.module.scss";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.contactSocial}>
              <h3>{"Biz bilan bog'lanish"}</h3>
              <a
                href={process.env.STATIC_VAR_FACEBOOK_ADMIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <Image
                    src={"/assets/icons/facebook.svg"}
                    alt="turon in facebook"
                    height={20}
                    width={20}
                  />
                  <span>Facebook orqali</span>
                </p>
              </a>
              <a
                href={process.env.STATIC_VAR_TELEGRAM_TALABAGAXABAR}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <Image
                    src={"/assets/icons/telegram.svg"}
                    alt="turon in telegram"
                    height={20}
                    width={20}
                  />
                  <span>Telegram orqali</span>
                </p>
              </a>
            </div>
            <div className={styles.contactPhone}>
              <a href="tel:949223832" className={styles.calling}>
                <Image
                  src={"/assets/icons/call-calling.svg"}
                  alt="logo"
                  height={20}
                  width={20}
                />
                <span>94 922 38 32</span>
              </a>
              <p>{"Telefon orqali bog'lanish"}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.socialMedia}>
              <h3>Biz ijtimoiy tarmoqlarda</h3>
              <ul className={styles.socilaList}>
                <li>
                  <a
                    href={process.env.STATIC_VAR_FACEBOOK_TALABAGAXABAR}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/assets/icons/facebook.svg"}
                      alt="turon in facebook"
                      height={20}
                      width={20}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.STATIC_VAR_INSTAGRAM_TALABAGAXABAR}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/assets/icons/instagram.svg"}
                      alt="turon in instagram"
                      height={20}
                      width={20}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.STATIC_VAR_TELEGRAM_TALABAGAXABAR}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/assets/icons/telegram.svg"}
                      alt="turon in telegram"
                      height={20}
                      width={20}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.playMarket}>
              <a
                href={process.env.STATIC_VAR_GOOGLE_PLAY}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/assets/icons/google.svg"}
                  alt="turon in google"
                  height={60}
                  width={180}
                />
              </a>
              <a
                href={process.env.STATIC_VAR_APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/assets/icons/appstore.svg"}
                  alt="turon in appstore"
                  height={60}
                  width={180}
                />
              </a>
            </div>
          </div>
        </div>
        <p className={styles.infoFooter}>©2024 ABEZ IT Company</p>
      </Container>
    </footer>
  );
};
