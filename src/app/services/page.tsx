import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Hotel, Car, FileText, ArrowRight, Phone, MessageCircle } from "lucide-react";

const services = [
  {
    slug: "air-ticketing",
    icon: Plane,
    title: "Air Ticketing",
    tagline: "Best Fares. Instant Confirmation.",
    description: "Book domestic and international flights at the most competitive prices. We compare hundreds of fares to get you the best deal with instant e-ticket delivery.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-100",
    highlights: ["Domestic & International Flights", "Best Price Guarantee", "Instant E-ticket", "24/7 Booking Support"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  },
  {
    slug: "hotel-booking",
    icon: Hotel,
    title: "Hotel Booking",
    tagline: "Verified Properties. Every Budget.",
    description: "From luxury houseboats on Dal Lake to cozy mountain guesthouses — we offer verified accommodations across Jammu & Kashmir, Ladakh, and Himachal Pradesh.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "border-orange-100",
    highlights: ["Houseboats on Dal Lake", "Budget to Luxury Options", "Verified Properties Only", "Free Cancellation Options"],
    image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&q=80",
  },
  {
    slug: "cab-services",
    icon: Car,
    title: "Cab Services",
    tagline: "AC Vehicles. Expert Drivers.",
    description: "Comfortable and reliable cab services for airport transfers, local sightseeing, and outstation trips across Kashmir, Ladakh, and Himachal Pradesh.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "border-green-100",
    highlights: ["Airport Pick-up & Drop", "Kashmir Sightseeing", "Outstation Trips", "AC Cars, SUVs & Tempo Travellers"],
    image: "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=600&q=80",
  },
  {
    slug: "visa-assistance",
    icon: FileText,
    title: "Visa Assistance",
    tagline: "Hassle-Free Processing.",
    description: "Complete visa documentation assistance for international tourists visiting India and for Indian travellers heading abroad. We handle the paperwork so you can focus on the journey.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-100",
    highlights: ["India Tourist Visa for Foreigners", "International Visa for Indians", "Document Checklist", "End-to-End Assistance"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0f172a] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From booking your flight to arranging your hotel, cab, and visa — Shera Travels is your one-stop travel solution for Kashmir and beyond.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className={`w-12 h-12 ${service.color} ${service.borderColor} border rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{service.title}</h2>
                <p className="text-orange-500 text-sm font-semibold mb-3">{service.tagline}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Highlights */}
                <ul className="grid grid-cols-2 gap-2 mb-5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Need a Custom Package?</h3>
            <p className="text-gray-400">Combine any of our services into one seamless, personalized travel experience.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="tel:+919149406965"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition">
              <Phone className="w-4 h-4" /> Call Us
            </a>
            <a href="https://wa.me/919149406965" target="_blank"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
