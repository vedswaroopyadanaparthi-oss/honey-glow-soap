import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { detailImages } from "../data/product.js";

export default function DetailGallery() {
  return (
    <motion.section
      className="detail-section section-frame"
      id="details"
      initial={{ opacity: 0, y: 34 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.18 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-kicker">
            <Search size={16} />
            Details
          </p>
          <h2>Every detail catches the light.</h2>
          <p>Close-up views of the petals, glossy finish, leaf accent, and rose-shaped profile.</p>
        </div>
        <div className="detail-grid">
          {detailImages.map((item, index) => (
            <figure
              className={["detail-panel", item.className].filter(Boolean).join(" ")}
              key={item.title}
            >
              <img alt={item.title} decoding="async" loading="lazy" src={item.image} />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
