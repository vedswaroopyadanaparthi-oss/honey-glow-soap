import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";
import { brand, orderHref, product } from "../data/product.js";

export default function ProductSpotlight() {
  return (
    <motion.section
      className="product-section section-frame"
      id="product"
      initial={{ opacity: 0, y: 34 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.22 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="page-shell product-card">
        <div className="product-media">
          <img
            alt={`${product.name} product`}
            decoding="async"
            loading="lazy"
            src={product.images.final}
          />
        </div>
        <div className="product-content">
          <p className="section-kicker">Product Spotlight</p>
          <h2>{product.name}</h2>
          <div className="price-line">
            <strong>{product.price}</strong>
            <span>{product.shipping}</span>
          </div>
          <p>{product.description}</p>
          <div className="chip-list">
            {product.details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
          <div className="section-actions">
            <MagneticButton
              ariaLabel={`Text ${brand.displayPhone} to order ${product.name}`}
              className="button-primary"
              href={orderHref}
            >
              <MessageCircle size={19} />
              Text to Order
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
