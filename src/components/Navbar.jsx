import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { brand, navLinks } from "../data/product.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-link" href="#home" onClick={close}>
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

        <div className="nav-icons" aria-label="Decorative shop icons">
          <Search aria-hidden="true" size={20} />
          <User aria-hidden="true" size={20} />
          <ShoppingBag aria-hidden="true" size={20} />
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
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a href={link.href} key={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
