import { motion } from "framer-motion";
import { Droplets, Gem, Snowflake, Sparkles } from "lucide-react";
import { ingredients } from "../data/product.js";

const iconMap = {
  "Aloe Vera": Droplets,
  Honey: Sparkles,
  "Vitamin E": Gem,
  "Peppermint Scent": Snowflake,
};

export default function Ingredients() {
  return (
    <motion.section
      className="ingredient-section section-frame"
      id="ingredients"
      initial={{ opacity: 0, y: 34 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="page-shell">
        <div className="section-heading">
          <p className="section-kicker">Ingredients</p>
          <h2>Crafted with a soft, refreshing glow.</h2>
          <p>Four product details, kept polished and simple without medical claims.</p>
        </div>
        <div className="ingredient-grid">
          {ingredients.map((ingredient) => {
            const Icon = iconMap[ingredient.name];
            return (
              <article className={`ingredient-card ingredient-${ingredient.accent}`} key={ingredient.name}>
                <Icon size={28} />
                <h3>{ingredient.name}</h3>
                <p>{ingredient.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
