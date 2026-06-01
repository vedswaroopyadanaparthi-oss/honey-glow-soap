import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";
import { brand, callHref, orderHref, product } from "../data/product.js";

export default function OrderCTA() {
  return (
    <motion.section
      className="order-section section-frame"
      id="order"
      initial={{ opacity: 0, y: 28 }}
      viewport={{ once: true, amount: 0.22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="page-shell order-layout">
        <div className="order-copy">
          <p className="section-kicker">
            <Sparkles size={16} />
            Order
          </p>
          <h2>Ready to order your bloom?</h2>
          <p>
            Text {brand.name} to order {product.name} for {product.price} with{" "}
            {product.shipping.toLowerCase()}.
          </p>
          <div className="order-actions">
            <MagneticButton
              ariaLabel={`Text ${brand.displayPhone}`}
              className="button-primary"
              href={orderHref}
            >
              <MessageCircle size={20} />
              Text {brand.displayPhone}
            </MagneticButton>
            <MagneticButton
              ariaLabel={`Call ${brand.displayPhone}`}
              className="button-secondary"
              href={callHref}
            >
              <Phone size={18} />
              Call {brand.displayPhone}
            </MagneticButton>
          </div>
        </div>

        <div className="order-product">
          <img
            alt={`${product.name} final product`}
            decoding="async"
            loading="lazy"
            src={product.images.final}
          />
        </div>
      </div>
    </motion.section>
  );
}
