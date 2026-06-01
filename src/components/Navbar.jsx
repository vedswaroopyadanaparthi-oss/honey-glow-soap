import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";
import { brand, navLinks, orderHref } from "../data/product.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav-shell">
        <a className="brand-link" href="#top" onClick={close}>
          <img alt={`${brand.name} logo`} decoding="async" src={brand.logo} />
          <span>{brand.name}</span>
        </a>

        <div className="desktop-links">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <MagneticButton
            ariaLabel={`Text ${brand.displayPhone} to order`}
            className="button-primary button-small"
            href={orderHref}
          >
            <MessageCircle size={17} />
            Text to Order
          </MagneticButton>

          <button
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mobile-menu"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link) => (
              <a href={link.href} key={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
            <a href={orderHref} onClick={close}>
              Text to Order
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
