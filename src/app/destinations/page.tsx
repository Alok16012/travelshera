import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";
import { MapPin, Calendar, Thermometer } from "lucide-react";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0f172a] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Explore India</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Destinations</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            From the icy Himalayas to tropical island beaches — discover India's most breathtaking destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-xl">{dest.name}</p>
                  <p className="text-orange-400 text-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {dest.state}
                  </p>
                </div>
                <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {dest.tripCount} Trips
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-gray-500 text-sm italic mb-3">&ldquo;{dest.tagline}&rdquo;</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" /> {dest.bestTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5 text-orange-400" /> {dest.temperature}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dest.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="text-xs bg-orange-50 text-orange-600 border border-orange-100 px-2 py-0.5 rounded-full">
                      {h}
                    </span>
                  ))}
                  <span className="text-xs text-gray-400 py-0.5">+{dest.highlights.length - 3} more</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-sm font-semibold text-gray-700">{dest.tripCount} Group Trips Available</span>
                  <span className="text-orange-500 font-semibold text-sm group-hover:underline">Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
