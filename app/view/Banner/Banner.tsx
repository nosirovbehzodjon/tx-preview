import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { bannerMetaData } from "@/app/config/banner";
import styles from "@/app/view/Banner/Banner.module.scss";
import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <section className={styles.banner} id="cinerama">
      <Container>
        <div className={styles.purpleContainer}>
          <div className={styles.title}>
            <h3>Кино, ТВ и интернет</h3>
            <p>Медиаплатформа Cinerama и ее возможности!</p>
          </div>
          <div className={styles.main}>
            <div className={styles.infoSide}>
              <div className={styles.title}>
                <h3>Кино, ТВ и интернет</h3>
                <p>Медиаплатформа Cinerama и ее возможности!</p>
              </div>
              <div className={styles.limitTariffWrapper}>
                <div className={styles.limitList}>
                  {bannerMetaData.map((item) => {
                    const { description, id, img, title } = item;
                    return (
                      <div className={styles.limit} key={id}>
                        <Image src={img} alt={title} width={20} height={20} />
                        <div className={styles.meta}>
                          <h5>{title}</h5>
                          <p>{description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Image
                  src={"/assets/icons/banner/tariff.svg"}
                  alt={"tariff"}
                  width={192}
                  height={72}
                  className={styles.tariffImg}
                />
              </div>
              <p className={styles.limitDesc}>
                Если вы являетесь абонентом Turon Telecom, вы бесплатно получите
                тариф «Стандарт» на платформе Cinerama.
              </p>
              <a
                href="https://cinerama.uz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="orange" className={styles.infoBtn}>
                  Перейти
                </Button>
              </a>
            </div>
            <div className={styles.imgSide}>
              <Image
                src={"/assets/images/hero-desktop.png"}
                alt={"tariff"}
                width={690}
                height={516}
              />

              <Image
                src={"/assets/images/hero.png"}
                alt={"tariff"}
                width={320}
                height={290}
              />
            </div>
          </div>
          <div className={styles["animations"]}>
            <div className={styles["star1"]}></div>
            <div className={styles["star2"]}></div>
          </div>
        </div>
      </Container>
    </section>
  );
};
