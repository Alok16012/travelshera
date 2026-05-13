"use client";
import { useState, useEffect } from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=80",
    label: "Dal Lake, Srinagar",
  },
  {
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1920&q=80",
    label: "Gulmarg, Kashmir",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    label: "Pahalgam Valley",
  },
];

const destinations = [
  "Kashmir Valley", "Gulmarg", "Pahalgam", "Sonmarg", "Srinagar",
  "Vaishno Devi", "Leh Ladakh", "Manali", "Katra", "Dal Lake",
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function Hero() {
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: activeSlide === i ? 1 : 0,
          }}
        />
      ))}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/65" />

      {/* Slide dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              activeSlide === i ? "w-6 h-2 bg-orange-500" : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Location label */}
      <div className="absolute top-20 right-5 sm:right-10 z-10">
        <span className="bg-black/40 backdrop-blur-sm text-white/80 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-orange-400" />
          {heroSlides[activeSlide].label}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Kashmir&#39;s Trusted Travel Company
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Let&#39;s Explore Kashmir{" "}
          <span className="text-orange-400">Like Never Before.</span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Packages to match every budget. Customized tours for every traveller — from snow-capped Gulmarg to serene Dal Lake.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-2xl p-3 flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
          {/* Destination */}
          <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
            <div className="flex-1 text-left">
              <p className="text-xs text-gray-400 font-medium">Destination</p>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-gray-800 text-sm font-medium outline-none cursor-pointer"
              >
                <option value="">Where do you want to go?</option>
                {destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-gray-200" />

          {/* Month */}
          <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <Calendar className="w-5 h-5 text-orange-500 shrink-0" />
            <div className="flex-1 text-left">
              <p className="text-xs text-gray-400 font-medium">Month</p>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full bg-transparent text-gray-800 text-sm font-medium outline-none cursor-pointer"
              >
                <option value="">Select Month</option>
                {months.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <Link
            href="/trips"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 sm:min-w-[140px]"
          >
            <Search className="w-5 h-5" />
            Search Tours
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { value: "5,000+", label: "Happy Travellers" },
            { value: "500+", label: "Tours Completed" },
            { value: "30+", label: "Destinations" },
            { value: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
