export const brand = {
  name: "Honey Glow Soap",
  phone: "3147919590",
  displayPhone: "314-791-9590",
  logo: "/honey-glow-logo.png",
  tagline: "Handmade floral soaps with a soft honey glow.",
  announcement: "FREE SHIPPING ON ALL CURRENT ORDERS",
};

export const orderHref = `sms:${brand.phone}`;
export const callHref = `tel:${brand.phone}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const products = [
  {
    name: "Peppermint Rose Bloom Bar",
    price: "$11.99",
    available: true,
    shipping: "Free shipping",
    image: "/soap-frames/frame-05.webp",
    cardImage: "/soap-frames/frame-03.webp",
    detailImage: "/soap-frames/frame-06.webp",
    scent: "Peppermint scent",
    shortLabel: "Peppermint scent | Rose-shaped soap",
    description:
      "Peppermint Rose Bloom Bar is a handcrafted rose-shaped soap made with aloe vera, honey, and vitamin E. Finished with soft pink rose details, green leaf accents, and a refreshing peppermint scent, it brings a clean, gift-ready look to any sink, shelf, or self-care routine.",
    tags: [
      "Aloe vera",
      "Honey",
      "Vitamin E",
      "Peppermint scent",
      "Handmade",
      "Rose-shaped",
      "Gift-ready",
    ],
    detailImages: [
      { label: "Petal detail", src: "/details/detail-petal.webp" },
      { label: "Glossy finish", src: "/details/detail-gloss.webp" },
      { label: "Leaf accent", src: "/details/detail-leaf.webp" },
    ],
  },
  {
    name: "Honey Oat Glow Bar",
    available: false,
    status: "Coming Soon",
    shortLabel: "Warm honey oat soap",
  },
  {
    name: "Lavender Cloud Bar",
    available: false,
    status: "Coming Soon",
    shortLabel: "Soft lavender soap",
  },
  {
    name: "Citrus Bloom Bar",
    available: false,
    status: "Coming Soon",
    shortLabel: "Bright citrus soap",
  },
];

export const featuredProduct = products.find((product) => product.available);

export const hero = {
  headline: "Handmade Soaps with a Soft Honey Glow",
  subtitle:
    "Small-batch soaps designed with clean scents, soft colors, and gift-ready details.",
  image: featuredProduct.image,
};

export const aboutCopy =
  "Honey Glow Soap is a small handmade soap brand focused on creating clean, gift-ready bars with soft colors, refreshing scents, and polished handmade details. The shop is starting with Peppermint Rose Bloom Bar, with more soaps planned for the future.";

export const safetyNote =
  "For external use only. Avoid contact with eyes. Discontinue use if irritation occurs.";
