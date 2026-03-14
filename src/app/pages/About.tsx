import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const credibilityPoints = [
    "Certified technical installation",
    "Turnkey deployment process",
    "Dedicated maintenance programs",
    "UAE-wide operational capacity"
  ];

  return (
    <div className="bg-neutral-950 min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1740968984962-29087e16ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBsZWQlMjBzY3JlZW4lMjBwcmVzZW50YXRpb24lMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzczNDEyMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Corporate LED Screen Setup"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/20" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Poppins',_sans-serif] text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-1 w-20 bg-blue-600 mx-auto rounded-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Poppins',_sans-serif] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Precision Display Technology
              </h2>
              
              <div className="space-y-6 text-lg text-neutral-300 font-light leading-relaxed mb-10">
                <p>
                  AZTECH supplies and installs high-performance LED display systems across the United Arab Emirates. We focus on technical accuracy and reliable execution for commercial, retail, and event environments.
                </p>
                <p>
                  Our systems are built to meet rigorous operational standards. We handle the entire deployment process from structural planning to final calibration.
                </p>
              </div>

              <div className="space-y-4">
                {credibilityPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-neutral-900/50 p-4 rounded-lg border border-neutral-800"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    <span className="text-white font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="space-y-4 pt-12">
                  <div className="rounded-2xl overflow-hidden border border-neutral-800 aspect-[4/5]">
                    <img 
                      src="https://images.unsplash.com/photo-1545579905-9e4fcf9205eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGV2ZW50JTIwbGVkJTIwc2NyZWVuJTIwcmVudGFsfGVufDF8fHx8MTc3MzQxMjMzNnww&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Event Installation" 
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pb-12">
                  <div className="rounded-2xl overflow-hidden border border-neutral-800 aspect-[4/5]">
                    <img 
                      src="https://images.unsplash.com/photo-1766324488354-a189b706d3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGZhY2FkZSUyMGxlZCUyMHNjcmVlbnxlbnwxfHx8fDE3NzM0MTIzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Building Facade" 
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
