import { MonitorPlay, Settings, ShieldCheck, MapPin, HeadphonesIcon } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: MonitorPlay,
    title: "High-Resolution Displays",
    description: "Crystal clear image quality that guarantees maximum visibility and impact."
  },
  {
    icon: Settings,
    title: "Professional Installation",
    description: "Expert setup by certified technicians ensuring safe and secure mounting."
  },
  {
    icon: ShieldCheck,
    title: "Reliable Performance",
    description: "Built for endurance with premium components for uninterrupted display."
  },
  {
    icon: MapPin,
    title: "UAE-Wide Service",
    description: "Nationwide coverage for delivery, installation, and on-site support."
  },
  {
    icon: HeadphonesIcon,
    title: "After-Sales Support",
    description: "Dedicated technical assistance and maintenance programs."
  }
];

export function WhyChooseUs() {
  return (
    <section id="services" className="py-24 bg-neutral-900 border-y border-neutral-800 relative overflow-hidden scroll-mt-24">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">Why Choose Us</h2>
          <h3 className="font-['Poppins',_sans-serif] text-4xl lg:text-5xl font-bold text-white mb-6">
            Committed to Excellence
          </h3>
          <p className="text-neutral-400 text-lg">
            We deliver top-tier LED display solutions backed by industry expertise, technical support, and a proven track record across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className="bg-blue-600/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                  <Icon className="w-7 h-7 text-blue-500" />
                </div>
                <h4 className="font-['Poppins',_sans-serif] text-xl font-bold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
