import { useEffect, useState } from "react";
import { Link } from "react-router";
import aztechLogo from "../../assets/aztech_logo.svg";

const markets = [
  "shopping malls",
  "luxury hotels",
  "sports stadiums",
  "government buildings",
  "retail stores",
  "corporate lobbies",
  "outdoor billboards",
  "airport terminals",
];

export function HeroSection() {
  const [marketIndex, setMarketIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const intervalId = window.setInterval(() => {
      setIsExiting(true);

      timeoutId = window.setTimeout(() => {
        setMarketIndex((index) => (index + 1) % markets.length);
        setIsExiting(false);
      }, 400);
    }, 2500);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const video = document.querySelector<HTMLElement>(".hero-video");
    if (!hero || !video) return;

    const onMouse = (event: MouseEvent) => {
      const xPct = (event.clientX / window.innerWidth - 0.5) * 2;
      const yPct = (event.clientY / window.innerHeight - 0.5) * 2;
      video.style.transform = `scale(1.06) translate(${xPct * 8}px, ${yPct * 5}px)`;
    };

    const onLeave = () => {
      video.style.transform = "scale(1) translate(0, 0)";
    };

    hero.addEventListener("mousemove", onMouse);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMouse);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero-bg scroll-drift" data-scroll-speed="-22" aria-hidden="true">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-grid" />
      </div>

      <div className="hero-streak" />
      <div className="hero-particles scroll-drift" data-scroll-speed="-10" aria-hidden="true">
        {[...Array(18)].map((_, index) => (
          <div key={index} className={`particle p${index + 1}`} />
        ))}
      </div>
      <div className="corner-tl" />
      <div className="corner-tr" />
      <div className="corner-bl" />
      <div className="corner-br" />
      <div className="hero-sideline" />

      <nav className="hero-nav">
        <a href="#top" className="nav-logo" aria-label="AZTECH home">
          <img src={aztechLogo} alt="AZTECH logo" className="nav-logo-image" />
        </a>
        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <Link to="/get-quote" className="nav-cta">
          Get a Quote
        </Link>
      </nav>

      <div className="hero-content scroll-drift" data-scroll-speed="18">
        <div className="hero-glow" />

        <div className="hero-eyebrow-wrap">
          <span className="eyebrow-dot" />
          <p className="hero-eyebrow">UAE&apos;s Premier LED Display Partner</p>
        </div>

        <h1 className="hero-headline">
          <span className="hw hw1">
            <span className="hw-inner">The Future of</span>
          </span>
          <span className="hw hw2">
            <span className="hw-inner">LED Display</span>
          </span>
          <span className="hw hw3">
            <span className="hw-inner hw-accent">Starts Here.</span>
          </span>
        </h1>

        <div className="hero-rotating-wrap">
          <span className="hero-rotating-prefix">For</span>
          <span className={`hero-rotating-text ${isExiting ? "exit" : ""}`}>
            {markets[marketIndex]}
          </span>
          <span className="hero-rotating-cursor">|</span>
        </div>

        <p className="hero-body">
          From concept to installation, Aztech delivers high-performance LED displays
          that command attention across every environment in the UAE and GCC.
        </p>

        <div className="hero-actions">
          <a href="#products" className="btn-primary">
            Explore Products
            <span className="btn-arrow">-&gt;</span>
          </a>
          <a href="#contact" className="btn-ghost">
            Get a Free Quote
          </a>
        </div>

        <div className="hero-trust">
          <span className="trust-dot" />
          <span>Trusted by ADNOC - Dubai Mall - RTA - Carrefour - Oberoi</span>
        </div>
      </div>

      <div className="hero-footer scroll-drift" data-scroll-speed="10">
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line">
            <div className="scroll-dot" />
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>500+</strong>
            <span>Projects</span>
          </div>
          <div className="stat">
            <strong>15+</strong>
            <span>Years</span>
          </div>
          <div className="stat">
            <strong>50+</strong>
            <span>Brands</span>
          </div>
        </div>
      </div>
    </section>
  );
}
