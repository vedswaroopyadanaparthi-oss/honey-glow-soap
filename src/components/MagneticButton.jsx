import { motion } from "framer-motion";

export default function MagneticButton({
  href,
  children,
  className,
  ariaLabel,
  onClick,
}) {
  return (
    <motion.a
      aria-label={ariaLabel}
      className={["button", className].filter(Boolean).join(" ")}
      href={href}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{children}</span>
    </motion.a>
  );
}
