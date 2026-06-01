import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { brand, callHref, featuredProduct, orderHref, safetyNote } from "../data/product.js";

export default function ProductDetail() {
  return (
    <motion.section
      className="product-detail-section"
      id="product"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="page-shell product-detail-grid">
        <div className="product-gallery">
          <img
            alt={`${featuredProduct.name} product detail`}
            className="main-product-image"
            decoding="async"
            loading="lazy"
            src={featuredProduct.detailImage}
          />
          <div className="thumbnail-row" aria-label="Product details">
            {featuredProduct.detailImages.map((image) => (
              <img alt={image.label} decoding="async" key={image.label} loading="lazy" src={image.src} />
            ))}
          </div>
        </div>

        <div className="product-detail-copy">
          <p className="eyebrow">Product Details</p>
          <h2>{featuredProduct.name}</h2>
          <div className="price-row">
            <strong>{featuredProduct.price}</strong>
            <span>{featuredProduct.shipping}</span>
          </div>
          <p>{featuredProduct.description}</p>
          <div className="chip-list">
            {featuredProduct.tags.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
          <p className="safety-note">{safetyNote}</p>
          <div className="product-actions">
            <a className="button button-primary" href={orderHref}>
              <MessageCircle size={18} />
              Text to Order
            </a>
            <a className="button button-secondary" href={callHref}>
              <Phone size={18} />
              Call {brand.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
