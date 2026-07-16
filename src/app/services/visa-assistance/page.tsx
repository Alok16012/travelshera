import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ServiceEnquiryForm from "@/components/ServiceEnquiryForm";
import { FileText, CheckCircle, Phone, MessageCircle, ArrowLeft, Globe, Clock, Shield, Users } from "lucide-react";

const visaTypes = [
  {
    icon: "🇮🇳",
    title: "India Tourist Visa",
    subtitle: "For International Travellers",
    desc: "We assist foreign nationals in obtaining India Tourist Visa (e-Visa and sticker visa) for visiting Kashmir, Ladakh, and other destinations.",
    processing: "3–7 working days",
    validity: "30 / 90 / 180 days",
    color: "border-orange-200 bg-orange-50",
  },
  {
    icon: "🌍",
    title: "International Tourist Visa",
    subtitle: "For Indian Travellers Abroad",
    desc: "Planning to travel internationally? We assist Indian nationals with visa applications for major tourist destinations worldwide.",
    processing: "5–15 working days",
    validity: "Varies by country",
    color: "border-blue-200 bg-blue-50",
  },
  {
    icon: "💼",
    title: "Business Visa",
    subtitle: "For Corporate Travellers",
    desc: "Complete documentation assistance for business visa applications — invitation letters, company documents, and financial proofs.",
    processing: "7–14 working days",
    validity: "Varies by country",
    color: "border-purple-200 bg-purple-50",
  },
  {
    icon: "🎓",
    title: "Student Visa",
    subtitle: "For Students Going Abroad",
    desc: "Guidance and documentation support for student visa applications — admission letters, financial proofs, and interview preparation.",
    processing: "15–30 working days",
    validity: "Duration of course",
    color: "border-green-200 bg-green-50",
  },
];

const popularCountries = [
  { country: "Dubai / UAE", flag: "🇦🇪", type: "Tourist & Business", processing: "3–5 days" },
  { country: "Thailand", flag: "🇹🇭", type: "Tourist", processing: "3–5 days" },
  { country: "Singapore", flag: "🇸🇬", type: "Tourist & Business", processing: "5–7 days" },
  { country: "Malaysia", flag: "🇲🇾", type: "Tourist", processing: "5–7 days" },
  { country: "Sri Lanka", flag: "🇱🇰", type: "Tourist", processing: "3–5 days" },
  { country: "Nepal", flag: "🇳🇵", type: "Tourist (on arrival)", processing: "1–2 days" },
  { country: "UK / Schengen", flag: "🇬🇧", type: "Tourist & Business", processing: "15–30 days" },
  { country: "USA / Canada", flag: "🇺🇸", type: "Tourist & Business", processing: "30–60 days" },
];

const howItWorks = [
  { step: "01", title: "Consultation", desc: "Share your destination, travel dates, and purpose of visit. We advise on the right visa type." },
  { step: "02", title: "Document Checklist", desc: "We provide a precise checklist of all required documents based on your profile and destination country." },
  { step: "03", title: "Application Filing", desc: "We prepare and review your application, fill online forms, and submit to the consulate / embassy." },
  { step: "04", title: "Visa Received", desc: "We track your application and deliver the visa (e-visa or sticker) as soon as it is approved." },
];

const docChecklist = [
  "Valid passport (6+ months validity)",
  "Recent passport-size photographs",
  "Confirmed flight tickets",
  "Hotel booking confirmation",
  "Bank statements (last 3–6 months)",
  "Income proof / ITR / salary slips",
  "Travel insurance certificate",
  "Cover letter (if required)",
];

const faqs = [
  { q: "Do you guarantee visa approval?", a: "No agency can guarantee visa approval as it is solely at the discretion of the respective embassy. However, we ensure your application is complete, accurate, and presented in the best possible manner to maximize approval chances." },
  { q: "What happens if my visa is rejected?", a: "In case of rejection, we analyze the reason and advise on whether to re-apply. Our fees are non-refundable after submission but government fees may be partially refunded depending on the country." },
  { q: "How early should I apply?", a: "We recommend applying at least 4–6 weeks before travel. For USA, Canada, and Schengen countries, apply 8–12 weeks in advance as appointments can be difficult to schedule." },
  { q: "Can you help with urgent / express visas?", a: "Yes! We have access to emergency appointment slots for some countries. Contact us immediately for urgent visa requirements." },
  { q: "Do you handle visa renewals and extensions?", a: "Yes. We assist with visa renewals, extensions, and re-applications for most countries." },
];

