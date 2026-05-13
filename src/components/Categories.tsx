import Link from "next/link";

const categories = [
  {
    title: "Kashmir Tours",
    subtitle: "15+ Packages",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=80",
    emoji: "🏔️",
    color: "from-blue-900/80",
    href: "/trips?category=Kashmir",
  },
  {
    title: "Ladakh Tours",
    subtitle: "10+ Packages",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=400&q=80",
    emoji: "🗻",
    color: "from-amber-900/80",
    href: "/trips?category=Mountains",
  },
  {
    title: "Pilgrimage",
    subtitle: "8+ Packages",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80",
    emoji: "🛕",
    color: "from-orange-900/80",
    href: "/trips?category=Pilgrimage",
  },
  {
    title: "Honeymoon",
    subtitle: "5+ Packages",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=400&q=80",
    emoji: "💑",
    color: "from-pink-900/80",
    href: "/trips?category=Honeymoon",
  },
  {
    title: "Winter Snow",
    subtitle: "6+ Packages",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
    emoji: "❄️",
    color: "from-indigo-900/80",
    href: "/trips?category=Kashmir",
  },
  {
    title: "Manali Tours",
    subtitle: "8+ Packages",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    emoji: "🌲",
    color: "from-green-900/80",
    href: "/trips?category=Mountains",
  },
];

export default function Categories() {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-10 px-4">
          <p className="text-orange-500 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-1 sm:mb-2">
            Browse by Type
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Explore Tour Categories
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto hidden sm:block">
            From snow-covered Gulmarg to spiritual Vaishno Devi — find the perfect Kashmir experience for you.
          </p>
        </div>

        {/* Mobile: horizontal scroll bubbles */}
        <div className="sm:hidden px-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-3">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="flex flex-col items-center gap-2 shrink-0"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-100 shadow-md">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs font-semibold text-gray-700 text-center w-16 leading-tight">
                  {cat.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-4 px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden h-48 sm:h-56 cursor-pointer hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent`} />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <p className="text-white font-bold text-sm leading-tight">{cat.title}</p>
                <p className="text-white/70 text-xs mt-0.5">{cat.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
