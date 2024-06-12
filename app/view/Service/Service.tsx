import { Container } from "@/app/components/Container";
import { services } from "@/app/config/service";
import styles from "@/app/view/Service/Service.module.scss";
import React from "react";

export const Service = () => {
  return (
    <section className={styles.services} id="service">
      <Container>
        <div className={styles.main}>
          <h2>Bizning xizmatlar</h2>
          <div className={styles.list}>
            {services.map((item) => {
              const { id, description, icon, title } = item;
              return (
                <div key={id} className={styles.card}>
                  <div className={styles.icon}>{icon}</div>
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
