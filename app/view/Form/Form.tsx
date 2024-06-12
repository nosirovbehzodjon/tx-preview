"use client";

import { FadeTransition } from "@/app/components/Animations";
import { BubbleTransition } from "@/app/components/Animations/BubbleTransition";
import { Backdrop } from "@/app/components/Backdrop";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { CustomImage } from "@/app/components/Image";
import { Input } from "@/app/components/Input";
import Modal from "@/app/components/Modal/Modal";
import { PhoneFormat } from "@/app/components/PhoneFormat";
import { Portal } from "@/app/components/Portal";
import { ReactSelect } from "@/app/components/Select";
import { initialValue, schema } from "@/app/config/form";
import { useScrollCheck } from "@/app/hook/useScrollCheck";
import styles from "@/app/view/Form/Form.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

const temporartOptions = [
  {
    label: "Behzod",
    value: "behzod",
  },
  {
    label: "Sherzod",
    value: "sherzod",
  },
  {
    label: "Ahmad",
    value: "ahmad",
  },
  {
    label: "Ozodbek",
    value: "ozodbek",
  },
];

export const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputsType>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

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

  const onSubmit: SubmitHandler<IFormInputsType> = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <section className={styles.form} id="connection">
        <Container>
          <div className={styles.main}>
            <div className={styles.formSide}>
              <h3>{"Tadbirlar uchun ro'yxatdan o'tish"}</h3>
              <p className={styles.formDesc}>
                Talabalar festivali - bu talabalarning iste’dodlarini namoyish
                etish, madaniy almashinuvi va dam olish uchun yillik bayramdir.
                Musiqiy chiqishlar, raqs shoular, teatr tomoshalari va sport
                musobaqalari orqali talabalar do‘stlashish va yangi tanishlar
                orttirish imkoniyatiga ega bo‘ladilar. Bu yoshlarning ijodiy
                salohiyatini rivojlantirish uchun ajoyib maydondir.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputContainer}>
                  <Controller
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <Input
                        icon={
                          <Image
                            src={"/assets/icons/form/user.svg"}
                            alt="user"
                            width={20}
                            height={20}
                          />
                        }
                        {...field}
                        className={styles.formInputs}
                        placeholder="To'liq ismingiz"
                        message={errors.name && errors.name.message}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <PhoneFormat
                        format="## ### ## ##"
                        mask={"_"}
                        icon={
                          <Image
                            src={"/assets/icons/form/call-calling.svg"}
                            alt="user"
                            width={20}
                            height={20}
                          />
                        }
                        {...field}
                        className={styles.formInputs}
                        placeholder="Telefon raqam"
                        message={errors.phone && errors.phone.message}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="region"
                    render={({ field }) => (
                      <ReactSelect
                        {...field}
                        className={styles.formInputs}
                        placeholder="Viloyat"
                        message={errors.region && errors.region.message}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="district"
                    render={({ field }) => (
                      <ReactSelect
                        {...field}
                        className={styles.formInputs}
                        placeholder="Tuman"
                        message={errors.district && errors.district.message}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="location"
                    render={({ field }) => (
                      <Input
                        icon={
                          <Image
                            src={"/assets/icons/form/location.svg"}
                            alt="user"
                            width={20}
                            height={20}
                          />
                        }
                        {...field}
                        className={styles.formInputs}
                        placeholder="Manzil"
                        message={errors.location && errors.location.message}
                      />
                    )}
                  />
                </div>
                <Button color="geekblue" type="submit" onClick={handelOpen}>
                  Отправить
                </Button>
              </form>
            </div>
            <div className={styles.banner}>
              <CustomImage
                src={"/assets/images/hero-desktop.png"}
                aspectRatio={400 / 400}
                alt="form"
                height={400}
                width={400}
                wrapperClassName={styles.formImg}
                className={styles.img}
              />
            </div>
          </div>
        </Container>
      </section>
      <Portal>
        <FadeTransition key={"offcanvas-fade-transition"} inProp={isOpen}>
          <Backdrop onClick={handelClose} isOpen={isOpen} />
        </FadeTransition>
        <BubbleTransition key={"bubble-transition"} inProp={isOpen}>
          <Modal handelClose={handelClose} />
        </BubbleTransition>
      </Portal>
    </Fragment>
  );
};
