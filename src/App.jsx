import DetailGallery from "./components/DetailGallery.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Ingredients from "./components/Ingredients.jsx";
import IntroLoader from "./components/IntroLoader.jsx";
import Navbar from "./components/Navbar.jsx";
import OrderCTA from "./components/OrderCTA.jsx";
import Process from "./components/Process.jsx";
import ProductSpotlight from "./components/ProductSpotlight.jsx";
import ScrollStory from "./components/ScrollStory.jsx";
import useLenis from "./hooks/useLenis.js";

export default function App() {
  useLenis();

  return (
    <>
      <IntroLoader />
      <Navbar />
      <main>
        <Hero />
        <ScrollStory />
        <ProductSpotlight />
        <Ingredients />
        <Process />
        <DetailGallery />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
