import { Blocks, Headphones, ShieldCheck, Wrench } from "lucide-react";
import { useReveal } from "../../hooks/useReveal";

const standards = [
  { label: "Product Quality", pct: 98 },
  { label: "On-time Delivery", pct: 95 },
  { label: "Client Satisfaction", pct: 99 },
  { label: "After-sales Support", pct: 96 },
];

const cards = [
  {
    icon: ShieldCheck,
    title: "Premium Hardware",
    desc: "Top-tier LED cabinets sourced from certified manufacturers with full warranty.",
    color: "#2563EB",
    stat: "5-Year Coverage",
  },
  {
    icon: Blocks,
    title: "Expert Installation",
    desc: "In-house technical team with 15+ years of LED installation experience.",
    color: "#E8B84B",
    stat: "UAE-Wide Deployment",
  },
  {
    icon: Headphones,
    title: "Fast Support",
    desc: "24/7 after-sales support with same-day response across the UAE.",
    color: "#00C2FF",
    stat: "Same-Day Response",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    desc: "Bespoke LED designs for any shape, size, and environment requirement.",
    color: "#5F96E8",
    stat: "Built to Specification",
  },
];

export function WhyChooseUs() {
  const [excellenceRef, excVisible] = useReveal(0.12);

  return (
    <section ref={excellenceRef} id="services" className="excellence-section scroll-mt-24">
      <div className="exc-bg-glow scroll-drift" data-scroll-speed="-20" />
      <div className="exc-bg-grid" aria-hidden="true" />

      <div className="exc-inner section-shell">
        <div className="exc-left scroll-drift" data-scroll-speed="12">
          <div className={`exc-eyebrow ${excVisible ? "visible" : ""}`}>
            <span className="eyebrow-dot" />
            Our Standards
          </div>

          <h2 className="exc-headline section-title-glow">
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
            We deliver LED display systems with stronger engineering discipline, cleaner installation,
            and support standards built for commercial uptime across the UAE.
          </p>

          <div className={`exc-highlight reveal-scale ${excVisible ? "visible" : ""}`} style={{ transitionDelay: "0.68s" }}>
            <div className="exc-highlight-chip">Operational Confidence</div>
            <div className="exc-highlight-main">
              <span className="exc-highlight-value">500+</span>
              <span className="exc-highlight-copy">installations delivered with structured deployment, calibration, and after-sales coverage.</span>
            </div>
          </div>

          <div className="exc-bar-panel">
            <div
              className={`exc-bars reveal ${excVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.76s" }}
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
                        transitionDelay: `${0.9 + index * 0.15}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="exc-right scroll-drift" data-scroll-speed="-10">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`exc-card reveal-scale ${excVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${0.3 + index * 0.12}s` }}
              >
                <div className="exc-card-top">
                  <div
                    className="exc-card-icon"
                    style={{
                      color: card.color,
                      background: `${card.color}14`,
                      border: `1px solid ${card.color}40`,
                      boxShadow: `inset 0 1px 0 ${card.color}22, 0 12px 32px ${card.color}12`,
                    }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <span className="exc-card-stat" style={{ color: card.color }}>
                    {card.stat}
                  </span>
                </div>
                <h4 className="exc-card-title">{card.title}</h4>
                <p className="exc-card-desc">{card.desc}</p>
                <div className="exc-card-line" style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
