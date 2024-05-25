import { Button } from "../Button";
import styles from "@/app/components/Modal/Modal.module.scss";
import Image from "next/image";
import React, { ComponentProps, forwardRef } from "react";

interface ModalProps extends ComponentProps<"div"> {
  handelClose: () => void;
}

const Modal = forwardRef(
  (props: ModalProps, ref: React.Ref<HTMLDivElement>) => {
    const { handelClose, ...rest } = props;
    return (
      <div className={styles.modal} ref={ref} {...rest}>
        <div className={styles.modalHeader}>
          <h2>Заявка принята</h2>
          <span onClick={handelClose}>
            <Image
              src={"/assets/icons/x-close.svg"}
              alt="logo"
              height={24}
              width={24}
            />
          </span>
        </div>
        <p className={styles.info}>
          Ваша заявка под номером <a href="#"> №41461</a> была успешно принята!
          Мы свяжемся с Вами в скором времени!
        </p>
        <Button
          color="geekblue"
          className={styles.btnModal}
          onClick={handelClose}
        >
          Понятно
        </Button>
      </div>
    );
  }
);

export default Modal;
