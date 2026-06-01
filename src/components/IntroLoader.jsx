import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand, introAssets } from "../data/product.js";

const MIN_TIME = 420;
const MAX_TIME = 1200;

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function loadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = resolve;
    image.onerror = resolve;
    image.src = src;

    if (image.complete) {
      resolve();
    }
  });
}

export default function IntroLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !new URLSearchParams(window.location.search).has("skipIntro");
  });

  useEffect(() => {
    if (!visible) return undefined;

    let cancelled = false;
    const assetsReady = Promise.all(introAssets.map(loadImage));

    Promise.race([Promise.all([assetsReady, wait(MIN_TIME)]), wait(MAX_TIME)]).then(() => {
      if (!cancelled) {
        setVisible(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={{ opacity: 1 }}
          className="intro-loader"
          exit={{ opacity: 0, transition: { duration: 0.42, ease: "easeOut" } }}
          initial={{ opacity: 1 }}
        >
          <motion.img
            alt={`${brand.name} logo`}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            decoding="async"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            src={brand.logo}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            animate={{ scaleX: 1 }}
            className="intro-line"
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
          <span>{brand.name}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
