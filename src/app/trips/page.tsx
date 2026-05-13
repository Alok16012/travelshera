"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripCard from "@/components/TripCard";
import { trips } from "@/data/trips";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = ["All", "Kashmir", "Mountains", "Pilgrimage", "Honeymoon", "Budget"];
const difficulties = ["All", "Easy", "Moderate", "Challenging"];
const durations = ["All", "1-4 Days", "5-7 Days", "8+ Days"];

export default function TripsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [duration, setDuration] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = trips.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.location.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || t.category === category;
    const matchDiff = difficulty === "All" || t.difficulty === difficulty;
    const matchDur = duration === "All" ||
      (duration === "1-4 Days" && t.days <= 4) ||
      (duration === "5-7 Days" && t.days >= 5 && t.days <= 7) ||
      (duration === "8+ Days" && t.days >= 8);
    return matchSearch && matchCat && matchDiff && matchDur;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0f172a] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 text-center">
          <p className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">Kashmir & Beyond</p>
          <h1 className="text-2xl sm:text-5xl font-bold text-white mb-2 sm:mb-4">All Kashmir Tours</h1>
          <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto mb-5 sm:mb-8 hidden sm:block">
            Handcrafted itineraries with fixed departures, verified guides, and a community of 5,000+ travellers.
          </p>
          {/* Search */}
          <div className="max-w-xl mx-auto flex gap-2 sm:gap-3">
            <div className="flex-1 flex items-center gap-2 sm:gap-3 bg-white rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 shadow">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search trips or destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 outline-none text-gray-800 text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1.5 sm:gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition"
            >
              <SlidersHorizontal className="w-4 h-4" /> <span className="hidden sm:inline">Filters</span><span className="sm:hidden">Filter</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
        {/* Filters */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 mb-5 sm:mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button key={c} onClick={() => setCategory(c)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${category === c ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-orange-300"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Difficulty</label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((d) => (
                  <button key={d} onClick={() => setDifficulty(d)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${difficulty === d ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-orange-300"}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Duration</label>
              <div className="flex flex-wrap gap-2">
                {durations.map((d) => (
                  <button key={d} onClick={() => setDuration(d)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${duration === d ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-orange-300"}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 mb-4 sm:mb-6">
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)}
              className={`shrink-0 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition ${category === c ? "bg-orange-500 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300"}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
          Showing <strong className="text-gray-900">{filtered.length}</strong> tours
          {search && <> for &quot;<strong>{search}</strong>&quot;</>}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filtered.map((trip) => <TripCard key={trip.id} trip={trip} />)}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <p className="text-4xl mb-4">🏔️</p>
            <p className="text-xl font-bold text-gray-700">No trips found</p>
            <p className="text-gray-500 mt-2 text-sm">Try changing your search or filters</p>
            <button onClick={() => { setSearch(""); setCategory("All"); setDifficulty("All"); setDuration("All"); }}
              className="mt-4 text-orange-500 font-semibold hover:underline text-sm">
              Clear all filters
            </button>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
