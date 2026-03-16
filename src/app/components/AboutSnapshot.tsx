import { useEffect } from "react";
import { useReveal } from "../../hooks/useReveal";

const tickerItems = [
  "LED Screens",
  "Indoor Displays",
  "Outdoor Billboards",
  "Transparent LED",
  "Curtain Displays",
  "Floor LED",
  "Stadium Perimeter",
  "Creative Shapes",
  "UAE Supplier",
];

export function AboutSnapshot() {
  const [aboutRef] = useReveal(0.12);
  const [leftRef, leftVisible] = useReveal(0.18);
  const [rightRef, rightVisible] = useReveal(0.18);

  useEffect(() => {
    if (!rightVisible) return;

    const timers: number[] = [];
    document
      .querySelectorAll<HTMLElement>(".about-count-num[data-target]")
      .forEach((element) => {
        const target = Number.parseInt(element.dataset.target ?? "0", 10);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = window.setInterval(() => {
          current = Math.min(current + step, target);
          element.textContent = `${Math.floor(current)}`;
          if (current >= target) window.clearInterval(timer);
        }, 16);

        timers.push(timer);
      });

    return () => timers.forEach((timer) => window.clearInterval(timer));
  }, [rightVisible]);

  return (
    <section ref={aboutRef} className="about-section">
      <div className="about-bg-ring about-ring-1 scroll-drift" data-scroll-speed="-26" />
      <div className="about-bg-ring about-ring-2 scroll-drift" data-scroll-speed="18" />
      <div className="about-grid-bg scroll-drift" data-scroll-speed="-8" />

      <div className="about-inner section-shell">
        <div ref={leftRef} className="about-left scroll-drift" data-scroll-speed="14">
          <div className={`about-eyebrow ${leftVisible ? "visible" : ""}`}>
            <span className="eyebrow-dot" />
            <span>About Us</span>
          </div>

          <h2 className="about-headline section-title-glow">
            {["Your", "Professional", "LED", "Partner"].map((word, index) => (
              <span className="clip-wrap about-headline-line" key={word}>
                <span
                  className={`${word === "Partner" ? "clip-text shimmer-text" : "clip-text"} ${leftVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <div className={`about-title-bar ${leftVisible ? "visible" : ""}`} />

          <p
            className={`about-body reveal ${leftVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.55s" }}
          >
            AZTECH is a professional supplier of high-quality LED display solutions,
            serving events, advertising, retail, and commercial projects across the UAE
            and GCC for over 15 years.
          </p>

          <ul className={`about-features reveal-stagger ${leftVisible ? "visible" : ""}`}>
            {[
              "Turnkey supply and installation",
              "After-sales service and maintenance",
              "Custom LED solutions for any environment",
              "UAE stock - fast delivery across all 7 emirates",
            ].map((feature, index) => (
              <li
                key={feature}
                className="about-feature-item"
                style={{ transitionDelay: `${0.65 + index * 0.1}s` }}
              >
                <span className="feat-check">+</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className={`about-cta reveal ${leftVisible ? "visible" : ""}`}
            style={{ transitionDelay: "1.1s" }}
          >
            Get in Touch
            <span className="about-cta-arrow">-&gt;</span>
          </a>
        </div>

        <div className="scroll-drift" data-scroll-speed="-12">
          <div
            ref={rightRef}
            className={`about-right reveal-scale ${rightVisible ? "visible" : ""}`}
          >
          <div className="about-card about-card-img about-card-tall">
            <img
              src="/images/products/indoor-led.jpg"
              alt="LED Installation"
              className="about-card-photo"
              onError={(event) => {
                event.currentTarget.src = "/images/products/hd-led.jpg";
              }}
            />
            <div className="about-card-img-overlay">
              <span className="about-card-img-label">Est. 2009 | Dubai, UAE</span>
            </div>
          </div>

          <div className="about-card about-card-stat about-card-dark">
            <div className="stat-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <div className="about-count-num" data-target="15">
              0
            </div>
            <div className="about-count-suffix">+ Years</div>
            <div className="about-count-label">Experience</div>
            <div className="stat-bar">
              <div
                className={`stat-bar-fill ${rightVisible ? "visible" : ""}`}
                style={{ width: "85%", transitionDelay: "0.8s" }}
              />
            </div>
          </div>

          <div className="about-card about-card-stat about-card-blue">
            <div className="about-count-num about-count-gold" data-target="500">
              0
            </div>
            <div className="about-count-suffix about-count-gold">+</div>
            <div
              className="about-count-label"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Projects Delivered
            </div>
            <div className="stat-ring" />
          </div>

          <div className="about-card about-card-img">
            <img
              src="/images/products/outdoor-smd.jpg"
              alt="Outdoor LED"
              className="about-card-photo"
              onError={(event) => {
                event.currentTarget.src = "/images/products/outdoor-dip.jpg";
              }}
            />
          </div>

          <div className="about-card about-card-stat about-card-outline">
            <div className="about-count-num about-count-cyan" data-target="99">
              0
            </div>
            <div className="about-count-suffix about-count-cyan">%</div>
            <div className="about-count-label">Client Retention</div>
            <div className="retention-dots">
              {[...Array(9)].map((_, index) => (
                <span
                  key={index}
                  className={`rdot ${rightVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${0.9 + index * 0.06}s` }}
                />
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="about-ticker-wrap scroll-drift" data-scroll-speed="10">
        <div className="about-ticker">
          {[...tickerItems, ...tickerItems].flatMap((item, index) => [
            <span key={`item-${index}`} className="ticker-item">
              {item}
            </span>,
            <span key={`sep-${index}`} className="ticker-sep">
              /
            </span>,
          ])}
        </div>
      </div>
    </section>
  );
}
