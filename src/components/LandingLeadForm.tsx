"use client";
import { useState } from "react";
import { CheckCircle, Send, AlertCircle, Phone, ShieldCheck } from "lucide-react";
import { submitLead } from "@/lib/leads";

const packages = [
  "Magnificent Kashmir – 6D/5N",
  "Gulmarg Snow Adventure – 3D/2N",
  "Kashmir Honeymoon Special – 7D/6N",
  "Kashmir + Vaishno Devi – 9D/8N",
  "Custom / Not sure yet",
];

// Landing-page lead form for Meta ad traffic. Every submission lands in the
// CRM tagged "Meta Ads" so the sales team can prioritise paid leads.
export default function LandingLeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", pkg: "", month: "", adults: "2" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
        adults: parseInt(form.adults) || 1,
        notes: `Travel month: ${form.month || "not specified"} · Package: ${form.pkg || "not selected"}`,
        source: "Meta Ads – Kashmir Landing Page",
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
        <select
          value={form.pkg} onChange={(e) => setForm({ ...form, pkg: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-700"
        >
          <option value="">Which package interests you?</option>
          {packages.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text" placeholder="Travel month" value={form.month}
            onChange={(e) => setForm({ ...form, month: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          />
          <select
            value={form.adults} onChange={(e) => setForm({ ...form, adults: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-gray-700"
          >
            {["1", "2", "3", "4", "5", "6+"].map((n) => <option key={n} value={n}>{n} {n === "1" ? "traveller" : "travellers"}</option>)}
          </select>
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
