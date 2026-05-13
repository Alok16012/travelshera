import { Shield, Users, Award, HeadphonesIcon, MapPin, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified & Safe Tours",
    description: "Every package is verified by our expert team. All accommodations, guides and routes are thoroughly vetted for your safety.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    title: "Personalized Small Groups",
    description: "We keep group sizes small and personal so you get authentic, immersive experiences — not just a tourist trail.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Award,
    title: "Expert Local Guides",
    description: "Our certified local guides have insider knowledge of every valley, trail, and hidden gem Kashmir has to offer.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    description: "We're with you every step of the way — from planning to return. Our team is available round the clock.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: MapPin,
    title: "30+ Destinations",
    description: "From the snow peaks of Gulmarg to the meadows of Pahalgam — we cover every corner of Kashmir and beyond.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Star,
    title: "Best Price Guarantee",
    description: "Packages to match every budget with no hidden charges. We also offer Air Ticketing, Hotel Booking, Cab & Visa services.",
    color: "bg-yellow-50 text-yellow-600",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Shera Travels?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With over a decade of experience in Kashmir tourism, we are your most trusted partner for unforgettable travel experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "5,000+", label: "Travellers Served" },
            { value: "500+", label: "Tours Completed" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 px-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl"
            >
              <p className="text-white font-bold text-3xl">{stat.value}</p>
              <p className="text-orange-100 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
