"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Phone, MessageCircle, CheckCircle, Clock } from "lucide-react";

const WA = "https://wa.me/919149406965?text=Hi%2C%20I%20want%20the%20special%20Kashmir%20offer";
const CALL = "tel:+919149406965";

// Engagement popup for the ad landing page. Shows once per session,
// a few seconds after landing, and pushes the visitor to the lead form
// or WhatsApp. Dismissible; never blocks the page permanently.
export default function LandingOfferPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("kashmirOfferPopupShown")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("kashmirOfferPopupShown", "1");
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const close = () => setOpen(false);

  const goToForm = () => {
    close();
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Special Kashmir offer"
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl animate-[popIn_.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative h-36 sm:h-44">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
            alt="Kashmir Valley" fill className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <button
            onClick={close}
            aria-label="Close offer"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-4 right-4">
            <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
              <Clock className="w-3 h-3" /> Limited-time offer
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
            Wait! Get <span className="text-orange-500">Extra ₹1,000 OFF</span> on Your Kashmir Trip
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Book today &amp; our Kashmir expert will call you in 15 minutes with your lowest custom quote.
          </p>

          <ul className="mt-4 space-y-2">
            {["Packages from ₹8,999 all-inclusive", "Free cancellation up to 15 days*", "No advance needed for quote"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> {f}
              </li>
            ))}
          </ul>

          <button
            onClick={goToForm}
            className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-200"
          >
            Claim My Discount →
          </button>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href={CALL}
              className="flex items-center justify-center gap-2 border border-gray-200 hover:border-orange-300 text-gray-700 hover:text-orange-600 font-semibold py-2.5 rounded-xl text-sm transition"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-xl text-sm transition"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <p className="text-center text-[11px] text-gray-400 mt-3">
            Trusted by 5,000+ travellers · 4.9★ rated
          </p>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
