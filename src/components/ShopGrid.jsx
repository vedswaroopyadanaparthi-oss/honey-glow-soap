import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { orderHref, products } from "../data/product.js";

export default function ShopGrid() {
  return (
    <motion.section
      className="shop-section"
      id="shop"
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="page-shell">
        <div className="section-heading centered">
          <p className="eyebrow">Current Collection</p>
          <h2>Shop Soaps</h2>
          <p>Browse our current handmade soap collection.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article
              className={[
                "product-card",
                product.available ? "is-available" : "is-coming-soon",
              ].join(" ")}
              key={product.name}
            >
              <div className="product-card-media">
                {product.available ? (
                  <img
                    alt={`${product.name} handmade soap`}
                    decoding="async"
                    loading="lazy"
                    src={product.cardImage || product.image}
                  />
                ) : (
                  <div className="placeholder-soap" aria-hidden="true">
                    <span>{product.name.charAt(0)}</span>
                  </div>
                )}
                {!product.available && <span className="status-badge">{product.status}</span>}
              </div>

              <div className="product-card-copy">
                <h3>{product.name}</h3>
                <p>{product.shortLabel}</p>
                {product.available ? (
                  <>
                    <div className="product-card-row">
                      <strong>{product.price}</strong>
                      <span>{product.shipping}</span>
                    </div>
                    <a className="button button-primary" href={orderHref}>
                      <MessageCircle size={18} />
                      Text to Order
                    </a>
                  </>
                ) : (
                  <p className="coming-soon-copy">More details coming soon.</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
