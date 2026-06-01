import About from "./components/About.jsx";
import AnnouncementBar from "./components/AnnouncementBar.jsx";
import ContactOrder from "./components/ContactOrder.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ShopGrid from "./components/ShopGrid.jsx";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ShopGrid />
        <ProductDetail />
        <About />
        <ContactOrder />
      </main>
      <Footer />
    </>
  );
}
