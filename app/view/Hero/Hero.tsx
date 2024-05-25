import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { CustomImage } from "@/app/components/Image";
import styles from "@/app/view/Hero/Hero.module.scss";
import React from "react";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.main}>
          <div className={styles.heroInfo}>
            <div className={styles.bage}>Акция!</div>
            <h1>Попробуй и приобрети:</h1>
            <p>месяц безлимитного интернета в подарок!</p>
            <a href="#connection">
              <Button color="danger" className={styles.heroBtn}>
                Подключить
              </Button>
            </a>
          </div>
          <div className={styles.heroImg}>
            <CustomImage
              src={"/assets/images/hero-desktop.png"}
              aspectRatio={690 / 550}
              alt="logo"
              height={550}
              width={690}
              title=""
              wrapperClassName={styles.heroImgDesk}
            />
            <CustomImage
              aspectRatio={320 / 254}
              src={"/assets/images/hero.png"}
              alt="logo"
              height={254}
              width={320}
              title=""
              wrapperClassName={styles.heroImgMobil}
            />
            <a href="#connection">
              <Button color="danger" className={styles.heroBtn}>
                Подключить
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
