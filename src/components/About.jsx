import { motion } from "framer-motion";
import { aboutCopy, brand, featuredProduct } from "../data/product.js";

export default function About() {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="page-shell about-grid">
        <div>
          <p className="eyebrow">Our Story</p>
          <h2>About {brand.name}</h2>
          <p>{aboutCopy}</p>
        </div>
        <img
          alt={`${brand.name} handmade soap detail`}
          decoding="async"
          loading="lazy"
          src={featuredProduct.detailImages[1].src}
        />
      </div>
    </motion.section>
  );
}
