import { Link } from "react-router";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-neutral-900 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">About Us</h2>
            <h3 className="font-['Poppins',_sans-serif] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Professional LED Partner
            </h3>
            <p className="text-xl text-neutral-300 leading-relaxed font-light mb-8">
              AZTECH is a professional supplier of high‑quality LED display solutions, serving events, advertising, retail, and commercial projects across the UAE.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-white hover:text-blue-400 font-medium text-lg transition-colors group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 w-full grid grid-cols-2 gap-4"
          >
             <div className="space-y-4">
               <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-sm flex flex-col items-center justify-center text-center aspect-square mt-8">
                  <Star className="w-8 h-8 text-blue-500 mb-4" />
                  <div className="text-3xl font-['Poppins',_sans-serif] font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-neutral-400 font-medium uppercase tracking-wider">Years Exp.</div>
               </div>
               <div className="bg-neutral-950/50 rounded-2xl border border-neutral-800 overflow-hidden shadow-sm aspect-square">
                 <img src="https://images.unsplash.com/photo-1740968984962-29087e16ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBsZWQlMjBzY3JlZW4lMjBwcmVzZW50YXRpb24lMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzczNDEyMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Corporate Event" className="w-full h-full object-cover" />
               </div>
             </div>
             <div className="space-y-4">
               <div className="bg-neutral-950/50 rounded-2xl border border-neutral-800 overflow-hidden shadow-sm aspect-square">
                 <img src="https://images.unsplash.com/photo-1585504303098-9785dc784742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwdGltZXMlMjBzcXVhcmV8ZW58MXx8fHwxNzczNDEyMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Outdoor Display" className="w-full h-full object-cover" />
               </div>
               <div className="bg-blue-600 p-6 rounded-2xl border border-blue-500 shadow-sm flex flex-col items-center justify-center text-center aspect-square">
                  <div className="text-4xl font-['Poppins',_sans-serif] font-bold text-white mb-2">99%</div>
                  <div className="text-sm text-blue-100 font-medium uppercase tracking-wider">Client Retention</div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
