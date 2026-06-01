import { brand, navLinks, safetyNote } from "../data/product.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <a className="footer-brand" href="#home">
            <img alt={`${brand.name} logo`} decoding="async" loading="lazy" src={brand.logo} />
            <span>{brand.name}</span>
          </a>
          <p>{brand.tagline}</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-meta">
          <p>{brand.displayPhone}</p>
          <p>{safetyNote}</p>
          <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
