import { useReveal } from "../../hooks/useReveal";

const standards = [
  { label: "Product Quality", pct: 98 },
  { label: "On-time Delivery", pct: 95 },
  { label: "Client Satisfaction", pct: 99 },
  { label: "After-sales Support", pct: 96 },
];

const cards = [
  {
    icon: "◈",
    title: "Premium Hardware",
    desc: "Top-tier LED cabinets sourced from certified manufacturers with full warranty.",
    color: "#2563EB",
  },
  {
    icon: "⬡",
    title: "Expert Installation",
    desc: "In-house technical team with 15+ years of LED installation experience.",
    color: "#E8B84B",
  },
  {
    icon: "◉",
    title: "Fast Support",
    desc: "24/7 after-sales support with same-day response across the UAE.",
    color: "#00D4FF",
  },
  {
    icon: "▣",
    title: "Custom Solutions",
    desc: "Bespoke LED designs for any shape, size, and environment requirement.",
    color: "#60A5FA",
  },
];

export function WhyChooseUs() {
  const [excellenceRef, excVisible] = useReveal(0.12);

  return (
    <section ref={excellenceRef} id="services" className="excellence-section scroll-mt-24">
      <div className="exc-bg-glow scroll-drift" data-scroll-speed="-20" />

      <div className="exc-inner section-shell">
        <div className="exc-left scroll-drift" data-scroll-speed="12">
          <div className={`exc-eyebrow ${excVisible ? "visible" : ""}`}>
            <span className="eyebrow-dot" />
            Our Standards
          </div>

          <h2 className="exc-headline">
            <span className="clip-wrap">
              <span
                className={`clip-text ${excVisible ? "visible" : ""}`}
                style={{ transitionDelay: "0.1s" }}
              >
                Committed
              </span>
            </span>
            <span className="clip-wrap">
              <span
                className={`clip-text ${excVisible ? "visible" : ""}`}
                style={{ transitionDelay: "0.22s" }}
              >
                to
              </span>
            </span>
            <span className="clip-wrap">
              <span
                className={`clip-text shimmer-text ${excVisible ? "visible" : ""}`}
                style={{ transitionDelay: "0.36s" }}
              >
                Excellence.
              </span>
            </span>
          </h2>

          <p
            className={`exc-body reveal ${excVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.55s" }}
          >
            We deliver top-tier LED display solutions backed by industry expertise,
            technical support, and a proven track record across the UAE.
          </p>

          <div
            className={`exc-bars reveal ${excVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.7s" }}
          >
            {standards.map((bar, index) => (
              <div key={bar.label} className="exc-bar-row">
                <div className="exc-bar-header">
                  <span className="exc-bar-label">{bar.label}</span>
                  <span className="exc-bar-pct">{bar.pct}%</span>
                </div>
                <div className="exc-bar-track">
                  <div
                    className={`exc-bar-fill ${excVisible ? "visible" : ""}`}
                    style={{
                      width: excVisible ? `${bar.pct}%` : "0%",
                      transitionDelay: `${0.85 + index * 0.15}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="exc-right scroll-drift" data-scroll-speed="-10">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`exc-card reveal-scale ${excVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.3 + index * 0.12}s` }}
            >
              <div
                className="exc-card-icon"
                style={{
                  color: card.color,
                  background: `${card.color}18`,
                  border: `1px solid ${card.color}40`,
                }}
              >
                {card.icon}
              </div>
              <h4 className="exc-card-title">{card.title}</h4>
              <p className="exc-card-desc">{card.desc}</p>
              <div className="exc-card-line" style={{ background: card.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
