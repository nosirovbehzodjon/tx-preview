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
    title: "O'quv Yordami",
    description:
      "Talabalar uchun bilim va baholarni oshirishga yordam beradigan shaxsiy o‘quv mashg‘ulotlari va konsultatsiyalar.",
  },
  {
    id: 2,
    icon: "B",
    title: "Kasbiy Maslahati",
    description:
      "Talabalarga kasb rejalashtirish, rezyume yozish va ish topishda ko‘mak beradigan professional maslahatlar va yo‘l-yo‘riqlar.",
  },
  {
    id: 3,
    icon: "C",
    title: "Ruhiy Salomatlik Xizmatlari",
    description:
      "Talabalar uchun stressni boshqarish, ruhiy farovonlikni saqlash va emotsional qo‘llab-quvvatlash bo‘yicha professional xizmatlar.",
  },
] as const;
