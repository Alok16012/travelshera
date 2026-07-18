"use client";
import { useState } from "react";
import { CheckCircle, Send, AlertCircle, Phone, ShieldCheck, MapPin } from "lucide-react";
import { submitLead } from "@/lib/leads";

const packages = [
  "Magnificent Kashmir – 6D/5N",
  "Gulmarg Snow Adventure – 3D/2N",
  "Kashmir Honeymoon Special – 7D/6N",
  "Kashmir + Vaishno Devi – 9D/8N",
  "Custom / Not sure yet",
];

type Props = {
  compact?: boolean;
  // When set, the package is auto-fetched from the current page and shown
  // locked (no dropdown) — used on individual trip pages.
  lockedPackage?: string;
  // How the lead is tagged in the CRM.
  source?: string;
};

// Lead form shared by the ad landing page and each trip page. On the landing
// page the visitor picks a package; on a trip page the package is auto-filled.
export default function LandingLeadForm({
  compact = false,
  lockedPackage,
  source = "Meta Ads – Kashmir Landing Page",
}: Props) {
  const [form, setForm] = useState({ name: "", phone: "", pkg: lockedPackage || "", travelDate: "", adults: "2" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await submitLead({
        name: form.name,
        phone: form.phone,
        whatsapp: form.phone,
        destination: form.pkg || "Kashmir Tour",
        travel_date: form.travelDate || undefined,
        adults: parseInt(form.adults) || 1,
        notes: `Expected travel date: ${form.travelDate || "not specified"} · Package: ${form.pkg || "not selected"}`,
        source,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call or WhatsApp us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You! 🎉</h3>
        <p className="text-gray-600 mb-5">
          Our Kashmir expert will call you within <span className="font-semibold text-gray-900">15 minutes</span> with your custom quote &amp; best price.
        </p>
        <a
          href="https://wa.me/919149406965?text=Hi%2C%20I%20just%20enquired%20about%20a%20Kashmir%20tour%20package"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all"
        >
          Chat on WhatsApp Now
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-7">
      {!compact && (
        <div className="text-center mb-5">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Get Your Free Quote</h3>
          <p className="text-gray-500 text-sm mt-1">Fill this &amp; get the best price in 15 minutes</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text" placeholder="Your Name *" required value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
        <input
          type="tel" placeholder="Mobile / WhatsApp Number *" required value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
        {lockedPackage ? (
          <div>
            <label className="block text-[11px] font-semibold text-gray-500 mb-1 uppercase tracking-wide">Your selected package</label>
            <div className="w-full border border-orange-200 bg-orange-50 rounded-xl px-4 py-3 text-sm text-gray-800 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
              <span className="font-semibold truncate">{lockedPackage}</span>
            </div>
          </div>
        ) : (
          <select
            value={form.pkg} onChange={(e) => setForm({ ...form, pkg: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-700"
          >
            <option value="">Which package interests you?</option>
            {packages.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        )}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-gray-500 mb-1 uppercase tracking-wide">Expected travel date</label>
            <input
              type="date" value={form.travelDate} min={today}
              onChange={(e) => setForm({ ...form, travelDate: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-gray-500 mb-1 uppercase tracking-wide">Travellers</label>
            <select
              value={form.adults} onChange={(e) => setForm({ ...form, adults: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-700"
            >
              {["1", "2", "3", "4", "5", "6+"].map((n) => <option key={n} value={n}>{n} {n === "1" ? "traveller" : "travellers"}</option>)}
            </select>
          </div>
        </div>
        {error && (
          <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 border border-red-100 rounded-xl px-3 py-2.5">
            <AlertCircle className="w-4 h-4 shrink-0" /> {error}
          </div>
        )}
        <button
          type="submit" disabled={submitting}
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-200 text-base"
        >
          {submitting ? "Sending…" : <><Send className="w-5 h-5" /> Get Best Price Now</>}
        </button>
        <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-gray-500">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-green-500" /> 100% Safe</span>
          <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-orange-500" /> Call back in 15 min</span>
        </div>
      </form>
    </div>
  );
}
