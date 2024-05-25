import { Container } from "@/app/components/Container";
import { services } from "@/app/config/service";
import styles from "@/app/view/Service/Service.module.scss";
import Image from "next/image";
import React from "react";

export const Service = () => {
  return (
    <section className={styles.services} id="service">
      <Container>
        <div className={styles.main}>
          <h2>Условия акции:</h2>
          <div className={styles.list}>
            {services.map((item) => {
              const { id, description, img, title } = item;
              return (
                <div key={id} className={styles.card}>
                  <Image src={img} alt={title} width={150} height={150} />
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
