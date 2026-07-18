import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LandingLeadForm from "@/components/LandingLeadForm";
import LandingOfferPopup from "@/components/LandingOfferPopup";
import {
  Star, Phone, MessageCircle, ShieldCheck, Award, Users, Clock,
  CheckCircle, MapPin, Snowflake, Heart, Mountain, Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kashmir Tour Packages from ₹8,999 | Shera Travels – Book Now",
  description:
    "Book your Kashmir tour with Kashmir's most trusted local company. All-inclusive packages, houseboat stays, Gulmarg gondola & more. Free quote in 15 minutes. 4.9★ by 5000+ travellers.",
};

const featured = [
  {
    slug: "magnificent-kashmir",
    title: "Magnificent Kashmir",
    duration: "6 Days / 5 Nights",
    price: 11999,
    original: 12999,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&q=80",
    icon: Sparkles,
    points: ["Dal Lake Houseboat", "Gulmarg Gondola", "Pahalgam & Sonamarg"],
  },
  {
    slug: "gulmarg-snow-adventure",
    title: "Gulmarg Snow Escape",
    duration: "3 Days / 2 Nights",
    price: 8999,
    original: 10499,
    badge: "Weekend Deal",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    icon: Snowflake,
    points: ["Snow Activities", "Gondola Ride", "Cozy Stay"],
  },
  {
    slug: "kashmir-honeymoon",
    title: "Kashmir Honeymoon",
    duration: "7 Days / 6 Nights",
    price: 18999,
    original: undefined,
    badge: "For Couples",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
    icon: Heart,
    points: ["Candlelight Dinner", "Private Shikara", "Romantic Stays"],
  },
  {
    slug: "kashmir-vaishno-devi",
    title: "Kashmir + Vaishno Devi",
    duration: "9 Days / 8 Nights",
    price: 13999,
    original: 14999,
    badge: "Pilgrimage",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    icon: Mountain,
    points: ["Vaishno Devi Yatra", "Full Kashmir Valley", "Family Friendly"],
  },
];

const trustStats = [
  { icon: Star, value: "4.9★", label: "Google Rating" },
  { icon: Users, value: "5000+", label: "Happy Travellers" },
  { icon: Award, value: "10+ Yrs", label: "Local Experts" },
  { icon: ShieldCheck, value: "100%", label: "Safe & Secure" },
];

const steps = [
  { icon: MessageCircle, title: "Share Your Details", desc: "Fill the form or WhatsApp us your travel plan." },
  { icon: Phone, title: "Get a Free Quote", desc: "Our expert calls you in 15 minutes with the best price." },
  { icon: MapPin, title: "Customise & Book", desc: "We tailor the itinerary to your budget & lock your dates." },
  { icon: Sparkles, title: "Travel Stress-Free", desc: "Airport pickup to drop — we handle everything on ground." },
];

const reviews = [
  { name: "Anjali Sharma", from: "Delhi", text: "Booked our family trip through Shera Travels. Everything from houseboat to cab was perfect. Highly recommended!", initial: "A", color: "bg-orange-500" },
  { name: "Rahul Bhat", from: "Mumbai", text: "First time in snow at Gulmarg — the team handled everything seamlessly. Best price I found anywhere.", initial: "R", color: "bg-sky-500" },
  { name: "Meera Kapoor", from: "Bengaluru", text: "Our honeymoon was magical. Private shikara, candlelight dinner — they thought of every detail.", initial: "M", color: "bg-rose-500" },
];

const inclusions = [
  "Airport Pickup & Drop", "Handpicked Hotels & Houseboat", "Daily Breakfast & Dinner",
  "Private Cab (Sightseeing)", "Gulmarg Gondola Assistance", "24×7 On-Trip Support",
];

const WA = "https://wa.me/919149406965?text=Hi%2C%20I%27m%20interested%20in%20a%20Kashmir%20tour%20package";
const CALL = "tel:+919149406965";

