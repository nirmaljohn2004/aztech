import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const allProjects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1740968984962-29087e16ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGxlZCUyMHNjcmVlbnxlbnwxfHx8fDE3NzM0MTIzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Corporate Summit Stage",
    category: "Events"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1640225720183-c990a117b205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBsZWQlMjBkaXNwbGF5fGVufDF8fHx8MTc3MzQxMjM0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Retail Mall Signage",
    category: "Commercial"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1585504303098-9785dc784742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwdGltZXMlMjBzcXVhcmV8ZW58MXx8fHwxNzczNDEyMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Commercial Billboard",
    category: "Outdoor"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1766324488354-a189b706d3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGZhY2FkZSUyMGxlZCUyMHNjcmVlbnxlbnwxfHx8fDE3NzM0MTIzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Architectural Building Facade",
    category: "Installation"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1767555843619-19966e625551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjBsZWQlMjBzY3JlZW58ZW58MXx8fHwxNzczNDEyMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Expo Display Booth",
    category: "Exhibitions"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1570653882140-d074bd791982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMGZlc3RpdmFsJTIwc3RhZ2UlMjBsZWR8ZW58MXx8fHwxNzczNDEyMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Music Festival Stage",
    category: "Events"
  }
];

export default function Projects() {
  const categories = [
    "Corporate event stages and summits",
    "Retail mall digital signage",
    "Outdoor commercial billboards",
    "Architectural building facades"
  ];

  return (
    <div className="bg-neutral-950 min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1764257241003-e3464685770f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGNvbmNlcnQlMjBsZWQlMjBzY3JlZW4lMjBzdGFnZXxlbnwxfHx8fDE3NzM0MTIzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Large Concert LED Stage"
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
            Our Work
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
          
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Text Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Poppins',_sans-serif] text-3xl md:text-4xl font-bold text-white mb-6">
                  Proven Execution
                </h2>
                <p className="text-neutral-400 font-light text-lg mb-8 leading-relaxed">
                  We deliver reliable LED installations tailored to the specific demands of each environment. Our portfolio reflects a strict adherence to structural safety and visual precision.
                </p>
                <ul className="space-y-4 mb-10">
                  {categories.map((cat, index) => (
                    <li key={index} className="flex items-start gap-3 text-neutral-300">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{cat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Project Gallery Grid */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {allProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative rounded-xl overflow-hidden aspect-square border border-neutral-800 bg-neutral-900"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-1">{project.category}</p>
                        <h3 className="font-['Poppins',_sans-serif] text-xl font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
