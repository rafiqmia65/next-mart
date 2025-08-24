import Image from "next/image";
import Hero from "../components/Hero";
import ProductsPage from "../components/ProductHighLights";

export default function Home() {
  return (
    <div>
      <main>
        <Hero></Hero>
        <ProductsPage></ProductsPage>
      </main>
    </div>
  );
}
