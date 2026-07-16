import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ServiceEnquiryForm from "@/components/ServiceEnquiryForm";
import { Car, CheckCircle, Phone, MessageCircle, ArrowLeft, MapPin, Users, Shield, Star } from "lucide-react";

const vehicleTypes = [
  { icon: "🚗", name: "Sedan / Hatchback", capacity: "1–4 Passengers", examples: "Swift, Dzire, Etios", ideal: "City transfers, small families" },
  { icon: "🚙", name: "SUV / Innova", capacity: "5–7 Passengers", examples: "Innova Crysta, Scorpio", ideal: "Group sightseeing, outstation trips" },
  { icon: "🚐", name: "Tempo Traveller", capacity: "9–17 Passengers", examples: "Force Traveller 9/12/17 seater", ideal: "Large groups, tour packages" },
  { icon: "🚌", name: "Mini Bus", capacity: "18–32 Passengers", examples: "Tata Winger, Ashok Leyland", ideal: "Corporate groups, large tours" },
];

const popularRoutes = [
  { route: "Srinagar Airport → Dal Lake / Hotel", type: "Airport Transfer", duration: "30–45 min" },
  { route: "Srinagar → Gulmarg", type: "Day Trip / Sightseeing", duration: "1.5 hrs each way" },
  { route: "Srinagar → Pahalgam", type: "Day Trip / Overnight", duration: "2.5 hrs each way" },
  { route: "Srinagar → Sonamarg", type: "Day Trip", duration: "3 hrs each way" },
  { route: "Srinagar → Leh (Ladakh Highway)", type: "Multi-day Trip", duration: "2 days" },
  { route: "Jammu → Srinagar", type: "Outstation", duration: "8–9 hrs" },
  { route: "Jammu → Katra (Vaishno Devi)", type: "Pilgrimage Transfer", duration: "1.5 hrs" },
  { route: "Leh → Nubra → Pangong", type: "Ladakh Circuit", duration: "Multi-day" },
];

const howItWorks = [
  { step: "01", title: "Tell Us Your Route", desc: "Share your pickup location, destination, date, time, and number of passengers." },
  { step: "02", title: "Get a Quote", desc: "We provide an instant, transparent quote with no hidden charges. AC vehicle included." },
  { step: "03", title: "Confirm Booking", desc: "Confirm and pay a small advance. Balance paid to driver on trip completion." },
  { step: "04", title: "Driver at Your Door", desc: "Your driver arrives on time with a clean, well-maintained AC vehicle." },
];

const faqs = [
  { q: "Are your cabs air-conditioned?", a: "Yes! All our vehicles are fully air-conditioned for your comfort, even on mountain routes." },
  { q: "Are the drivers experienced in mountain driving?", a: "Absolutely. All our drivers have years of experience navigating Kashmir, Ladakh, and Himachal mountain roads and are familiar with local conditions." },
  { q: "Do you offer per-hour and per-day rates?", a: "Yes. We offer airport transfers (per trip), local sightseeing (8 hrs / 80 km packages), and outstation trips (per day rates). Contact us for a custom quote." },
  { q: "What if my flight is delayed?", a: "Our drivers track flights and will adjust pickup time accordingly at no extra charge for reasonable delays." },
  { q: "Can I book a cab for a full Kashmir tour?", a: "Yes! Our tour packages include a dedicated cab and driver throughout. Alternatively, book a self-drive tour with a cab and driver for your entire trip." },
];

export default function CabServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="pt-16">
        <div className="relative h-72 sm:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=1400&q=80"
            alt="Cab Services Kashmir"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <Link href="/services" className="absolute top-6 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-black/60 transition">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-green-300 text-sm font-semibold uppercase tracking-widest">Our Service</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Cab Services</h1>
            <p className="text-gray-300 text-lg">AC vehicles. Expert drivers. Every destination in Kashmir.</p>
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
                Getting around Kashmir&apos;s mountains and valleys requires experienced local drivers who know every road, shortcut, and seasonal route. Our cab service provides safe, comfortable, and reliable transportation across Kashmir, Ladakh, and Himachal Pradesh.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need an airport pickup, a full-day sightseeing trip, or a multi-day outstation journey — our fleet of well-maintained AC vehicles and professional drivers are at your service.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Cabs?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Shield, color: "bg-green-50 text-green-600", title: "Verified & Safe Drivers", desc: "All drivers are police-verified, licensed, and trained for mountain driving." },
                  { icon: Star, color: "bg-orange-50 text-orange-600", title: "Well-Maintained Fleet", desc: "Clean, serviced AC vehicles — from sedans to Tempo Travellers and mini buses." },
                  { icon: MapPin, color: "bg-blue-50 text-blue-600", title: "Local Knowledge", desc: "Drivers know every valley, pass, and local attraction — your personal Kashmir expert." },
                  { icon: Users, color: "bg-purple-50 text-purple-600", title: "Groups Welcome", desc: "Vehicles for every group size — from 2 people to 32+ with Tempo Travellers and buses." },
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

            {/* Vehicle Types */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Fleet</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicleTypes.map((v) => (
                  <div key={v.name} className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-orange-200 hover:bg-orange-50 transition">
                    <div className="text-3xl mb-2">{v.icon}</div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{v.name}</p>
                    <p className="text-orange-600 text-xs font-semibold mb-2">{v.capacity}</p>
                    <p className="text-gray-400 text-xs">{v.examples}</p>
                    <p className="text-gray-500 text-xs mt-1">Ideal for: {v.ideal}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Routes */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Routes</h2>
              <div className="space-y-3">
                {popularRoutes.map((r) => (
                  <div key={r.route} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{r.route}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{r.type}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full shrink-0">{r.duration}</span>
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
              <ServiceEnquiryForm service="Cab Services" />
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
                <Car className="w-8 h-8 text-green-200 mb-3" />
                <h3 className="font-bold text-xl mb-2">Book a Cab</h3>
                <p className="text-green-100 text-sm mb-5">Share your pickup details and get an instant quote for your Kashmir journey.</p>
                <a href="tel:+919149406965"
                  className="flex items-center justify-center gap-2 bg-white text-green-700 font-bold py-3 rounded-xl hover:shadow-lg transition text-sm mb-3">
                  <Phone className="w-4 h-4" /> Call: +91 91494 06965
                </a>
                <a href="https://wa.me/919149406965?text=Hi%2C%20I%20need%20a%20cab%20booking" target="_blank"
                  className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold py-3 rounded-xl transition text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <div className="mt-4 pt-4 border-t border-white/20 text-center">
                  <p className="text-white/70 text-xs mb-2 font-semibold uppercase tracking-wide">More Numbers</p>
                  <div className="flex flex-col gap-1.5 text-sm font-semibold">
                    <a href="tel:+917006233802" className="hover:underline">+91 70062 33802</a>
                    <a href="tel:+916006473737" className="hover:underline">+91 60064 73737</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-4">Share These Details</h3>
                <ul className="space-y-3">
                  {["Pickup location & destination", "Date and time of travel", "Number of passengers", "Vehicle preference", "One-way or round trip", "Any extra stops"].map((item) => (
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
                    { label: "Hotel Booking", href: "/services/hotel-booking", icon: "🏨" },
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
