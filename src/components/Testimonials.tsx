"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    location: "Germany",
    trip: "Kashmir Valley Tour",
    rating: 5,
    text: "The Kashmir experience was absolutely magical! Shera Travels planned every detail so thoughtfully — from the houseboat on Dal Lake to the meadows of Pahalgam. I felt completely safe and cared for throughout the trip.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "April 2024",
  },
  {
    id: 2,
    name: "Haran Mishra",
    location: "India",
    trip: "Magnificent Kashmir 6D",
    rating: 5,
    text: "Exceptional service and stunning destinations! The local guides had insider knowledge of every corner of Kashmir. The accommodations were fantastic and the whole experience was far beyond what I expected.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "March 2024",
  },
  {
    id: 3,
    name: "Rejeev Govind",
    location: "Sri Lanka",
    trip: "Heart of Kashmir Bliss",
    rating: 5,
    text: "A perfect balance between exhilarating adventures and peaceful moments. Shera Travels created an itinerary that gave us the best of Kashmir — the thrill of Gulmarg and the serenity of Pahalgam. Truly unforgettable!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "May 2024",
  },
  {
    id: 4,
    name: "Anjali Sharma",
    location: "Delhi, India",
    trip: "Vaishno Devi Pilgrimage",
    rating: 5,
    text: "Shera Travels made our Vaishno Devi yatra completely hassle-free. Everything was organized perfectly — the transport, stays, and the guides. It was a spiritually fulfilling and comfortable journey for our entire family.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "February 2024",
  },
  {
    id: 5,
    name: "Rahul Bhat",
    location: "Mumbai, India",
    trip: "Gulmarg Snow Adventure",
    rating: 5,
    text: "First time seeing snow and it was everything I dreamed of! The gondola ride in Gulmarg was breathtaking. Shera Travels handled everything seamlessly — I just had to enjoy. Will definitely book again!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "January 2024",
  },
  {
    id: 6,
    name: "Meera Kapoor",
    location: "Bengaluru, India",
    trip: "Ladakh Road Trip",
    rating: 5,
    text: "The Ladakh road trip via Shera Travels was the trip of a lifetime. Pangong Lake, Nubra Valley, and Khardung La — all organized flawlessly. The team's local knowledge made this so much more special than any standard tour.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    date: "June 2024",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-12">
          <p className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2">
            Traveller Stories
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            What Our Travellers Say
          </h2>
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 mt-2 sm:mt-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-gray-800 font-bold ml-1 text-sm sm:text-base">4.9</span>
            <span className="text-gray-500 text-xs sm:text-sm">/ 5 based on 500+ reviews</span>
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="sm:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative w-72 shrink-0"
              >
                <Quote className="absolute top-4 right-4 w-6 h-6 text-orange-100 fill-orange-100" />
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <span className="inline-block bg-orange-50 text-orange-600 text-[10px] font-medium px-2.5 py-1 rounded-full border border-orange-100 mb-3">
                  📍 {t.trip}
                </span>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 text-xs">{t.name}</p>
                    <p className="text-gray-400 text-[10px]">{t.location} · {t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-orange-100 fill-orange-100" />
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`w-4 h-4 ${s <= t.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                &ldquo;{t.text}&rdquo;
              </p>
              <span className="inline-block bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded-full border border-orange-100 mb-4">
                📍 {t.trip}
              </span>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location} · {t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
