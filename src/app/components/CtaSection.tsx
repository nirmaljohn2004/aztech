import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router";
import { useReveal } from "../../hooks/useReveal";

export function CtaSection() {
  const [sectionRef, visible] = useReveal(0.12);

  return (
    <section ref={sectionRef} id="contact" className={`cta-section py-24 bg-blue-600 relative overflow-hidden scroll-mt-24 ${visible ? "visible" : ""}`}>
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none">
        <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[200%] bg-[radial-gradient(circle_at_center,white,transparent_60%)] rotate-12 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className={`reveal-scale ${visible ? "visible" : ""}`}>
          <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/20 mb-8 backdrop-blur-sm border border-white/30">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="cta-heading font-['Poppins',_sans-serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            <span className={`clip-wrap ${visible ? "visible" : ""}`}><span className="clip-text">Looking for a reliable</span></span>
            <span className={`clip-wrap ${visible ? "visible" : ""}`}><span className="clip-text">LED screen partner</span></span>
            <span className={`clip-wrap ${visible ? "visible" : ""}`}><span className="clip-text">in UAE?</span></span>
          </h2>
          <p className={`text-xl text-blue-100 font-light mb-12 max-w-2xl mx-auto reveal ${visible ? "visible" : ""}`}>
            Get expert advice and the best prices for your next LED display project. Connect with our technical team today.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center reveal-stagger ${visible ? "visible" : ""}`}>
            <Link
              to="/contact"
              className="cta-btn inline-flex justify-center items-center gap-2 bg-neutral-950 hover:bg-black text-white px-10 py-5 rounded-lg font-semibold text-lg transition-transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+971501234567"
              className="cta-btn inline-flex justify-center items-center gap-2 bg-blue-500/30 hover:bg-blue-500/50 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-colors border border-blue-400/50 backdrop-blur-sm"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
