import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { product, scrollScenes } from "../data/product.js";

export default function ScrollStory() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const imageRefs = useRef([]);
  const cardRefs = useRef([]);
  const toneRefs = useRef([]);
  const dotRefs = useRef([]);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(min-width: 821px)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 821px)");
    const onChange = () => setIsDesktop(media.matches);

    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isDesktop || reduceMotion || !sectionRef.current || !pinRef.current) {
      return undefined;
    }

    let mounted = true;
    let context;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (!mounted || !sectionRef.current || !pinRef.current) return;

        gsap.registerPlugin(ScrollTrigger);
        context = gsap.context(() => {
          gsap.set(imageRefs.current, { autoAlpha: 0, y: 28, scale: 0.96, rotate: -1.2 });
          gsap.set(cardRefs.current, { autoAlpha: 0, y: 28 });
          gsap.set(toneRefs.current, { autoAlpha: 0 });
          gsap.set(dotRefs.current, { autoAlpha: 0.35, scale: 1 });

          const timeline = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: `+=${scrollScenes.length * 660}`,
              scrub: 0.7,
              pin: pinRef.current,
              anticipatePin: 1,
            },
          });

          scrollScenes.forEach((_, index) => {
            const start = index * 1.1;
            const image = imageRefs.current[index];
            const card = cardRefs.current[index];
            const tone = toneRefs.current[index];
            const dot = dotRefs.current[index];

            timeline
              .to(tone, { autoAlpha: 1, duration: 0.34 }, start)
              .to(image, { autoAlpha: 1, y: 0, scale: 1, rotate: 0, duration: 0.42 }, start)
              .to(card, { autoAlpha: 1, y: 0, duration: 0.38 }, start + 0.08)
              .to(dot, { autoAlpha: 1, scale: 1.35, duration: 0.24 }, start + 0.08);

            if (index < scrollScenes.length - 1) {
              timeline
                .to(card, { autoAlpha: 0, y: -18, duration: 0.28 }, start + 0.82)
                .to(image, { autoAlpha: 0, y: -18, scale: 1.025, duration: 0.32 }, start + 0.84)
                .to(tone, { autoAlpha: 0, duration: 0.28 }, start + 0.88)
                .to(dot, { autoAlpha: 0.35, scale: 1, duration: 0.2 }, start + 0.88);
            }
          });
        }, sectionRef);
      },
    );

    return () => {
      mounted = false;
      context?.revert();
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return (
      <section className="scroll-story mobile-story section-frame" id="reveal">
        <div className="page-shell">
          <div className="section-heading story-heading">
            <p className="section-kicker">
              <Sparkles size={16} />
              Product Reveal
            </p>
            <h2>Watch the bloom unfold.</h2>
          </div>
          <div className="mobile-story-grid">
            {scrollScenes.map((scene, index) => (
              <article className={`mobile-story-card story-${scene.accent}`} key={scene.title}>
                <img alt={`${product.name} ${scene.eyebrow}`} loading="lazy" src={scene.image} />
                <span>{String(index + 1).padStart(2, "0")} / 06</span>
                <h3>{scene.title}</h3>
                <p>{scene.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="scroll-story section-frame" id="reveal" ref={sectionRef}>
      <div className="story-pin" ref={pinRef}>
        {scrollScenes.map((scene, index) => (
          <div
            className={`story-tone story-${scene.accent}`}
            key={`${scene.title}-tone`}
            ref={(element) => {
              toneRefs.current[index] = element;
            }}
          />
        ))}
        <div className="page-shell story-layout">
          <div className="story-copy">
            <p className="section-kicker">
              <Sparkles size={16} />
              Product Reveal
            </p>
            <h2>Watch the bloom unfold.</h2>
            <div className="story-progress" aria-hidden="true">
              {scrollScenes.map((scene, index) => (
                <span
                  key={scene.title}
                  ref={(element) => {
                    dotRefs.current[index] = element;
                  }}
                />
              ))}
            </div>
          </div>

          <div className="story-stage">
            {scrollScenes.map((scene, index) => (
              <img
                alt={`${product.name} ${scene.eyebrow}`}
                className="story-image"
                decoding="async"
                key={`${scene.title}-image`}
                loading={index < 3 ? "eager" : "lazy"}
                ref={(element) => {
                  imageRefs.current[index] = element;
                }}
                src={scene.image}
              />
            ))}
          </div>

          <div className="story-card-stack">
            {scrollScenes.map((scene, index) => (
              <article
                className="story-card"
                key={`${scene.title}-card`}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
              >
                <span>{String(index + 1).padStart(2, "0")} / 06</span>
                <p>{scene.eyebrow}</p>
                <h3>{scene.title}</h3>
                <small>{scene.text}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
