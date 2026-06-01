import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { brand, callHref, orderHref } from "../data/product.js";

export default function ContactOrder() {
  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="page-shell contact-card">
        <div>
          <p className="eyebrow">Contact to Order</p>
          <h2>Want to order or ask about a soap?</h2>
          <p>
            Text {brand.name} to order the current soap collection or ask about
            upcoming bars.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href={orderHref}>
            <MessageCircle size={18} />
            Text {brand.displayPhone}
          </a>
          <a className="button button-secondary" href={callHref}>
            <Phone size={18} />
            Call {brand.displayPhone}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
