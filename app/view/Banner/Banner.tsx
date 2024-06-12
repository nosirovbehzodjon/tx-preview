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
            <h3>Talabalar uchun onlayn kutubxona</h3>
            <p>EduLibrary mediaplatformasi va uning imkoniyatlari!</p>
          </div>
          <div className={styles.main}>
            <div className={styles.infoSide}>
              <div className={styles.title}>
                <h3>Talabalar uchun onlayn kutubxona</h3>
                <p>EduLibrary mediaplatformasi va uning imkoniyatlari!</p>
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
                {`Agar siz Universitas talabasi bo‘lsangiz, EduLibrary
                platformasida "Premium" tarifini bepul olasiz. Bu imkoniyatdan
                foydalanib, bilimlaringizni yanada boyitish va o‘quv jarayonini
                yanada samarali qilish imkoniyatiga ega bo‘ling.`}
              </p>
              <a
                href="https://t.me/talabagaxabar"
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
