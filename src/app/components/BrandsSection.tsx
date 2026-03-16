import { brands } from "../data/brands";
import { useReveal } from "../../hooks/useReveal";

const marqueeBrands = [...brands, ...brands];

function BrandTrack({
  items,
  direction,
}: {
  items: typeof brands;
  direction: "left" | "right";
}) {
  return (
    <div className="brands-track-wrap">
      <div className="brands-fade-left" />
      <div className="brands-fade-right" />
      <div
        className={`brands-track ${
          direction === "left" ? "brands-track-left" : "brands-track-right"
        }`}
        aria-label="Partner brands"
      >
        {items.map((brand, index) => (
          <div key={`${direction}-${brand.name}-${index}`} className="brand-card brand-card-text">
            {brand.logo ? (
              <img
                src={brand.logo}
                alt={brand.logoAlt ?? `${brand.name} logo`}
                className={`brand-logo ${brand.logoClassName ?? ""}`.trim()}
                loading="lazy"
              />
            ) : (
              <span className="brand-name-text" style={{ color: brand.color, display: "block" }}>
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandsSection() {
  const [sectionRef, visible] = useReveal(0.15);

  return (
    <section ref={sectionRef} className="brands-section">
      <div className="brands-top-line" />
      <div className="brands-orb brands-orb-left scroll-drift" data-scroll-speed="-16" />
      <div className="brands-orb brands-orb-right scroll-drift" data-scroll-speed="12" />

      <div className="brands-inner section-shell">
        <div className={`brands-header ${visible ? "visible" : ""}`}>
          <div className="brands-eyebrow">
            <span className="eyebrow-dot" />
            Technology Partners
          </div>

          <h2 className="brands-title section-title-glow">
            <span className="clip-wrap">
              <span className={`clip-text ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.08s" }}>
                Brands We
              </span>
            </span>
            <span className="clip-wrap">
              <span className={`clip-text shimmer-text ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.24s" }}>
                Work With
              </span>
            </span>
          </h2>

          <p className="brands-subtitle">
            We collaborate with leading AV, control, display, and audio brands used
            across commercial, retail, event, and experience-driven installations.
          </p>
        </div>

        <BrandTrack items={marqueeBrands} direction="left" />
        <BrandTrack items={[...marqueeBrands].reverse()} direction="right" />

        <div className={`brands-bottom ${visible ? "visible" : ""}`}>
          <div className="brands-stat">
            <span className="bstat-num">13+</span>
            <span className="bstat-label">Core Partners</span>
          </div>
          <div className="brands-stat-divider" />
          <div className="brands-stat">
            <span className="bstat-num">50+</span>
            <span className="bstat-label">Compatible Systems</span>
          </div>
          <div className="brands-stat-divider" />
          <div className="brands-stat">
            <span className="bstat-num">UAE</span>
            <span className="bstat-label">Project Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
