export const brand = {
  name: "Honey Glow Soap",
  phone: "3147919590",
  displayPhone: "314-791-9590",
  logo: "/honey-glow-logo.png",
  tagline: "Handmade floral soaps with a soft honey glow.",
};

export const product = {
  name: "Peppermint Rose Bloom Bar",
  price: "$11.99",
  shipping: "Free shipping",
  scent: "Peppermint",
  heroSubtitle:
    "A handcrafted rose-shaped soap with aloe vera, honey, vitamin E, and a refreshing peppermint scent.",
  description:
    "Peppermint Rose Bloom Bar is a handcrafted rose-shaped soap made with aloe vera, honey, and vitamin E. Finished with soft pink rose details, green leaf accents, and a refreshing peppermint scent, it brings a clean, gift-ready look to any sink, shelf, or self-care routine.",
  details: [
    "Aloe vera",
    "Honey",
    "Vitamin E",
    "Peppermint scent",
    "Handmade",
    "Rose-shaped",
    "Gift-ready",
    "Free shipping",
  ],
  images: {
    hero: "/soap-frames/frame-05.webp",
    angle: "/soap-frames/frame-03.webp",
    final: "/soap-frames/frame-06.webp",
    petal: "/details/detail-petal.webp",
    gloss: "/details/detail-gloss.webp",
    leaf: "/details/detail-leaf.webp",
  },
};

export const orderHref = `sms:${brand.phone}`;
export const callHref = `tel:${brand.phone}`;

export const navLinks = [
  { label: "Reveal", href: "#reveal" },
  { label: "Product", href: "#product" },
  { label: "Ingredients", href: "#ingredients" },
  { label: "Process", href: "#process" },
  { label: "Order", href: "#order" },
];

export const introAssets = [brand.logo, product.images.hero];

export const scrollScenes = [
  {
    title: "Rose-shaped by design.",
    eyebrow: "The Bloom",
    text: "Soft pink rose details and green leaf accents give the bar its signature floral look.",
    image: product.images.hero,
    accent: "rose",
  },
  {
    title: "Made with aloe vera.",
    eyebrow: "Aloe Vera",
    text: "Part of the bar's carefully selected handcrafted blend.",
    image: product.images.gloss,
    accent: "sage",
  },
  {
    title: "Finished with a honey glow.",
    eyebrow: "Honey",
    text: "Honey brings a warm golden identity to the bar's formula and brand story.",
    image: product.images.final,
    accent: "honey",
  },
  {
    title: "Blended with vitamin E.",
    eyebrow: "Vitamin E",
    text: "Vitamin E is included as part of the bar's thoughtful ingredient blend.",
    image: product.images.petal,
    accent: "pearl",
  },
  {
    title: "Refreshingly peppermint.",
    eyebrow: "Peppermint Scent",
    text: "A cool peppermint scent gives the bar a fresh, clean character.",
    image: product.images.leaf,
    accent: "mint",
  },
  {
    title: "Gift-ready from first look.",
    eyebrow: "Gift Ready",
    text: "Designed to look beautiful on a sink, shelf, or self-care display.",
    image: product.images.angle,
    accent: "blush",
  },
];

export const storyPreloadAssets = [...new Set(scrollScenes.map((scene) => scene.image))];

export const ingredients = [
  {
    name: "Aloe Vera",
    description: "Included as part of the bar's carefully selected handcrafted blend.",
    accent: "sage",
  },
  {
    name: "Honey",
    description: "Adds a warm golden identity to the product's story and formula.",
    accent: "honey",
  },
  {
    name: "Vitamin E",
    description: "Part of the thoughtful ingredient blend behind the bar.",
    accent: "pearl",
  },
  {
    name: "Peppermint Scent",
    description: "A refreshing scent profile with a cool, clean character.",
    accent: "mint",
  },
];

export const processSteps = [
  {
    title: "Melt",
    text: "The soap base is melted until smooth.",
  },
  {
    title: "Blend",
    text: "Aloe vera, honey, vitamin E, color, and peppermint scent are added.",
  },
  {
    title: "Pour",
    text: "The blend is poured into a rose mold to form the floral shape.",
  },
  {
    title: "Detail",
    text: "Soft pink tones and green leaf accents define the bloom.",
  },
  {
    title: "Finish",
    text: "Each bar is prepared with a clean, gift-ready presentation.",
  },
];

export const detailImages = [
  {
    title: "Petal Spiral",
    image: product.images.petal,
    className: "detail-panel-large",
  },
  {
    title: "Glossy Finish",
    image: product.images.gloss,
    className: "",
  },
  {
    title: "Leaf Accent",
    image: product.images.leaf,
    className: "",
  },
  {
    title: "Rose Shape",
    image: product.images.angle,
    className: "detail-panel-wide",
  },
];
