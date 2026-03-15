import { useEffect, useMemo, useRef, useState } from "react";
import { useReveal } from "../../hooks/useReveal";

type Project = {
  id: number;
  category: string;
  title: string;
  location: string;
  size: "LARGE" | "SMALL";
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    category: "MALL",
    title: "Dubai Mall LED Wall",
    location: "Dubai, UAE",
    size: "LARGE",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: 2,
    category: "OUTDOOR",
    title: "City Billboard Display",
    location: "Abu Dhabi, UAE",
    size: "SMALL",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 3,
    category: "CORPORATE",
    title: "Hotel Lobby Screen",
    location: "Business Bay, Dubai",
    size: "SMALL",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 4,
    category: "STADIUM",
    title: "Sports Arena Perimeter",
    location: "Sharjah, UAE",
    size: "SMALL",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 5,
    category: "EVENTS",
    title: "Concert Stage LED Wall",
    location: "Expo City, Dubai",
    size: "LARGE",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 6,
    category: "GOVERNMENT",
    title: "ADNOC HQ Display",
    location: "Abu Dhabi, UAE",
    size: "SMALL",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 7,
    category: "OUTDOOR",
    title: "Roadside Digital Signage",
    location: "Sheikh Zayed Road",
    size: "SMALL",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 8,
    category: "MALL",
    title: "Retail Store Display",
    location: "Mall of Emirates",
    size: "SMALL",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=90",
  },
];

const filters = ["All", "Mall", "Outdoor", "Corporate", "Stadium", "Events", "Government"];
const marqueeClients = [
  "Dubai Mall",
  "ADNOC",
  "RTA",
  "Carrefour",
  "Oberoi Hotels",
  "Zulekha Hospital",
  "Gems Education",
  "Rove Hotels",
  "Dubai Cricket Stadium",
  "Emaar",
];

export function ProjectsGallery() {
  const [sectionRef, visible] = useReveal(0.12);
  const [tilesVisible, setTilesVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const tileRefs = useRef<Array<HTMLDivElement | null>>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTilesVisible(true);
      },
      { threshold: 0.08 },
    );

    const node = gridRef.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter.toUpperCase());
  }, [activeFilter]);

  const handleTilt = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const tile = tileRefs.current[index];
    if (!tile) return;

    const rect = tile.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    tile.style.transform = `scale(1.02) rotateY(${xPct * 5}deg) rotateX(${yPct * -3}deg) translateZ(0)`;
    tile.style.transition = "transform 0.1s ease";
  };

  const resetTilt = (index: number) => {
    const tile = tileRefs.current[index];
    if (!tile) return;
    tile.style.transform = tilesVisible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.96)";
    tile.style.transition = "transform 0.6s cubic-bezier(0.22,1,0.36,1)";
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`projects-section bg-neutral-950 scroll-mt-24 ${visible ? "visible" : ""}`}
    >
      <div className="projects-shell section-shell">
      <div className="projects-header scroll-drift" data-scroll-speed="12">
        <div className="projects-header-left">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            Featured Projects
          </div>
          <h2 className="projects-title">
            <span className="clip-wrap">
              <span
                className={`clip-text ${visible ? "visible" : ""}`}
                style={{ transitionDelay: "0.05s" }}
              >
                Landmark
              </span>
            </span>
            <span className="clip-wrap">
              <span
                className={`clip-text shimmer-text ${visible ? "visible" : ""}`}
                style={{ transitionDelay: "0.2s" }}
              >
                Installations
              </span>
            </span>
          </h2>
          <p className="projects-subtitle">
            500+ completed LED projects across the UAE and GCC - from luxury hotels to
            government infrastructure.
          </p>
        </div>

        <div className="projects-header-right">
          <div className="project-counter">
            <span className="counter-num">500</span>
            <span className="counter-plus">+</span>
            <span className="counter-label">Projects Delivered</span>
          </div>
          <a href="#contact" className="projects-cta-btn">
            View All Projects
            <span className="btn-arrow-wrap">-&gt;</span>
          </a>
        </div>
      </div>

      <div className="project-filters scroll-drift" data-scroll-speed="8">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div ref={gridRef} className="projects-bento scroll-drift" data-scroll-speed="-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(element) => {
              tileRefs.current[index] = element;
            }}
            className={`bento-tile ${project.size === "LARGE" ? "bento-large" : "bento-small"} ${tilesVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
            onMouseMove={(event) => handleTilt(event, index)}
            onMouseLeave={() => resetTilt(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="bento-img"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src =
                  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80";
              }}
            />

            <div className="bento-bar">
              <span className="bento-category">{project.category}</span>
              <span className="bento-location">{project.location}</span>
            </div>

            <div className="bento-overlay">
              <div className="bento-overlay-content">
                <span className="overlay-category">{project.category}</span>
                <h3 className="overlay-title">{project.title}</h3>
                <p className="overlay-location">
                  <span className="location-dot" />
                  {project.location}
                </p>
                <button type="button" className="overlay-btn">
                  View Project -&gt;
                </button>
              </div>
            </div>

            <div className="bento-expand">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 13L13 1M13 1H7M13 1V7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-marquee-wrap scroll-drift" data-scroll-speed="10">
        <div className="projects-marquee">
          {[...marqueeClients, ...marqueeClients].map((name, index) => (
            <span key={`${name}-${index}`} className="marquee-item">
              <span className="marquee-dot" />
              {name}
            </span>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
