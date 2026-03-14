import { motion } from "motion/react";
import { ArrowRight, Monitor, SunMedium, LayoutGrid, Megaphone, Wrench } from "lucide-react";
import { Link } from "react-router";

const detailedProducts = [
  {
    id: "indoor",
    title: "Indoor LED Screens",
    description: "High-resolution seamless displays optimized for close viewing in corporate and retail spaces.",
    image: "https://images.unsplash.com/photo-1740968984962-29087e16ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBsZWQlMjBzY3JlZW4lMjBwcmVzZW50YXRpb24lMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzczNDEyMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Monitor,
  },
  {
    id: "outdoor",
    title: "Outdoor LED Screens",
    description: "Weatherproof, high-brightness panels engineered for clear visibility in direct sunlight.",
    image: "https://images.unsplash.com/photo-1585504303098-9785dc784742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwdGltZXMlMjBzcXVhcmV8ZW58MXx8fHwxNzczNDEyMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: SunMedium,
  },
  {
    id: "rental",
    title: "Rental LED Screens",
    description: "Modular, quick-assembly systems designed for temporary event and exhibition deployment.",
    image: "https://images.unsplash.com/photo-1545579905-9e4fcf9205eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGV2ZW50JTIwbGVkJTIwc2NyZWVuJTIwcmVudGFsfGVufDF8fHx8MTc3MzQxMjMzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: LayoutGrid,
  },
  {
    id: "advertising",
    title: "Advertising LED Displays",
    description: "Durable digital signage solutions built for continuous commercial operation.",
    image: "https://images.unsplash.com/photo-1772859022799-eb0e04d31794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2lnbmFnZSUyMGFkdmVydGlzaW5nJTIwc2NyZWVufGVufDF8fHx8MTc3MzQxMjMzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Megaphone,
  },
  {
    id: "custom",
    title: "Customized Solutions",
    description: "Bespoke flexible and curved configurations for unique architectural integration.",
    image: "https://images.unsplash.com/photo-1659297396001-fa8d15dcad1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ2ZWQlMjBsZWQlMjBzY3JlZW4lMjBkaXNwbGF5fGVufDF8fHx8MTc3MzQxMjMzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Wrench,
  },
];

export default function Products() {
  return (
    <div className="bg-neutral-950 min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1640225720183-c990a117b205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBsZWQlMjBkaXNwbGF5fGVufDF8fHx8MTc3MzQxMjM0MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Products Header Background"
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
            Our Products
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
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
              We offer a comprehensive portfolio of professional LED display technology. Each product line is built for reliability, visual clarity, and seamless integration into its intended environment.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {detailedProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex flex-col sm:flex-row gap-6 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-full sm:w-2/5 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border border-neutral-800">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-grow py-2">
                    <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-blue-500/20">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="font-['Poppins',_sans-serif] text-2xl font-bold text-white mb-3">
                      {product.title}
                    </h3>
                    <p className="text-neutral-400 font-light leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <div className="mt-auto">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors uppercase tracking-wider"
                      >
                        Inquire Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
