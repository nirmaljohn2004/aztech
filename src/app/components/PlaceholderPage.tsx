import { Construction } from "lucide-react";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-neutral-950 text-white p-8 text-center">
      <Construction className="w-20 h-20 text-blue-500 mb-6" />
      <h1 className="text-4xl font-['Poppins',_sans-serif] font-bold mb-4">{title}</h1>
      <p className="text-neutral-400 text-lg max-w-lg">
        This page is currently under development. Please check back later or explore the Home page to learn more about AZTECH.
      </p>
    </div>
  );
}
