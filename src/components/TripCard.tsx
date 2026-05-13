"use client";
import Link from "next/link";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { TripDetail } from "@/data/trips";

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-yellow-100 text-yellow-700",
  Challenging: "bg-red-100 text-red-700",
};

export default function TripCard({ trip }: { trip: TripDetail }) {
  return (
    <Link href={`/trips/${trip.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 active:scale-[0.98]">
      {/* Image */}
      <div className="relative overflow-hidden h-48 sm:h-52">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {trip.badge && (
            <span className="bg-orange-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full">
              {trip.badge}
            </span>
          )}
          <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColor[trip.difficulty]}`}>
            {trip.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-[11px] font-bold text-gray-800">{trip.rating}</span>
          <span className="text-[10px] text-gray-500 hidden sm:inline">({trip.reviews})</span>
        </div>

        {/* Location */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white">
          <MapPin className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-xs font-medium">{trip.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2 line-clamp-2 leading-snug">
          {trip.title}
        </h3>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2.5">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            {trip.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-orange-400" />
            {trip.groupSize}
          </span>
        </div>

        <div className="flex gap-1.5 mb-3 overflow-x-auto scrollbar-hide">
          {trip.dates.slice(0, 2).map((date) => (
            <span
              key={date}
              className="text-[10px] sm:text-xs bg-orange-50 text-orange-600 border border-orange-200 px-2 py-0.5 rounded-full font-medium whitespace-nowrap shrink-0"
            >
              {date}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="pt-2.5 border-t border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-orange-500 font-bold text-sm sm:text-lg">
                  ₹{trip.price.toLocaleString("en-IN")}
                </span>
                <span className="text-gray-400 text-[9px] sm:text-[10px]">/person</span>
              </div>
              {trip.originalPrice && (
                <span className="text-gray-400 text-[9px] sm:text-[10px] line-through">
                  ₹{trip.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>
          <span className="block w-full text-center bg-orange-500 group-hover:bg-orange-600 text-white text-xs font-semibold py-2 rounded-xl transition-all duration-200">
            Know More →
          </span>
        </div>
      </div>
    </Link>
  );
}
