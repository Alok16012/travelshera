import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ServiceEnquiryForm from "@/components/ServiceEnquiryForm";
import { Plane, CheckCircle, Phone, MessageCircle, ArrowLeft, Clock, Tag, Shield, Headphones } from "lucide-react";

const popularRoutes = [
  { from: "Delhi", to: "Srinagar", code: "DEL → SXR", duration: "1h 30m", airlines: "IndiGo, Air India, SpiceJet" },
  { from: "Mumbai", to: "Srinagar", code: "BOM → SXR", duration: "2h 30m", airlines: "IndiGo, Air India" },
  { from: "Bengaluru", to: "Srinagar", code: "BLR → SXR", duration: "3h 00m", airlines: "IndiGo, Air India" },
  { from: "Delhi", to: "Leh", code: "DEL → IXL", duration: "1h 20m", airlines: "IndiGo, Air India, GoFirst" },
  { from: "Delhi", to: "Jammu", code: "DEL → IXJ", duration: "1h 15m", airlines: "IndiGo, SpiceJet, Air India" },
  { from: "Mumbai", to: "Jammu", code: "BOM → IXJ", duration: "2h 15m", airlines: "IndiGo, Air India" },
];

const howItWorks = [
  { step: "01", title: "Share Your Requirements", desc: "Tell us your travel dates, departure city, number of passengers and preferred airlines." },
  { step: "02", title: "Get Best Fares", desc: "Our team searches across all airlines and aggregators to find you the lowest available fare." },
  { step: "03", title: "Confirm & Pay", desc: "Review the options we share, confirm your choice, and make a secure payment." },
  { step: "04", title: "Receive Your E-ticket", desc: "Instant e-ticket delivery to your email and WhatsApp. You're all set to fly!" },
];

const faqs = [
  { q: "Do you charge extra fees for booking?", a: "We charge a small convenience fee which is clearly disclosed before payment. No hidden charges ever." },
  { q: "Can I book international flights through you?", a: "Yes! We book both domestic and international flights. Contact us for international routes and pricing." },
  { q: "What if I need to cancel or reschedule?", a: "Cancellation and reschedule policies depend on the airline's fare rules. We'll guide you through the process and help you minimize charges." },
  { q: "How quickly do I receive my ticket?", a: "E-tickets are delivered instantly (within minutes) after payment confirmation, directly to your email and WhatsApp." },
  { q: "Do you book group flights?", a: "Yes! We specialize in group bookings (10+ passengers) and often get better negotiated rates for groups." },
];

export default function AirTicketingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="pt-16">
        <div className="relative h-72 sm:h-96 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80"
            alt="Air Ticketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <Link href="/services" className="absolute top-6 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-black/60 transition">
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-blue-300 text-sm font-semibold uppercase tracking-widest">Our Service</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Air Ticketing</h1>
            <p className="text-gray-300 text-lg">Best fares. Instant confirmation. Every route.</p>
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
                At Shera Travels, we make flight booking simple, affordable, and stress-free. Whether you&apos;re flying to Srinagar for a Kashmir holiday, to Leh for a Ladakh adventure, or travelling internationally — our team finds you the best available fares across all major airlines.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience in travel services, we have established relationships with all major domestic carriers including IndiGo, Air India, SpiceJet, GoFirst, and Vistara, as well as access to international airline inventory.
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Book With Us?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Tag, color: "bg-blue-50 text-blue-600", title: "Best Price Guarantee", desc: "We compare fares across airlines and OTAs to ensure you always get the lowest price." },
                  { icon: Clock, color: "bg-orange-50 text-orange-600", title: "Instant E-ticket", desc: "Receive your confirmed e-ticket within minutes of payment — on email and WhatsApp." },
                  { icon: Shield, color: "bg-green-50 text-green-600", title: "Secure Payment", desc: "100% secure payment options — UPI, Net Banking, Cards, and EMI available." },
                  { icon: Headphones, color: "bg-purple-50 text-purple-600", title: "24/7 Support", desc: "Our team is always available for flight-related queries, changes, and cancellations." },
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

            {/* Popular Routes */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Routes</h2>
              <div className="space-y-3">
                {popularRoutes.map((route) => (
                  <div key={route.code} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="font-bold text-gray-900 text-sm">{route.from}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-8 h-px bg-gray-300" />
                        <Plane className="w-4 h-4 text-orange-500" />
                        <div className="w-8 h-px bg-gray-300" />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900 text-sm">{route.to}</p>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-gray-500">{route.duration}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{route.airlines}</p>
                    </div>
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
              <ServiceEnquiryForm service="Air Ticketing" />
              {/* Book Now Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <Plane className="w-8 h-8 text-blue-200 mb-3" />
                <h3 className="font-bold text-xl mb-2">Book Your Flight</h3>
                <p className="text-blue-100 text-sm mb-5">Share your travel details and get the best available fares instantly.</p>
                <a href="tel:+917006233802"
                  className="flex items-center justify-center gap-2 bg-white text-blue-700 font-bold py-3 rounded-xl hover:shadow-lg transition text-sm mb-3">
                  <Phone className="w-4 h-4" /> Call: +91 70062 33802
                </a>
                <a href="https://wa.me/917006233802?text=Hi%2C%20I%20need%20help%20with%20flight%20booking" target="_blank"
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

              {/* What we need */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-4">Share These Details</h3>
                <ul className="space-y-3">
                  {["Departure & destination city", "Travel date(s)", "Number of passengers", "One-way or round trip", "Preferred airline (optional)", "Budget range (optional)"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Services */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
                <div className="space-y-2">
                  {[
                    { label: "Hotel Booking", href: "/services/hotel-booking", icon: "🏨" },
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
