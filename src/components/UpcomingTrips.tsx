"use client";
import { useState } from "react";
import Link from "next/link";
import TripCard from "./TripCard";
import { trips } from "@/data/trips";

const categories = ["All", "Kashmir", "Mountains", "Pilgrimage", "Honeymoon"];

export default function UpcomingTrips() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? trips
      : trips.filter((t) => t.category === activeCategory);

  return (
    <section className="py-10 sm:py-16 bg-gray-50" id="trips">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-5 sm:mb-10">
          <div>
            <p className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2">
              Our Tours
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
              Best Kashmir Packages
            </h2>
            <p className="text-gray-500 text-sm mt-1 hidden sm:block max-w-xl">
              Handcrafted itineraries with verified guides, fixed departures, and a community of like-minded travellers.
            </p>
          </div>
          <Link href="/trips" className="hidden sm:inline-flex items-center gap-1 text-orange-500 font-semibold text-sm hover:text-orange-600 shrink-0">
            View All →
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-5 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile: horizontal scroll cards */}
        <div className="sm:hidden -mx-4 px-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-3">
            {filtered.map((trip) => (
              <div key={trip.id} className="w-64 shrink-0">
                <TripCard trip={trip} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link href="/trips" className="inline-block border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200">
            View All Tours →
          </Link>
        </div>
      </div>
    </section>
  );
}
