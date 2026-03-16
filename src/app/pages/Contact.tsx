import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-400 font-semibold">Get in Touch</p>
          <h1 className="section-title-glow mt-3 font-['Bebas_Neue',_sans-serif] text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.92] tracking-[0.02em] text-white">
            <span>Contact </span>
            <span className="shimmer-text">AZTECH</span>
          </h1>
          <p className="mt-2 text-neutral-300 max-w-2xl">
            Need a quote or support for LED displays? Our team is here to help with design, installation, and after-sales service.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
            <div className="flex items-center gap-3 text-blue-400 mb-2"><MapPin className="w-5 h-5" /><span className="text-sm font-semibold">Office</span></div>
            <p className="text-neutral-300 text-sm">Business Bay, Dubai, United Arab Emirates</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
            <div className="flex items-center gap-3 text-blue-400 mb-2"><Phone className="w-5 h-5" /><span className="text-sm font-semibold">Phone</span></div>
            <p className="text-neutral-300 text-sm">+971 50 123 4567</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 md:col-span-2">
            <div className="flex items-center gap-3 text-blue-400 mb-2"><Mail className="w-5 h-5" /><span className="text-sm font-semibold">Email</span></div>
            <p className="text-neutral-300 text-sm">info@ledscreenuae.com</p>
            <p className="text-neutral-300 mt-1 text-sm">sales@ledscreenuae.com</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold">Office</p>
            <h2 className="section-title-glow mt-1 font-['Bebas_Neue',_sans-serif] text-[clamp(1.9rem,3vw,2.4rem)] leading-[0.95] tracking-[0.02em] text-white">
              <span>Head</span><span className="shimmer-text">quarters</span>
            </h2>
            <p className="mt-2 text-neutral-300 text-sm">Business Bay, Dubai, United Arab Emirates</p>
          </div>
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-semibold">Support</p>
            <h2 className="section-title-glow mt-1 font-['Bebas_Neue',_sans-serif] text-[clamp(1.9rem,3vw,2.4rem)] leading-[0.95] tracking-[0.02em] text-white">
              <span>Call or </span><span className="shimmer-text">Email</span>
            </h2>
            <p className="mt-2 text-neutral-300 text-sm">Phone: +971 50 123 4567</p>
            <p className="mt-1 text-neutral-300 text-sm">Email: info@ledscreenuae.com</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
          <h2 className="section-title-glow font-['Bebas_Neue',_sans-serif] text-[clamp(1.9rem,3vw,2.4rem)] leading-[0.95] tracking-[0.02em] text-white">
            <span>Connect with our </span><span className="shimmer-text">Team</span>
          </h2>
          <p className="mt-2 text-neutral-300 text-sm">Use the form on our Get Quote page for project estimation and detailed proposals. For general inquiries, send us a message and we’ll respond quickly.</p>
        </div>
      </div>
    </div>
  );
}
