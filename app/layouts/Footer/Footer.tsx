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
              <h3>Как с нами связаться</h3>
              <a
                href={process.env.STATIC_VAR_FACEBOOK_TURON}
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
                  <span>Написать в Facebook</span>
                </p>
              </a>
              <a
                href={process.env.STATIC_VAR_TELEGRAM_TURON}
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
                  <span>Написать в Telegram</span>
                </p>
              </a>
            </div>
            <div className={styles.contactPhone}>
              <a href="tel:1132" className={styles.calling}>
                <Image
                  src={"/assets/icons/call-calling.svg"}
                  alt="logo"
                  height={20}
                  width={20}
                />
                <span>1132</span>
              </a>
              <p>Заказать обратный звонок</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.socialMedia}>
              <h3>Мы в соц. сетях</h3>
              <ul className={styles.socilaList}>
                <li>
                  <a
                    href={process.env.STATIC_VAR_FACEBOOK_CINERAMA}
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
                    href={process.env.STATIC_VAR_INSTAGRAM_CINERAMA}
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
                    href={process.env.STATIC_VAR_TELEGRAM_CINERAMA}
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
        <p className={styles.infoFooter}>
          ©2010-2024 Turon Telecom - телекоммуникационные услуги
        </p>
      </Container>
    </footer>
  );
};
