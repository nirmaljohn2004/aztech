import { Link } from "react-router";
import { ArrowRight, Maximize2 } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1640225720183-c990a117b205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBsZWQlMjBkaXNwbGF5fGVufDF8fHx8MTc3MzQxMjM0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Mall Digital Signage",
    category: "Retail"
  },
  {
    image: "https://images.unsplash.com/photo-1740968984962-29087e16ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGxlZCUyMHNjcmVlbnxlbnwxfHx8fDE3NzM0MTIzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Corporate Summit Stage",
    category: "Events"
  },
  {
    image: "https://images.unsplash.com/photo-1767555843619-19966e625551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjBsZWQlMjBzY3JlZW58ZW58MXx8fHwxNzczNDEyMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Expo Display Booth",
    category: "Exhibitions"
  },
  {
    image: "https://images.unsplash.com/photo-1693321562840-e977737831e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwc2NyZWVuJTIwbGVkfGVufDF8fHx8MTc3MzQxMjM0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Stadium Scoreboard",
    category: "Sports"
  },
  {
    image: "https://images.unsplash.com/photo-1766324488354-a189b706d3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGZhY2FkZSUyMGxlZCUyMHNjcmVlbnxlbnwxfHx8fDE3NzM0MTIzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Building Facade Display",
    category: "Outdoor"
  },
  {
    image: "https://images.unsplash.com/photo-1570653882140-d074bd791982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMGZlc3RpdmFsJTIwc3RhZ2UlMjBsZWR8ZW58MXx8fHwxNzczNDEyMzQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Music Festival Stage",
    category: "Entertainment"
  }
];

export function ProjectsGallery() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">Our Work</h2>
            <h3 className="font-['Poppins',_sans-serif] text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h3>
            <p className="text-neutral-400 text-lg">
              Our LED installations reflect our quality and professionalism. Explore some of our latest installations across various industries in the UAE.
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden md:inline-flex justify-center items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-blue-500 px-6 py-3 rounded-lg font-medium text-sm transition-all whitespace-nowrap"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-neutral-900 border border-neutral-800"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-1">{project.category}</div>
                  <h4 className="font-['Poppins',_sans-serif] text-xl font-bold text-white mb-2">{project.title}</h4>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 border border-white/20">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex justify-center items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-blue-500 px-8 py-4 rounded-lg font-medium text-base transition-all w-full sm:w-auto"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
