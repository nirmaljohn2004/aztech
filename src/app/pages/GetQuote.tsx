import { useState } from "react";

export default function GetQuote() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Thanks! We received your quote request and will contact you shortly.");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-400 font-semibold">Get Quote</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Request a Free LED Quotation</h1>
          <p className="mt-2 text-neutral-300 max-w-2xl">
            Tell us more about your installation, venue, and timeline. Our engineers will provide a tailored quote for indoor/outdoor LED display solutions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
          <input className="p-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white" placeholder="Your Name" required />
          <input className="p-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white" type="email" placeholder="Your Email" required />
          <input className="p-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white sm:col-span-2" placeholder="Company" />
          <input className="p-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white sm:col-span-2" placeholder="Project Location" required />
          <textarea className="p-3 rounded-lg border border-neutral-700 bg-neutral-900 text-white sm:col-span-2 h-32" placeholder="Project Details" required />
          <button type="submit" className="sm:col-span-2 rounded-lg bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-500 transition">Submit Quote Request</button>
          {status && <p className="sm:col-span-2 text-sm text-emerald-400">{status}</p>}
        </form>
      </div>
    </div>
  );
}
