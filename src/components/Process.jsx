import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";
import { processSteps, product } from "../data/product.js";

export default function Process() {
  return (
    <motion.section
      className="process-section section-frame"
      id="process"
      initial={{ opacity: 0, y: 34 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-kicker">
            <Flower2 size={16} />
            Process
          </p>
          <h2>From pour to bloom.</h2>
          <p>A beautiful small-batch flow for the bar's rose shape, color, scent, and finish.</p>
        </div>
        <div className="process-layout">
          <div className="process-photo">
            <img
              alt={`${product.name} process view`}
              decoding="async"
              loading="lazy"
              src={product.images.angle}
            />
          </div>
          <div className="process-list">
            {processSteps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
