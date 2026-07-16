"use client";
import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jenny Wilson",
    location: "Germany",
    trip: "Kashmir Valley Tour",
    rating: 5,
    text: "The Kashmir experience was absolutely magical! Shera Travels planned every detail so thoughtfully — from the houseboat on Dal Lake to the meadows of Pahalgam. I felt completely safe and cared for throughout the trip.",
    initial: "J",
    color: "bg-rose-500",
  },
  {
    id: 2,
    name: "Haran Mishra",
    location: "Pune, India",
    trip: "Magnificent Kashmir 6D",
    rating: 5,
    text: "Exceptional service and stunning destinations! The local guides had insider knowledge of every corner of Kashmir. The accommodations were fantastic and the whole experience was far beyond what I expected.",
    initial: "H",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    name: "Rejeev Govind",
    location: "Chennai, India",
    trip: "Heart of Kashmir Bliss",
    rating: 5,
    text: "A perfect balance between exhilarating adventures and peaceful moments. Shera Travels created an itinerary that gave us the best of Kashmir — the thrill of Gulmarg and the serenity of Pahalgam. Truly unforgettable!",
    initial: "R",
    color: "bg-indigo-500",
  },
  {
    id: 4,
    name: "Anjali Sharma",
    location: "Delhi, India",
    trip: "Vaishno Devi Pilgrimage",
    rating: 5,
    text: "Shera Travels made our Vaishno Devi yatra completely hassle-free. Everything was organized perfectly — the transport, stays, and the guides. It was a spiritually fulfilling and comfortable journey for our entire family.",
    initial: "A",
    color: "bg-orange-500",
  },
  {
    id: 5,
    name: "Rahul Bhat",
    location: "Mumbai, India",
    trip: "Gulmarg Snow Adventure",
    rating: 5,
    text: "First time seeing snow and it was everything I dreamed of! The gondola ride in Gulmarg was breathtaking. Shera Travels handled everything seamlessly — I just had to enjoy. Will definitely book again!",
    initial: "R",
    color: "bg-sky-500",
  },
  {
    id: 6,
    name: "Meera Kapoor",
    location: "Bengaluru, India",
    trip: "Ladakh Road Trip",
    rating: 5,
    text: "The Ladakh road trip via Shera Travels was the trip of a lifetime. Pangong Lake, Nubra Valley, and Khardung La — all organized flawlessly. The team's local knowledge made this so much more special than any standard tour.",
    initial: "M",
    color: "bg-violet-500",
  },
];

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perView;
}

export default function ReviewsCarousel() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, reviews.length - perView);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2">
            Google Reviews
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
            Loved by Travellers Across the World
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="text-gray-500 text-xs sm:text-sm">based on 500+ Google reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full flex flex-col relative">
                    <Quote className="absolute top-5 right-5 w-8 h-8 text-orange-100 fill-orange-100" />
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${s <= r.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <span className="inline-block self-start bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded-full border border-orange-100 mb-4">
                      📍 {r.trip}
                    </span>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className={`w-10 h-10 rounded-full ${r.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}>
                        {r.initial}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                        <p className="text-gray-400 text-xs">{r.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:text-orange-500 hover:border-orange-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:text-orange-500 hover:border-orange-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to review group ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-orange-500" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
