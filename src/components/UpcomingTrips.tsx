"use client";
import { useState } from "react";
import TripCard from "./TripCard";
import { trips } from "@/data/trips";

const categories = ["All", "Mountains", "Beaches", "Backpacking", "Weekend", "International", "Winter"];

export default function UpcomingTrips() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? trips
      : trips.filter((t) => t.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50" id="trips">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">
            Upcoming Trips
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Best Group Trips
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Handcrafted itineraries with verified guides, fixed departures, and a community of like-minded travellers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-8 justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Trip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200">
            View All Trips →
          </button>
        </div>
      </div>
    </section>
  );
}
