import { useEffect, useMemo, useRef, useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import ProductImage from "./ProductImage";

type Product = {
  name: string;
  spec: string;
  category: string;
  tag: string | null;
  image: string;
  fallback: string;
  desc: string;
};

const products: Product[] = [
  {
    name: "HD LED Display",
    spec: "P1.2 - P1.86",
    category: "indoor",
    tag: "Best Seller",
    image: "/images/products/hd-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/indoor-led-display-ts1689580033.jpg",
    desc: "Ultra-fine pixel pitch for control rooms and boardrooms.",
  },
  {
    name: "Indoor LED Display",
    spec: "P2 - P4",
    category: "indoor",
    tag: null,
    image: "/images/products/indoor-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/hd-led-display-ts1689580033.jpg",
    desc: "High-brightness indoor panels for malls and lobbies.",
  },
  {
    name: "Outdoor DIP Display",
    spec: "P8 - P16",
    category: "outdoor",
    tag: "Weatherproof",
    image: "/images/products/outdoor-dip.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/outdoor-smd-led-display-ts1689580033.jpg",
    desc: "IP65-rated for UAE outdoor environments.",
  },
  {
    name: "Outdoor SMD Display",
    spec: "P4 - P10",
    category: "outdoor",
    tag: null,
    image: "/images/products/outdoor-smd.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/outdoor-dip-led-display-ts1689580033.jpg",
    desc: "5000 nit brightness for direct sunlight visibility.",
  },
  {
    name: "Transparent Glass LED",
    spec: "P3.9 - P7.8",
    category: "specialty",
    tag: "Premium",
    image: "/images/products/transparent-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/front-service-led-display-ts1689580033.jpg",
    desc: "See-through display for retail storefronts.",
  },
  {
    name: "Curtain LED Display",
    spec: "P6 - P25",
    category: "specialty",
    tag: null,
    image: "/images/products/curtain-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/creative-led-display-ts1689580033.jpg",
    desc: "Flexible mesh screen for building facades.",
  },
  {
    name: "Floor LED Display",
    spec: "P3.9 - P6.25",
    category: "specialty",
    tag: "Interactive",
    image: "/images/products/floor-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/indoor-led-display-ts1689580033.jpg",
    desc: "Load-bearing interactive floor panels.",
  },
  {
    name: "Poster LED Display",
    spec: "P1.86 - P2.5",
    category: "indoor",
    tag: null,
    image: "/images/products/poster-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/hd-led-display-ts1689580033.jpg",
    desc: "Freestanding slim panel for retail and events.",
  },
  {
    name: "Perimeter LED Display",
    spec: "P6 - P10",
    category: "stadium",
    tag: null,
    image: "/images/products/perimeter-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/outdoor-smd-led-display-ts1689580033.jpg",
    desc: "Sports arena perimeter boards.",
  },
  {
    name: "Curve LED Display",
    spec: "P2.5 - P4",
    category: "specialty",
    tag: "Custom",
    image: "/images/products/curve-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/creative-led-display-ts1689580033.jpg",
    desc: "Concave and convex curved configurations.",
  },
  {
    name: "Spherical LED Display",
    spec: "P2.5 - P6",
    category: "creative",
    tag: "Signature",
    image: "/images/products/spherical-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/creative-led-display-ts1689580033.jpg",
    desc: "360-degree globe display for brand activations.",
  },
  {
    name: "Creative LED Display",
    spec: "Custom",
    category: "creative",
    tag: "Bespoke",
    image: "/images/products/creative-led.jpg",
    fallback: "https://www.ledscreenuae.com/gallery/curtain-led-display-ts1689580033.jpg",
    desc: "Any shape - triangles, hexagons, waves.",
  },
];

const categories = ["all", "indoor", "outdoor", "specialty", "stadium", "creative"];

export function ProductsSection() {
  const [sectionRef, visible] = useReveal(0.12);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCardsVisible(true);
      },
      { threshold: 0.08 },
    );

    const node = gridRef.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="products"
      className={`products-section bg-neutral-950 scroll-mt-24 ${visible ? "visible" : ""}`}
    >
      <div className="max-w-7xl mx-auto products-shell section-shell">
        <div className="products-section-header scroll-drift" data-scroll-speed="12">
          <div className={`products-heading max-w-3xl ${visible ? "visible" : ""}`}>
            <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3 reveal visible">
              Our LED Display Range
            </p>
            <h3 className="section-title-glow font-['Bebas_Neue',_sans-serif] text-[clamp(3.6rem,6vw,5.8rem)] leading-[0.92] tracking-[0.02em] text-white mb-6">
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
              Explore our comprehensive range of professional LED displays designed to meet
              diverse industry needs.
            </p>
          </div>
        </div>

        <div className="product-filters scroll-drift" data-scroll-speed="8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`product-filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "all"
                ? "All Products"
                : `${category.charAt(0).toUpperCase()}${category.slice(1)}`}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="products-grid scroll-drift" data-scroll-speed="-8">
          {filteredProducts.map((product, index) => (
            <div
              className={`product-card ${cardsVisible ? "visible" : ""}`}
              style={{
                transitionDelay: `${index * 0.06}s`,
                animation: cardsVisible ? "filterIn 0.4s cubic-bezier(0.22,1,0.36,1) both" : undefined,
              }}
              key={product.name}
            >
              <div className="pcard-img-wrap">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  className="pcard-img"
                />
                {product.tag && <span className="pcard-tag">{product.tag}</span>}
                <span className="pcard-category">{product.category}</span>
              </div>

              <div className="pcard-body">
                <div className="pcard-top">
                  <h3 className="pcard-name">{product.name}</h3>
                  <span className="pcard-spec">{product.spec}</span>
                </div>
                <p className="pcard-desc">{product.desc}</p>
                <div className="pcard-footer">
                  <button type="button" className="pcard-btn">
                    Get Quote -&gt;
                  </button>
                  <div className="pcard-dots">
                    <span className="pdot pdot-active" />
                    <span className="pdot" />
                    <span className="pdot" />
                  </div>
                </div>
              </div>

              <div className="pcard-glow-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




