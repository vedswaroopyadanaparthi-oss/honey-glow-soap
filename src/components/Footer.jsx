import { brand, navLinks } from "../data/product.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-layout">
        <div>
          <a className="footer-brand" href="#top">
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
          <p>For external use only. Avoid contact with eyes. Discontinue use if irritation occurs.</p>
          <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
