"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripCard from "@/components/TripCard";
import { destinations } from "@/data/destinations";
import { usePackages } from "@/lib/packages";
import { MapPin, Calendar, Thermometer, Mountain, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

export default function DestinationDetailPage() {
  const params = useParams();
  const dest = destinations.find((d) => d.slug === params.slug);
  const [activeImage, setActiveImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { packages: trips } = usePackages();

  if (!dest) {
    return (
      <main><Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center pt-16">
          <p className="text-2xl font-bold text-gray-700 mb-4">Destination not found</p>
          <Link href="/destinations" className="text-orange-500 flex items-center gap-2 hover:underline">
            <ArrowLeft className="w-4 h-4" /> All Destinations
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedTrips = trips.filter((t) => t.category === dest.category).slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="pt-16">
        <div className="relative h-[60vh] overflow-hidden">
          <img src={dest.gallery[activeImage]} alt={dest.name} className="w-full h-full object-cover transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <Link href="/destinations" className="absolute top-6 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-black/60 transition">
            <ArrowLeft className="w-4 h-4" /> All Destinations
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="max-w-7xl mx-auto">
              <p className="text-orange-400 italic text-lg mb-1">&ldquo;{dest.tagline}&rdquo;</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{dest.name}</h1>
              <div className="flex flex-wrap gap-5 text-white/80 text-sm">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-400" />{dest.state}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" />Best: {dest.bestTime}</span>
                <span className="flex items-center gap-1.5"><Thermometer className="w-4 h-4 text-orange-400" />{dest.temperature}</span>
                <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-orange-400" />{dest.altitude}</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 right-5 sm:right-10 flex gap-2">
            {dest.gallery.map((img, i) => (
              <button key={i} onClick={() => setActiveImage(i)}
                className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition ${activeImage === i ? "border-orange-500 scale-105" : "border-white/30"}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT */}
          <div className="flex-1 space-y-8">
            {/* About */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {dest.name}</h2>
              <p className="text-gray-600 leading-relaxed">{dest.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Highlights</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {dest.highlights.map((h) => (
                  <div key={h} className="bg-orange-50 border border-orange-100 rounded-xl p-3 text-center">
                    <p className="text-orange-600 font-semibold text-sm">{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Things To Do */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Things To Do</h2>
              <div className="space-y-4">
                {dest.thingsToDo.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Reach */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">How to Reach</h2>
              <div className="space-y-3">
                {dest.howToReach.map((r) => (
                  <div key={r.mode} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
                    <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full shrink-0">{r.mode}</span>
                    <p className="text-gray-600 text-sm">{r.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {dest.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-orange-50 transition">
                      <span className="font-semibold text-gray-800 text-sm">{faq.q}</span>
                      {openFaq === i ? <ChevronUp className="w-4 h-4 text-orange-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-gray-600 text-sm border-t border-gray-100 pt-3">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-72 shrink-0 space-y-4">
            <div className="sticky top-20">
              {/* Quick Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4">
                <h3 className="font-bold text-gray-900 mb-4">Quick Info</h3>
                {[
                  { label: "Best Time", value: dest.bestTime },
                  { label: "Temperature", value: dest.temperature },
                  { label: "Altitude", value: dest.altitude },
                  { label: "Available Trips", value: `${dest.tripCount} Trips` },
                  { label: "Category", value: dest.category },
                ].map((info) => (
                  <div key={info.label} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 text-sm">{info.label}</span>
                    <span className="font-semibold text-gray-800 text-sm">{info.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-5 text-center">
                <p className="text-white font-bold text-lg mb-2">Ready to Explore {dest.name}?</p>
                <p className="text-orange-100 text-sm mb-4">Join a group trip and make memories for life!</p>
                <Link href="/trips"
                  className="block w-full bg-white text-orange-600 font-bold py-3 rounded-xl hover:shadow-lg transition">
                  Browse Trips →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Trips */}
        {relatedTrips.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trips to {dest.name} & Nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTrips.map((t) => <TripCard key={t.id} trip={t} />)}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
