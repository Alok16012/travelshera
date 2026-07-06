"use client";
import { useState } from "react";
import { CheckCircle, Send, AlertCircle } from "lucide-react";
import { submitLead } from "@/lib/leads";

// Reusable lead-capture form for the service pages (Air Ticketing, Hotel,
// Cab, Visa). Every submission creates a lead in the CRM, tagged with the
// service so staff can see where the enquiry came from.
export default function ServiceEnquiryForm({ service }: { service: string }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
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
        email: form.email,
        destination: `${service} enquiry`,
        notes: form.message,
        source: "Website",
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
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <p className="font-bold text-gray-900 text-lg">Enquiry Sent!</p>
        <p className="text-gray-500 text-sm mt-1">Our team will call you back shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-bold text-gray-900 text-lg mb-1">Request a Callback</h3>
      <p className="text-gray-500 text-sm mb-4">Share your details for {service.toLowerCase()} and we&apos;ll get back to you fast.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text" placeholder="Your Full Name *" required value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
        <input
          type="tel" placeholder="Phone Number *" required value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
        <input
          type="email" placeholder="Email (optional)" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
        />
        <textarea
          placeholder="Tell us what you need (dates, city, passengers…)" rows={3} value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 resize-none"
        />
        {error && (
          <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 border border-red-100 rounded-xl px-3 py-2.5">
            <AlertCircle className="w-4 h-4 shrink-0" /> {error}
          </div>
        )}
        <button
          type="submit" disabled={submitting}
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all hover:shadow-lg text-sm"
        >
          {submitting ? "Sending…" : <><Send className="w-4 h-4" /> Send Enquiry</>}
        </button>
      </form>
    </div>
  );
}