export default function KashmirTourLanding() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />
      <LandingOfferPopup />

      {/* Offer bar */}
      <div className="pt-16">
        <div className="bg-orange-500 text-white text-center text-xs sm:text-sm font-semibold py-2 px-4">
          ⚡ Limited Monsoon Offer — Kashmir packages from <span className="underline">₹8,999</span> · Free quote in 15 min
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
            alt="Kashmir Valley" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/40" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-10 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
          {/* Left copy */}
          <div className="text-white">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-medium mb-4">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /> Kashmir&apos;s Most Trusted Travel Company
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Experience the Magic of <span className="text-orange-400">Kashmir</span>
            </h1>
            <p className="text-gray-200 text-base sm:text-lg mb-6 max-w-lg">
              All-inclusive tour packages by local experts — houseboats, Gulmarg gondola, Pahalgam &amp; more. Starting at just <span className="font-bold text-white">₹8,999</span>.
            </p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-6 max-w-md">
              {["No Hidden Charges", "Free Cancellation*", "Best Price Guarantee", "24×7 Support"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-100">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 text-sm text-gray-200">
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-orange-400" /> 5000+ travellers</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-orange-400" /> 10+ years</span>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:pl-6" id="lead-form">
            <LandingLeadForm />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustStats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 justify-center">
              <s.icon className="w-6 h-6 text-orange-500 shrink-0" />
              <div>
                <p className="font-bold text-lg leading-none">{s.value}</p>
                <p className="text-gray-500 text-xs">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured packages */}
      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Best-Selling Packages</p>
          <h2 className="text-2xl sm:text-4xl font-bold">Pick Your Perfect Kashmir Trip</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p) => (
            <div key={p.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="relative h-44">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">{p.badge}</span>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <p.icon className="w-4 h-4 text-orange-500" />
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900">{p.title}</h3>
                <p className="text-gray-500 text-xs mb-3 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {p.duration}</p>
                <ul className="space-y-1.5 mb-4 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-between mb-3">
                  <div>
                    {p.original && <span className="text-gray-400 line-through text-xs mr-1">₹{p.original.toLocaleString("en-IN")}</span>}
                    <span className="text-xl font-bold text-gray-900">₹{p.price.toLocaleString("en-IN")}</span>
                    <span className="text-gray-500 text-xs">/person</span>
                  </div>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-2.5 rounded-xl transition">
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#0f172a] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="text-center mb-10">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">All-Inclusive</p>
            <h2 className="text-2xl sm:text-4xl font-bold">Everything Is Taken Care Of</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {inclusions.map((inc) => (
              <div key={inc} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3.5">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-sm font-medium">{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Simple Process</p>
          <h2 className="text-2xl sm:text-4xl font-bold">Book in 4 Easy Steps</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="relative w-14 h-14 mx-auto mb-4 bg-orange-50 rounded-2xl flex items-center justify-center">
                <s.icon className="w-6 h-6 text-orange-500" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
              </div>
              <h3 className="font-bold mb-1">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl font-bold">4.9</span>
              <span className="flex">{[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold">Loved by 5000+ Travellers</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-3">{[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-full ${r.color} text-white flex items-center justify-center font-bold text-sm`}>{r.initial}</div>
                  <div>
                    <p className="font-bold text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">{r.from}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3">Ready to Explore Paradise?</h2>
          <p className="text-orange-50 text-lg mb-7 max-w-xl mx-auto">
            Talk to a Kashmir expert now and get your custom quote with the best price — free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={CALL} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition">
              <Phone className="w-5 h-5" /> Call +91 91494 06965
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="bg-[#0a0f1e] text-gray-400 text-center py-6 px-4 text-xs">
        <p>© 2024 Shera Travels · Radio Colony Lawaypora, Srinagar, J&amp;K – 190017 · GST: 01KODPS7232P1ZE</p>
        <p className="mt-1">+91 91494 06965 · +91 70062 33802 · +91 60064 73737 · info@sheratravels.com</p>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden flex border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <a href={CALL} className="flex-1 flex items-center justify-center gap-2 py-3.5 font-bold text-orange-600">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 font-bold text-white bg-green-500">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </main>
  );
}
