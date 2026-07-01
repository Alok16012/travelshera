"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  MapPin, Clock, Users, Star, ChevronDown, ChevronUp,
  CheckCircle, XCircle, ArrowLeft, Calendar, Mountain,
  Phone, MessageCircle, Shield, Award, AlertCircle
} from "lucide-react";
import { trips } from "@/data/trips";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitLead } from "@/lib/leads";

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-700 border-green-200",
  Moderate: "bg-yellow-100 text-yellow-700 border-yellow-200",
  Challenging: "bg-red-100 text-red-700 border-red-200",
};

export default function TripDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const trip = trips.find((t) => t.id === id);

  const [activeImage, setActiveImage] = useState(0);
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [selectedDate, setSelectedDate] = useState(trip?.dates[0] || "");
  const [activeTab, setActiveTab] = useState("overview");
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", email: "", people: "1" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState("");

  if (!trip) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center pt-16">
          <p className="text-2xl font-bold text-gray-700 mb-4">Trip not found</p>
          <Link href="/" className="text-orange-500 hover:underline flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const tabs = ["overview", "itinerary", "inclusions", "important info"];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Image Gallery */}
      <div className="pt-16">
        <div className="relative h-[55vh] sm:h-[65vh] overflow-hidden">
          <img
            src={trip.gallery[activeImage]}
            alt={trip.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Back button */}
          <Link
            href="/"
            className="absolute top-6 left-4 sm:left-8 flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-black/60 transition"
          >
            <ArrowLeft className="w-4 h-4" /> All Trips
          </Link>

          {/* Badges */}
          <div className="absolute top-6 right-4 sm:right-8 flex gap-2">
            {trip.badge && (
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {trip.badge}
              </span>
            )}
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${difficultyColor[trip.difficulty]}`}>
              {trip.difficulty}
            </span>
          </div>

          {/* Bottom info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 text-orange-400 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>{trip.location}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 max-w-3xl leading-tight">
                {trip.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <strong className="text-white">{trip.rating}</strong> ({trip.reviews} reviews)
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-400" /> {trip.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-orange-400" /> Group: {trip.groupSize}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mountain className="w-4 h-4 text-orange-400" /> Min Age: {trip.minAge}+
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-0 right-4 sm:right-8 flex gap-2 pb-5 sm:pb-8">
            {trip.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all ${activeImage === i ? "border-orange-500 scale-105" : "border-white/30"}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT: Content */}
          <div className="flex-1 min-w-0">

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Clock, label: "Duration", value: trip.duration },
                { icon: Users, label: "Group Size", value: `${trip.groupSize} people` },
                { icon: Mountain, label: "Difficulty", value: trip.difficulty },
                { icon: Calendar, label: "Dates", value: `${trip.dates.length} batches` },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                  <s.icon className="w-5 h-5 text-orange-500 mx-auto mb-1.5" />
                  <p className="text-xs text-gray-500">{s.label}</p>
                  <p className="font-bold text-gray-900 text-sm mt-0.5">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
              <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-100">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`shrink-0 px-5 py-3.5 text-sm font-semibold capitalize transition-colors ${
                      activeTab === tab
                        ? "text-orange-500 border-b-2 border-orange-500 bg-orange-50"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-5 sm:p-6">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-3">About This Trip</h3>
                      <p className="text-gray-600 leading-relaxed">{trip.overview}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-3">Trip Highlights</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {trip.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-3">Things to Carry</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {trip.thingsToCarry.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Itinerary Tab */}
                {activeTab === "itinerary" && (
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900 text-lg mb-4">Day-by-Day Itinerary</h3>
                    {trip.itinerary.map((day) => (
                      <div key={day.day} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-orange-50 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center shrink-0">
                              {day.day}
                            </span>
                            <span className="font-semibold text-gray-800 text-sm sm:text-base">{day.title}</span>
                          </div>
                          {openDay === day.day
                            ? <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                            : <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />}
                        </button>
                        {openDay === day.day && (
                          <div className="p-4 border-t border-gray-100">
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{day.description}</p>
                            <div className="flex flex-wrap gap-3 text-xs">
                              <span className="bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-full">
                                🍽️ {day.meals}
                              </span>
                              <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full">
                                🏨 {day.accommodation}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Inclusions Tab */}
                {activeTab === "inclusions" && (
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" /> What's Included
                      </h3>
                      <ul className="space-y-2.5">
                        {trip.inclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-400" /> What's Not Included
                      </h3>
                      <ul className="space-y-2.5">
                        {trip.exclusions.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Important Info Tab */}
                {activeTab === "important info" && (
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-500" /> Important Notes
                    </h3>
                    <ul className="space-y-3">
                      {trip.importantNotes.map((note, i) => (
                        <li key={i} className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-xl p-3.5 text-sm text-gray-700">
                          <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "Verified Trip", desc: "100% Safe & Verified" },
                { icon: Award, label: "Expert Guides", desc: "Certified Trip Leaders" },
                { icon: CheckCircle, label: "Best Price", desc: "Price Match Guarantee" },
              ].map((b) => (
                <div key={b.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                  <b.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-xs">{b.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Booking Sidebar */}
          <div className="lg:w-[360px] shrink-0">
            <div className="sticky top-20 space-y-4">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">
                      ₹{trip.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-orange-100 text-sm">/ person</span>
                  </div>
                  {trip.originalPrice && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-orange-200 line-through text-sm">
                        ₹{trip.originalPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="bg-white text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">
                        {Math.round(((trip.originalPrice - trip.price) / trip.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                  <p className="text-orange-100 text-xs mt-2">Inclusive of all taxes (GST extra)</p>
                </div>

                <div className="p-5 space-y-4">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Select Batch Date
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {trip.dates.map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                            selectedDate === date
                              ? "bg-orange-500 border-orange-500 text-white"
                              : "border-gray-200 text-gray-600 hover:border-orange-300"
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  {submitted ? (
                    <div className="text-center py-6">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <p className="font-bold text-gray-900 text-lg">Enquiry Sent!</p>
                      <p className="text-gray-500 text-sm mt-1">Our team will call you within 24 hours.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setBookingError("");
                        setSubmitting(true);
                        try {
                          await submitLead({
                            name: bookingForm.name,
                            phone: bookingForm.phone,
                            email: bookingForm.email,
                            destination: `${trip.title} (${trip.location})`,
                            adults: Number(bookingForm.people),
                            notes: `Batch date: ${selectedDate} | Est. total: ₹${(trip.price * Number(bookingForm.people)).toLocaleString("en-IN")}`,
                            source: "Website",
                          });
                          setSubmitted(true);
                        } catch (err) {
                          setBookingError(
                            err instanceof Error ? err.message : "Something went wrong. Please call or WhatsApp us instead."
                          );
                        } finally {
                          setSubmitting(false);
                        }
                      }}
                      className="space-y-3"
                    >
                      <input
                        type="text"
                        placeholder="Your Full Name *"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                      />
                      <select
                        value={bookingForm.people}
                        onChange={(e) => setBookingForm({ ...bookingForm, people: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                      >
                        {[1,2,3,4,5,6,7,8].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? "Person" : "People"}</option>
                        ))}
                      </select>

                      {/* Total */}
                      <div className="bg-gray-50 rounded-xl p-3 text-sm">
                        <div className="flex justify-between text-gray-600">
                          <span>₹{trip.price.toLocaleString("en-IN")} × {bookingForm.people} person(s)</span>
                          <span>₹{(trip.price * Number(bookingForm.people)).toLocaleString("en-IN")}</span>
                        </div>
                      </div>

                      {bookingError && (
                        <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 border border-red-100 rounded-xl px-3 py-2.5">
                          <AlertCircle className="w-4 h-4 shrink-0" /> {bookingError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-300/40 text-base"
                      >
                        {submitting ? "Sending..." : `Book Now – ₹${(trip.price * Number(bookingForm.people)).toLocaleString("en-IN")}`}
                      </button>
                    </form>
                  )}

                  {/* Contact Options */}
                  <div className="flex gap-3 pt-1">
                    <a
                      href="tel:+919999999999"
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-gray-700 hover:border-orange-300 hover:text-orange-500 transition"
                    >
                      <Phone className="w-4 h-4" /> Call Us
                    </a>
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-xl py-2.5 text-sm font-medium transition"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* EMI Banner */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                <p className="text-blue-800 font-semibold text-sm">💳 EMI Available</p>
                <p className="text-blue-600 text-xs mt-1">
                  Starting from ₹{Math.round(trip.price / 3).toLocaleString("en-IN")}/month with 0% interest on select cards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
