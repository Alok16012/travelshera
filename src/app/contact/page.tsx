"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, FileText } from "lucide-react";

const faqs = [
  { q: "How do I book a tour with Shera Travels?", a: "Click 'Know More' on any tour package, fill the enquiry form, and our team will call you within a few hours to confirm your booking and discuss customization options." },
  { q: "What is the cancellation policy?", a: "Full refund if cancelled 30+ days before tour. 50% refund for 15-30 days. No refund within 15 days. Travel insurance is strongly recommended." },
  { q: "Can you customize a tour package for us?", a: "Absolutely! Customized packages are our specialty. We tailor every itinerary — number of days, hotels, destinations, and activities — to match your budget and preferences." },
  { q: "Is Kashmir safe to visit?", a: "Yes! Kashmir is safe and very welcoming for tourists. The local administration ensures tourist safety and millions visit every year without any issues. We have been operating tours here for over 10 years." },
  { q: "Do you offer Air Ticketing and Hotel Booking separately?", a: "Yes! Apart from tour packages, we offer Air Ticketing, Hotel Booking, Cab Services, and Visa Assistance as standalone services. Contact us for best rates." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0f172a] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">We&apos;re Here to Help</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a question about Kashmir? Need a customized tour? Our team at Shera Travels is available 7 days a week.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT: Form */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Our team will get back to you within 24 hours. Check your inbox!</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-orange-500 font-semibold hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                        <input type="text" required placeholder="Your full name"
                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                        <input type="tel" required placeholder="+91 XXXXX XXXXX"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email Address *</label>
                      <input type="email" required placeholder="your@email.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Subject</label>
                      <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition">
                        <option value="">Select a subject</option>
                        <option>Kashmir Tour Enquiry</option>
                        <option>Ladakh Tour Enquiry</option>
                        <option>Pilgrimage Package</option>
                        <option>Honeymoon Package</option>
                        <option>Air Ticketing</option>
                        <option>Hotel Booking</option>
                        <option>Cab Services</option>
                        <option>Visa Assistance</option>
                        <option>Custom / Private Tour</option>
                        <option>Cancellation / Refund</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message *</label>
                      <textarea required rows={5} placeholder="Tell us how we can help..."
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition resize-none" />
                    </div>
                    <button type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition hover:shadow-lg hover:shadow-orange-200">
                      <Send className="w-5 h-5" /> Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-orange-50 transition">
                      <span className="font-semibold text-gray-800 text-sm pr-4">{faq.q}</span>
                      <span className="text-orange-500 text-lg shrink-0">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-gray-600 text-sm border-t border-gray-100 pt-3 leading-relaxed">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Info */}
          <div className="lg:w-80 shrink-0 space-y-4">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-5">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Phone 1", value: "+91 91494 06965", href: "tel:+919149406965" },
                  { icon: Phone, label: "Phone 2", value: "+91 98589 66518", href: "tel:+919858966518" },
                  { icon: Mail, label: "Email", value: "info@sheratravels.com", href: "mailto:info@sheratravels.com" },
                  { icon: MapPin, label: "Office", value: "Radio Colony Lawaypora, Srinagar\nJammu & Kashmir – 190017", href: "#" },
                  { icon: FileText, label: "GST No.", value: "01KODPS7232P1ZE", href: "#" },
                  { icon: Clock, label: "Hours", value: "Mon–Sat: 9 AM – 8 PM\nSun: 10 AM – 6 PM", href: "#" },
                ].map((item) => (
                  <a key={item.label} href={item.href}
                    className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition">
                      <item.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{item.label}</p>
                      <p className="text-gray-800 text-sm font-medium whitespace-pre-line">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/919149406965" target="_blank"
              className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5 transition group">
              <MessageCircle className="w-10 h-10 shrink-0" />
              <div>
                <p className="font-bold text-lg">Chat on WhatsApp</p>
                <p className="text-green-100 text-sm">Get instant reply — fastest support!</p>
              </div>
            </a>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-52">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-orange-500 mx-auto mb-2" />
                  <p className="text-gray-600 font-semibold">Radio Colony Lawaypora</p>
                  <p className="text-gray-400 text-sm">Srinagar, J&K – 190017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
