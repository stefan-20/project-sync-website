import Image from "next/image";
import Hero from "./_sections/hero";
import Product from "./_sections/product";
import Contact from "./_sections/contact";
import Process from "./_sections/process";
import UseCasesAndServices from "./_sections/usecases-and-services";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Process></Process>
      <UseCasesAndServices></UseCasesAndServices>
      <Product></Product>
      <Contact></Contact>
    </main>
  );
}
