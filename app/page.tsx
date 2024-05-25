import { Banner } from "@/app/view/Banner";
import { Form } from "@/app/view/Form";
import { Hero } from "@/app/view/Hero";
import { Service } from "@/app/view/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Form />
      <Banner />
    </main>
  );
}
