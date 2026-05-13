import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MapPin, Award, Heart, Star, CheckCircle } from "lucide-react";

const team = [
  { name: "Bashir Ahmad Shera", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", bio: "Born and raised in Kashmir, Bashir has been guiding travellers through the valley for over 15 years with unmatched local expertise." },
  { name: "Nazir Ahmad", role: "Head of Operations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", bio: "10+ years in Kashmir tourism industry, ensuring every guest receives seamless, comfortable, and memorable travel experiences." },
  { name: "Irfan Bhat", role: "Senior Tour Guide", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", bio: "Certified trek leader who has guided 300+ tours across Kashmir, Ladakh, and Himachal Pradesh." },
  { name: "Shabnam Koul", role: "Customer Relations", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", bio: "Dedicated to making every traveller feel at home in Kashmir, from first enquiry to safe return." },
  { name: "Mushtaq Lone", role: "Transport Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", bio: "Manages our fleet of premium vehicles, ensuring safe and comfortable travel across all terrains." },
  { name: "Aadil Sheikh", role: "Digital & Bookings", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80", bio: "Handles all digital bookings, air ticketing, hotel reservations, and visa assistance for our clients." },
];

const milestones = [
  { year: "2012", event: "Shera Travels founded with first small group tour to Gulmarg — 6 travellers" },
  { year: "2014", event: "Expanded to Pahalgam, Sonamarg, and Ladakh tours" },
  { year: "2016", event: "Launched pilgrimage packages — Vaishno Devi and Amarnath Yatra" },
  { year: "2018", event: "Crossed 500 happy customers, launched international tourist packages" },
  { year: "2020", event: "Adapted during pandemic — introduced flexible booking and virtual Kashmir experiences" },
  { year: "2022", event: "1,000+ customers served, expanded services to Air Ticketing, Hotel Booking, Cab & Visa" },
  { year: "2024", event: "5,000+ travellers, 30+ destinations, rated Kashmir's most trusted travel company" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-16 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            We Show You Kashmir.<br />You Fall in Love with It.
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Shera Travels was born from a passion for Kashmir — its mountains, lakes, meadows, and people. Today, we are the valley&apos;s most trusted travel partner, connecting 5,000+ travellers with the magic of Paradise on Earth.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "5,000+", label: "Happy Travellers", icon: Users },
              { value: "500+", label: "Tours Completed", icon: MapPin },
              { value: "4.9/5", label: "Average Rating", icon: Star },
              { value: "10+", label: "Years Experience", icon: Award },
            ].map((s) => (
              <div key={s.label}>
                <s.icon className="w-7 h-7 text-orange-100 mx-auto mb-2" />
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-orange-100 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Making Kashmir Accessible, Safe & Unforgettable
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We believe every traveller deserves to experience the timeless beauty of Kashmir — its snow-capped mountains, shimmering Dal Lake, blooming gardens, and legendary hospitality. That&apos;s what Shera Travels is built to provide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From solo travellers to families, from pilgrims to honeymooners — we craft personalized tours that match every budget and dream. Our deep local roots, over a decade of experience, and 24/7 support make us Kashmir&apos;s most trusted travel company.
            </p>
            <ul className="space-y-3">
              {[
                "Personalized small group and private tours",
                "Expert local guides with insider knowledge",
                "Complete services — Air Ticketing, Hotel, Cab & Visa",
                "24/7 support before, during and after your trip",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=700&q=80"
              alt="Kashmir Valley"
              className="rounded-2xl w-full h-96 object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-orange-500 rounded-2xl p-5 shadow-lg">
              <Heart className="w-6 h-6 text-white mb-1" />
              <p className="text-white font-bold text-2xl">5K+</p>
              <p className="text-orange-100 text-xs">Lives Changed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="text-3xl font-bold text-gray-900">Complete Travel Services</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { title: "Air Ticketing", desc: "Best fares, instant confirmation", icon: "✈️" },
              { title: "Hotel Booking", desc: "Verified properties across J&K", icon: "🏨" },
              { title: "Cab Services", desc: "AC vehicles, experienced drivers", icon: "🚗" },
              { title: "Visa Assistance", desc: "Hassle-free visa processing", icon: "📋" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-4xl mb-3">{s.icon}</p>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="text-3xl font-bold text-gray-900">From 6 Travellers to 5,000+</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
                    {m.year}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100 mt-1">
                    <p className="text-gray-700">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">The Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The People Behind Shera Travels</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A passionate team of Kashmiris and travel professionals united by one mission — to share the magic of Kashmir with the world.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-3 border-orange-100" />
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-orange-500 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
