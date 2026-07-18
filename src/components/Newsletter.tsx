"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitLead } from "@/lib/leads";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError("");
    setSubmitting(true);
    try {
      await submitLead({
        name: name || email,
        email,
        notes: "Newsletter signup",
        source: "Newsletter",
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-14 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10">
            {/* Left */}
            <div className="text-center lg:text-left">
              <p className="text-orange-100 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2">
                Stay Updated
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">
                Never Miss an Adventure!
              </h2>
              <p className="text-orange-100 text-sm sm:text-lg max-w-md hidden sm:block">
                Subscribe to get exclusive deals, early bird offers, travel tips and the latest trip announcements straight to your inbox.
              </p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
                {["Early Bird Discounts", "New Trip Alerts", "Travel Tips"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-white" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="w-full lg:w-auto lg:min-w-[400px]">
              {submitted ? (
                <div className="bg-white rounded-2xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="text-gray-900 font-bold text-xl">You&#39;re in!</p>
                  <p className="text-gray-500 mt-1">Welcome to the Shera Travels family. Get ready for your Kashmir adventure!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-xl">
                  <p className="text-gray-800 font-bold text-lg mb-4">
                    Join 5,000+ Happy Travellers
                  </p>
                  <div className="mb-4">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Address"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>
                  {error && (
                    <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 border border-red-100 rounded-xl px-3 py-2 mb-4">
                      <AlertCircle className="w-4 h-4 shrink-0" /> {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Subscribing..." : "Subscribe Now — It's Free!"}
                  </button>
                  <p className="text-gray-400 text-xs text-center mt-3">
                    No spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
