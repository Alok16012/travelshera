import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ServiceEnquiryForm from "@/components/ServiceEnquiryForm";
import { Hotel, CheckCircle, Phone, MessageCircle, ArrowLeft, Star, Shield, Tag, Clock } from "lucide-react";

const propertyTypes = [
  { icon: "🛶", title: "Dal Lake Houseboats", desc: "Authentic hand-carved cedar houseboats with panoramic Dal Lake views. From budget to luxury class.", count: "50+ properties" },
  { icon: "🏔️", title: "Mountain Resorts", desc: "Premium resorts in Gulmarg, Pahalgam, and Sonamarg with breathtaking valley views.", count: "30+ properties" },
  { icon: "🏠", title: "Heritage Guesthouses", desc: "Traditional Kashmiri architecture, warm hospitality, and home-cooked Wazwan meals.", count: "40+ properties" },
  { icon: "🌟", title: "Luxury Hotels", desc: "5-star and premium hotels in Srinagar city with modern amenities and world-class service.", count: "20+ properties" },
  { icon: "⛺", title: "Glamping & Camps", desc: "Luxury tented camps at Sonamarg, Pahalgam, and near Pangong Lake in Ladakh.", count: "15+ properties" },
  { icon: "🏡", title: "Homestays", desc: "Stay with local Kashmiri families for a truly authentic cultural immersion experience.", count: "25+ properties" },
];

const popularDestinations = [
  { place: "Srinagar – Dal Lake", type: "Houseboats & Hotels", priceRange: "₹2,000 – ₹20,000/night" },
  { place: "Gulmarg", type: "Resorts & Guesthouses", priceRange: "₹3,000 – ₹15,000/night" },
  { place: "Pahalgam", type: "Hotels & Homestays", priceRange: "₹1,500 – ₹10,000/night" },
  { place: "Sonamarg", type: "Camps & Resorts", priceRange: "₹2,500 – ₹12,000/night" },
  { place: "Leh, Ladakh", type: "Hotels & Guesthouses", priceRange: "₹1,500 – ₹8,000/night" },
  { place: "Katra (Vaishno Devi)", type: "Hotels & Dharamshalas", priceRange: "₹800 – ₹5,000/night" },
];

const howItWorks = [
  { step: "01", title: "Tell Us Your Preference", desc: "Share destination, check-in/check-out dates, number of guests, and your budget." },
  { step: "02", title: "We Find Best Options", desc: "Our team shortlists verified properties that match your requirements and budget." },
  { step: "03", title: "Review & Confirm", desc: "We send you photos, amenities, and prices. You pick, we book." },
  { step: "04", title: "Get Confirmation Voucher", desc: "Receive your hotel confirmation voucher on email and WhatsApp. Ready to check in!" },
];

const faqs = [
  { q: "Are all your listed hotels verified?", a: "Yes. Every property we book has been personally visited or verified by our team. We only recommend places where we'd send our own family." },
  { q: "Can I book a houseboat on Dal Lake?", a: "Absolutely! Houseboats are our specialty. We have partnerships with some of the finest houseboats on Dal Lake across all categories — budget to premium." },
  { q: "Do you offer free cancellation?", a: "Many properties offer free cancellation up to 48–72 hours before check-in. We'll clearly inform you about the specific policy when booking." },
  { q: "Can you arrange early check-in or late check-out?", a: "Yes, we can request it for you. Subject to hotel availability, which we'll confirm at the time of booking." },
  { q: "Do you book hotels outside Kashmir?", a: "Yes! We book hotels across Ladakh, Himachal Pradesh (Manali, Shimla), and other major tourist destinations in India." },
];

export default function HotelBookingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="pt-16">
        <div className="relative h-72 sm:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1400&q=80"
            alt="Hotel Booking Kashmir"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <Link href="/services" className="absolute top-6 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-black/60 transition">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <Hotel className="w-5 h-5 text-white" />
              </div>
              <span className="text-orange-300 text-sm font-semibold uppercase tracking-widest">Our Service</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Hotel Booking</h1>
            <p className="text-gray-300 text-lg">Verified properties. Every budget. Every destination.</p>
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
                Finding the right place to stay can make or break a holiday. At Shera Travels, we take the guesswork out of hotel selection. With our network of 150+ verified properties across Kashmir, Ladakh, and Himachal Pradesh, we find accommodations that perfectly match your budget, preferences, and travel style.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From a traditional cedar houseboat on Dal Lake to a cozy guesthouse in Pahalgam or a luxury resort in Gulmarg — we have curated the finest options at every price point.
              </p>
            </div>

            {/* Why Book With Us */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Book With Us?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Shield, color: "bg-orange-50 text-orange-600", title: "Personally Verified", desc: "Every property is verified for quality, cleanliness, and safety by our team before recommendation." },
                  { icon: Tag, color: "bg-blue-50 text-blue-600", title: "Best Available Rate", desc: "We negotiate rates directly with properties to get you the best deal — often better than OTAs." },
                  { icon: Star, color: "bg-yellow-50 text-yellow-600", title: "Curated Selection", desc: "We only list properties that meet our quality standards. No surprises on arrival." },
                  { icon: Clock, color: "bg-green-50 text-green-600", title: "Instant Confirmation", desc: "Get your booking voucher within hours. Our team handles everything with the property directly." },
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

            {/* Property Types */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Types We Offer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {propertyTypes.map((p) => (
                  <div key={p.title} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{p.icon}</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{p.title}</p>
                        <p className="text-orange-500 text-xs font-semibold">{p.count}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Destinations */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
              <div className="space-y-3">
                {popularDestinations.map((d) => (
                  <div key={d.place} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{d.place}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{d.type}</p>
                    </div>
                    <p className="text-orange-600 font-semibold text-sm shrink-0 ml-4">{d.priceRange}</p>
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
              <ServiceEnquiryForm service="Hotel Booking" />
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <Hotel className="w-8 h-8 text-orange-200 mb-3" />
                <h3 className="font-bold text-xl mb-2">Book a Hotel</h3>
                <p className="text-orange-100 text-sm mb-5">Tell us your destination and dates. We&apos;ll find the perfect stay for you.</p>
                <a href="tel:+917006233802"
                  className="flex items-center justify-center gap-2 bg-white text-orange-600 font-bold py-3 rounded-xl hover:shadow-lg transition text-sm mb-3">
                  <Phone className="w-4 h-4" /> Call: +91 70062 33802
                </a>
                <a href="https://wa.me/917006233802?text=Hi%2C%20I%20need%20help%20with%20hotel%20booking" target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-4">Share These Details</h3>
                <ul className="space-y-3">
                  {["Destination city / area", "Check-in & check-out dates", "Number of guests", "Room type preference", "Budget per night", "Any special requirements"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
                <div className="space-y-2">
                  {[
                    { label: "Air Ticketing", href: "/services/air-ticketing", icon: "✈️" },
                    { label: "Cab Services", href: "/services/cab-services", icon: "🚗" },
                    { label: "Visa Assistance", href: "/services/visa-assistance", icon: "📋" },
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