export default function VisaAssistancePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="pt-16">
        <div className="relative h-72 sm:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80"
            alt="Visa Assistance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <Link href="/services" className="absolute top-6 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-black/60 transition">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-purple-300 text-sm font-semibold uppercase tracking-widest">Our Service</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Visa Assistance</h1>
            <p className="text-gray-300 text-lg">Hassle-free visa processing. We handle the paperwork, you enjoy the journey.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT MAIN CONTENT */}
          <div className="flex-1 space-y-8">

            {/* About */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Visa applications can be complex, time-consuming, and stressful — especially with constantly changing requirements. Our experienced visa team handles the entire process for you: from identifying the right visa category and preparing your documents to submitting your application and tracking its status.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We assist both foreign nationals visiting India (for Kashmir, Ladakh, and other destinations) and Indian nationals planning international travel. With a track record of thousands of successful visa applications, our team knows exactly what embassies look for.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Visa Service?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Shield, color: "bg-purple-50 text-purple-600", title: "Expert Guidance", desc: "Our visa experts have processed thousands of applications and know every embassy requirement." },
                  { icon: Clock, color: "bg-orange-50 text-orange-600", title: "Fast Processing", desc: "We prioritize urgent applications and have relationships with VFS and embassy partners for faster processing." },
                  { icon: Globe, color: "bg-blue-50 text-blue-600", title: "All Countries Covered", desc: "From UAE to USA, Thailand to Schengen — we cover visa applications for all major travel destinations." },
                  { icon: Users, color: "bg-green-50 text-green-600", title: "Group & Family Visa", desc: "Specialized assistance for family and group visa applications — we handle multiple applications together." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${f.color}`}>
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm mb-1">{f.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visa Types */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Visa Types We Handle</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visaTypes.map((v) => (
                  <div key={v.title} className={`rounded-xl p-5 border ${v.color}`}>
                    <div className="text-3xl mb-3">{v.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-0.5">{v.title}</h3>
                    <p className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide">{v.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{v.desc}</p>
                    <div className="flex gap-4 text-xs">
                      <div>
                        <p className="text-gray-400">Processing</p>
                        <p className="font-semibold text-gray-800">{v.processing}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Validity</p>
                        <p className="font-semibold text-gray-800">{v.validity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Countries */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {popularCountries.map((c) => (
                  <div key={c.country} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{c.flag}</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{c.country}</p>
                        <p className="text-gray-400 text-xs">{c.type}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2.5 py-1 rounded-full shrink-0">{c.processing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="space-y-5">
                {howItWorks.map((step) => (
                  <div key={step.step} className="flex gap-5">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {step.step}
                    </div>
                    <div className="pt-1">
                      <p className="font-bold text-gray-900 mb-1">{step.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                    <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-80 shrink-0">
            <div className="sticky top-20 space-y-4">
              <ServiceEnquiryForm service="Visa Assistance" />
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
                <FileText className="w-8 h-8 text-purple-200 mb-3" />
                <h3 className="font-bold text-xl mb-2">Start Visa Process</h3>
                <p className="text-purple-100 text-sm mb-5">Share your destination and travel dates. We&apos;ll guide you through the entire visa process.</p>
                <a href="tel:+917006233802"
                  className="flex items-center justify-center gap-2 bg-white text-purple-700 font-bold py-3 rounded-xl hover:shadow-lg transition text-sm mb-3">
                  <Phone className="w-4 h-4" /> Call: +91 70062 33802
                </a>
                <a href="https://wa.me/917006233802?text=Hi%2C%20I%20need%20visa%20assistance" target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <div className="mt-4 pt-4 border-t border-white/20 text-center">
                  <p className="text-white/70 text-xs mb-2 font-semibold uppercase tracking-wide">More Numbers</p>
                  <div className="flex flex-col gap-1.5 text-sm font-semibold">
                    <a href="tel:+916006473737" className="hover:underline">+91 60064 73737</a>
                    <a href="tel:+919149406965" className="hover:underline">+91 91494 06965</a>
                  </div>
                </div>
              </div>

              {/* Document Checklist */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-4">General Documents Needed</h3>
                <ul className="space-y-3">
                  {docChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mt-4">*Exact requirements vary by country. We&apos;ll provide a precise checklist for your destination.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
                <div className="space-y-2">
                  {[
                    { label: "Air Ticketing", href: "/services/air-ticketing", icon: "✈️" },
                    { label: "Hotel Booking", href: "/services/hotel-booking", icon: "🏨" },
                    { label: "Cab Services", href: "/services/cab-services", icon: "🚗" },
                  ].map((s) => (
                    <Link key={s.label} href={s.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition text-sm text-gray-700 font-medium hover:text-orange-600">
                      <span>{s.icon}</span> {s.label}
                    </Link>
                  ))}
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
