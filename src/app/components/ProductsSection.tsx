import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useReveal } from "../../hooks/useReveal";

const products = [
  {
    title: "Indoor LED Screens",
    description: "High-resolution seamless displays for presentations and retail.",
    image: "https://images.unsplash.com/photo-1740968984962-29087e16ceff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBsZWQlMjBzY3JlZW4lMjBwcmVzZW50YXRpb24lMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzczNDEyMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Outdoor LED Screens",
    description: "Weatherproof and high-brightness for impactful advertising.",
    image: "https://images.unsplash.com/photo-1585504303098-9785dc784742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwdGltZXMlMjBzcXVhcmV8ZW58MXx8fHwxNzczNDEyMzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Rental LED Screens",
    description: "Quick setup displays for concerts, exhibitions, and events.",
    image: "https://images.unsplash.com/photo-1545579905-9e4fcf9205eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGV2ZW50JTIwbGVkJTIwc2NyZWVuJTIwcmVudGFsfGVufDF8fHx8MTc3MzQxMjMzNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Advertising LED Displays",
    description: "Engaging digital signage solutions for modern businesses.",
    image: "https://images.unsplash.com/photo-1772859022799-eb0e04d31794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2lnbmFnZSUyMGFkdmVydGlzaW5nJTIwc2NyZWVufGVufDF8fHx8MTc3MzQxMjMzNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Customized Solutions",
    description: "Curved, flexible, and unique LED screens for creative designs.",
    image: "https://images.unsplash.com/photo-1659297396001-fa8d15dcad1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ2ZWQlMjBsZWQlMjBzY3JlZW4lMjBkaXNwbGF5fGVufDF8fHx8MTc3MzQxMjMzNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ProductsSection() {
  const [sectionRef, visible] = useReveal(0.12);

  return (
    <section ref={sectionRef} id="products" className={`py-24 bg-neutral-950 scroll-mt-24 ${visible ? "visible" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`products-heading text-center max-w-3xl mx-auto mb-16 ${visible ? "visible" : ""}`}>
          <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3 reveal visible">
            Our LED Display Range
          </p>
          <h3 className="font-['Poppins',_sans-serif] text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="clip-wrap">
              <span className="clip-text" style={{ transitionDelay: "0.1s" }}>
                Products Built for
              </span>
            </span>
            <span className="clip-wrap">
              <span className="clip-text shimmer-text" style={{ transitionDelay: "0.25s" }}>
                Every Environment
              </span>
            </span>
          </h3>
          <p className={`text-neutral-400 text-lg reveal ${visible ? "visible" : ""}`}>
            Explore our comprehensive range of professional LED displays designed to meet diverse industry needs.
          </p>
        </div>

        <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`product-card group flex flex-col opacity-0 translate-y-8 ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-card-img w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="pixel-badge mb-4">Premium Series</span>
                <h4 className="font-['Poppins',_sans-serif] text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h4>
                <p className="text-neutral-400 mb-8 flex-grow">{product.description}</p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider group-hover:text-blue-500 transition-colors mt-auto"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
