import { ReactNode } from "react";

interface IServiceItem {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}
export const services: IServiceItem[] = [
  {
    id: 1,
    icon: "A",
    title: "Абонентская плата",
    description:
      "Первый месяц абонентской платы в подарок - никаких дополнительных расходов!",
  },
  {
    id: 2,
    icon: "B",
    title: "Заключение договора",
    description:
      "Наши специалисты приедут к вам для оформления договора - удобно, быстро и без дополнительных затрат!",
  },
  {
    id: 3,
    icon: "C",
    title: "Кабель",
    description:
      "Подключайтесь к максимальной свободе интернета без дополнительных издержек - кабель длиной до 50 метров в подарок!",
  },
] as const;
