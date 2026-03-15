import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Star } from "lucide-react";
import { useReveal } from "../../hooks/useReveal";

function CountUp({ end, suffix = "+" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal(0.3);

  useEffect(() => {
    if (!visible) return;
    let value = 0;
    const step = end / (2000 / 16);
    const timer = window.setInterval(() => {
      value += step;
      if (value >= end) {
        setCount(end);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(value));
      }
    }, 16);

    return () => window.clearInterval(timer);
  }, [visible, end]);

  return (
    <span ref={ref} className="count-num">
      {count}
      {suffix}
    </span>
  );
}

export function AboutSnapshot() {
  const [sectionRef, visible] = useReveal(0.12);

  return (
    <section ref={sectionRef} className={`py-24 bg-neutral-900 border-y border-neutral-800 ${visible ? "visible" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className={`md:w-1/2 reveal-left ${visible ? "visible" : ""}`}>
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">About Us</h2>
            <h3 className={`font-['Poppins',_sans-serif] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight underline-draw ${visible ? "visible" : ""}`}>
              Your Professional LED Partner
            </h3>
            <p className="text-xl text-neutral-300 leading-relaxed font-light mb-8">
              AZTECH is a professional supplier of high-quality LED display solutions, serving events, advertising, retail, and commercial projects across the UAE.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-white hover:text-blue-400 font-medium text-lg transition-colors group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className={`md:w-1/2 w-full grid grid-cols-2 gap-4 reveal-right ${visible ? "visible" : ""}`}>
            <div className="space-y-4">
              <div className={`stat-item bg-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-sm flex flex-col items-center justify-center text-center aspect-square mt-8 ${visible ? "visible" : ""}`}>
                <Star className="w-8 h-8 text-blue-500 mb-4" />
                <div className="text-3xl font-['Poppins',_sans-serif] font-bold text-white mb-1">
                  <CountUp end={10} />
                </div>
                <div className="text-sm text-neutral-400 font-medium uppercase tracking-wider">Years Exp.</div>
                <div className="stat-line" />
              </div>
              <div className={`reveal-scale bg-neutral-950/50 rounded-2xl border border-neutral-800 overflow-hidden shadow-sm aspect-square ${visible ? "visible" : ""}`}>
                <img
                  src="https://images.unsplash.com/photo-1740968984962-29087e16ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBsZWQlMjBzY3JlZW4lMjBwcmVzZW50YXRpb24lMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzczNDEyMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Corporate Event"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className={`reveal-scale bg-neutral-950/50 rounded-2xl border border-neutral-800 overflow-hidden shadow-sm aspect-square ${visible ? "visible" : ""}`}>
                <img
                  src="https://images.unsplash.com/photo-1585504303098-9785dc784742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwdGltZXMlMjBzcXVhcmV8ZW58MXx8fHwxNzczNDEyMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Outdoor Display"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className={`stat-item bg-blue-600 p-6 rounded-2xl border border-blue-500 shadow-sm flex flex-col items-center justify-center text-center aspect-square ${visible ? "visible" : ""}`}>
                <div className="text-4xl font-['Poppins',_sans-serif] font-bold text-white mb-2">
                  <CountUp end={99} suffix="%" />
                </div>
                <div className="text-sm text-blue-100 font-medium uppercase tracking-wider">Client Retention</div>
                <div className="stat-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
