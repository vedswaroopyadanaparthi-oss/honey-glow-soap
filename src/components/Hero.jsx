import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { hero, orderHref } from "../data/product.js";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <motion.div
        className="page-shell hero-grid"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-copy">
          <p className="eyebrow">Small-batch soap shop</p>
          <h1>{hero.headline}</h1>
          <p>{hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#shop">
              Shop Soaps
            </a>
            <a className="button button-secondary" href={orderHref}>
              <MessageCircle size={18} />
              Text to Order
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img
            alt="Honey Glow Soap handmade soap collection"
            decoding="async"
            src={hero.image}
          />
        </div>
      </motion.div>
    </section>
  );
}
