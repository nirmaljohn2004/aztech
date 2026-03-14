import { ArrowRight, CheckCircle2, MonitorPlay, Zap, ShieldCheck, MapPin, Wrench } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-neutral-950 overflow-hidden pt-20">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1764257241003-e3464685770f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGNvbmNlcnQlMjBsZWQlMjBzY3JlZW4lMjBzdGFnZXxlbnwxfHx8fDE3NzM0MTIzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Premium LED Screen Setup at a Large Concert Event"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Leading LED Display Supplier in UAE
            </div>
            <h1 className="font-['Poppins',_sans-serif] text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Premium LED Screen Solutions in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">UAE</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 mb-10 leading-relaxed font-light max-w-xl">
              Indoor & Outdoor LED Displays for Events, Advertising & Commercial Spaces. High-resolution technology with professional installation and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-neutral-800 hover:border-neutral-700 px-8 py-4 rounded-lg font-medium text-lg transition-all"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-neutral-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>UAE-Wide</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Glowing effect behind image */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full" />
            
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1545579905-9e4fcf9205eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGV2ZW50JTIwbGVkJTIwc2NyZWVuJTIwcmVudGFsfGVufDF8fHx8MTc3MzQxMjMzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="LED Screen Display showing vibrant colors"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-6 rounded-xl shadow-xl flex items-center gap-4"
            >
              <div className="bg-blue-600/20 p-3 rounded-lg text-blue-500">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-['Poppins',_sans-serif]">500+</div>
                <div className="text-neutral-400 text-sm font-medium">Projects Delivered</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
