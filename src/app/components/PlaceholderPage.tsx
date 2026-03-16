import { Construction } from "lucide-react";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-neutral-950 text-white p-8 text-center">
      <Construction className="w-20 h-20 text-blue-500 mb-6" />
      <h1 className="section-title-glow font-['Bebas_Neue',_sans-serif] text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.92] tracking-[0.02em] mb-4">
        <span>{title} </span>
        <span className="shimmer-text">Page</span>
      </h1>
      <p className="text-neutral-400 text-lg max-w-lg">
        This page is currently under development. Please check back later or explore the Home page to learn more about AZTECH.
      </p>
    </div>
  );
}
