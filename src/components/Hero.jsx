import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Play, Sparkles } from "lucide-react";
import { brand, orderHref, product } from "../data/product.js";
import MagneticButton from "./MagneticButton.jsx";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section section-frame" id="top">
      <div className="page-shell hero-shell">
        <motion.div
          animate="show"
          className="hero-copy"
          initial="hidden"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.13, delayChildren: 0.18 } },
          }}
        >
          <motion.div className="hero-eyebrow" variants={reveal}>
            <img alt={`${brand.name} logo`} decoding="async" src={brand.logo} />
            <span>{brand.name} presents</span>
          </motion.div>

          <motion.h1 variants={reveal}>{product.name}</motion.h1>

          <motion.p className="hero-subtitle" variants={reveal}>{product.heroSubtitle}</motion.p>

          <motion.div className="hero-meta" variants={reveal}>
            <Sparkles size={18} />
            {product.price} &bull; {product.shipping}
          </motion.div>

          <motion.div className="hero-actions" variants={reveal}>
            <MagneticButton
              ariaLabel={`Text ${brand.displayPhone} to order ${product.name}`}
              className="button-primary"
              href={orderHref}
            >
              <MessageCircle size={19} />
              Text to Order
            </MagneticButton>
            <MagneticButton
              ariaLabel="Begin the product reveal"
              className="button-secondary"
              href="#reveal"
            >
              <Play size={18} />
              Begin the Reveal
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="hero-product-stage"
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          transition={{ duration: 1, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            alt={`${product.name} hero product`}
            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
            className="hero-product-image"
            decoding="async"
            fetchpriority="high"
            src={product.images.hero}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="hero-product-card" aria-hidden="true">
            <strong>{product.price}</strong>
            <span>{product.shipping}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
