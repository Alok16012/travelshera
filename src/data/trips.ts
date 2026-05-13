export interface TripDetail {
  id: number;
  slug: string;
  title: string;
  location: string;
  state: string;
  image: string;
  gallery: string[];
  price: number;
  originalPrice?: number;
  duration: string;
  days: number;
  nights: number;
  groupSize: string;
  minAge: number;
  rating: number;
  reviews: number;
  dates: string[];
  difficulty: "Easy" | "Moderate" | "Challenging";
  badge?: string;
  category: string;
  overview: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string;
    accommodation: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  importantNotes: string[];
  thingsToCarry: string[];
}

export const trips: TripDetail[] = [
  {
    id: 1,
    slug: "magnificent-kashmir",
    title: "Magnificent Kashmir – 6 Days in Paradise",
    location: "Srinagar, Kashmir",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    ],
    price: 11999,
    originalPrice: 12999,
    duration: "6D 5N",
    days: 6,
    nights: 5,
    groupSize: "10-20",
    minAge: 5,
    rating: 4.9,
    reviews: 312,
    dates: ["Jun 5", "Jun 15", "Jul 1", "Jul 15", "Aug 1"],
    difficulty: "Easy",
    badge: "Bestseller",
    category: "Kashmir",
    overview:
      "Experience the timeless beauty of Kashmir — often called 'Paradise on Earth'. This 6-day tour takes you through the iconic Dal Lake houseboats, the snow meadows of Gulmarg, the lush valleys of Pahalgam, and the stunning Mughal gardens of Srinagar. A perfectly crafted package for families, couples, and first-time visitors to the valley.",
    highlights: [
      "Overnight stay in a traditional houseboat on Dal Lake",
      "Shikara ride on the serene Dal Lake at sunrise",
      "Gulmarg – the 'Meadow of Flowers' & gondola ride",
      "Pahalgam – the Valley of Shepherds & Betaab Valley",
      "Visit Mughal Gardens – Shalimar Bagh, Nishat Bagh",
      "Sonamarg – the 'Golden Meadow' with glacier views",
      "Explore Lal Chowk and local Kashmir markets",
      "Authentic Wazwan cuisine experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description:
          "Arrive at Srinagar International Airport. Transfer to your traditional houseboat on Dal Lake. Evening Shikara ride on the lake at sunset. Welcome dinner featuring authentic Kashmiri Wazwan cuisine.",
        meals: "Dinner",
        accommodation: "Houseboat on Dal Lake, Srinagar",
      },
      {
        day: 2,
        title: "Srinagar – Mughal Gardens & Local Sightseeing",
        description:
          "Early morning Shikara ride to the floating vegetable market. Visit the magnificent Mughal Gardens — Shalimar Bagh, Nishat Bagh, and Chashme Shahi. Afternoon visit to Shankaracharya Temple for panoramic city views. Evening at Lal Chowk market.",
        meals: "Breakfast, Dinner",
        accommodation: "Houseboat on Dal Lake, Srinagar",
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg",
        description:
          "Drive to Gulmarg (56 km, 2 hrs) — the 'Meadow of Flowers' at 8,694 ft. Take the Gulmarg Gondola (Asia's highest cable car) to Kongdori and Apharwat Peak for breathtaking snow views. Optional skiing and snow activities. Return to Srinagar.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Srinagar",
      },
      {
        day: 4,
        title: "Srinagar to Pahalgam",
        description:
          "Drive to Pahalgam (95 km, 2.5 hrs) through the enchanting Lidder Valley. Visit Betaab Valley (famous from Bollywood movie), Aru Valley, and Chandanwari. Enjoy pony rides and the pristine river. Return to Pahalgam for overnight stay.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Pahalgam",
      },
      {
        day: 5,
        title: "Pahalgam to Sonamarg & Return",
        description:
          "Drive to Sonamarg (the 'Golden Meadow') at 8,957 ft. Take a thamdi (pony/snowmobile) ride to Thajiwas Glacier — a snow field even in summer. Enjoy the breathtaking alpine scenery. Return to Srinagar by evening.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Srinagar",
      },
      {
        day: 6,
        title: "Departure from Srinagar",
        description:
          "After breakfast, last morning Shikara ride. Visit the famous Kashmir craft emporia for pashmina shawls, carpets, and walnut wood items. Transfer to Srinagar airport for departure. Trip ends with memories of Paradise!",
        meals: "Breakfast",
        accommodation: "N/A",
      },
    ],
    inclusions: [
      "5 nights accommodation (1 night houseboat + 3 nights hotel + 1 night Pahalgam)",
      "All meals as mentioned in itinerary",
      "All transfers by private AC vehicle",
      "Experienced local guide throughout the tour",
      "Shikara ride on Dal Lake (1 hour)",
      "Gulmarg Gondola Phase 1 ticket",
      "All toll taxes and parking charges",
      "Welcome drink on arrival",
    ],
    exclusions: [
      "Airfare to/from Srinagar",
      "Gulmarg Gondola Phase 2 (optional, ₹900 extra)",
      "Personal expenses and tips",
      "Pony rides and snow activities (paid separately)",
      "Travel insurance (highly recommended)",
      "Any meals not mentioned",
      "GST as applicable",
    ],
    importantNotes: [
      "Kashmir is safe and welcoming — local administration ensures tourist safety",
      "Best time is April–October. Winters bring heavy snowfall but are also beautiful",
      "Gulmarg Gondola is subject to weather and operational hours",
      "Carry warm clothes even in summer — temperatures drop at higher altitudes",
      "Mobile networks (Jio, Airtel) work well in Srinagar, Gulmarg, and Pahalgam",
    ],
    thingsToCarry: [
      "Valid government ID proof (mandatory)",
      "Warm jacket and fleece layer",
      "Comfortable walking shoes",
      "Sunscreen SPF 30+ and sunglasses",
      "Personal medications",
      "Camera / power bank",
      "Cash (ATMs available in Srinagar and major towns)",
    ],
  },
  {
    id: 2,
    slug: "kashmir-vaishno-devi",
    title: "Kashmir Vaishno Devi Shiv – 9 Days Pilgrimage & Valley",
    location: "Srinagar, Katra, Kashmir",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
    ],
    price: 13999,
    originalPrice: 14999,
    duration: "9D 8N",
    days: 9,
    nights: 8,
    groupSize: "10-25",
    minAge: 8,
    rating: 4.8,
    reviews: 189,
    dates: ["Jun 1", "Jun 20", "Jul 10", "Aug 5", "Sep 1"],
    difficulty: "Moderate",
    badge: "Hot Deal",
    category: "Pilgrimage",
    overview:
      "A spiritually enriching and visually stunning journey combining the divine blessings of Vaishno Devi shrine in Katra with the earthly paradise of Kashmir Valley. This 9-day package covers the Mata Vaishno Devi yatra, Jammu, Srinagar sightseeing, Gulmarg, Pahalgam, and Sonamarg — giving you both spiritual fulfilment and natural beauty.",
    highlights: [
      "Mata Vaishno Devi Darshan in Katra (holy cave shrine)",
      "Shankracharya Temple and Mughal Gardens, Srinagar",
      "Gulmarg Gondola ride – Asia's highest cable car",
      "Betaab Valley and Aru Valley, Pahalgam",
      "Shikara ride on the pristine Dal Lake",
      "Sonamarg – Thajiwas Glacier visit",
      "Traditional Kashmiri Wazwan dinner",
      "Shopping for authentic Pashmina and saffron",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jammu / Katra",
        description:
          "Arrive at Jammu airport or railway station. Transfer to Katra (50 km) — the base camp for Vaishno Devi. Check in to hotel, rest and preparation for next day's yatra.",
        meals: "Dinner",
        accommodation: "Hotel in Katra",
      },
      {
        day: 2,
        title: "Vaishno Devi Yatra",
        description:
          "Early morning start for Vaishno Devi trek (14 km from Katra to sanctum). Darshan at Mata Vaishno Devi cave shrine — one of India's most sacred pilgrimages. Helicopter option available (at extra cost). Return to Katra by evening.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Katra",
      },
      {
        day: 3,
        title: "Katra to Srinagar",
        description:
          "Morning drive to Srinagar via the scenic Jammu-Srinagar National Highway (270 km, 6-7 hrs). Check in to houseboat on Dal Lake. Evening Shikara ride.",
        meals: "Breakfast, Dinner",
        accommodation: "Houseboat on Dal Lake",
      },
      {
        day: 4,
        title: "Srinagar Sightseeing",
        description:
          "Visit Mughal Gardens (Shalimar, Nishat, Chashme Shahi), Shankaracharya Temple, and Hazratbal Mosque. Evening at Lal Chowk for local market shopping.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Srinagar",
      },
      {
        day: 5,
        title: "Srinagar to Gulmarg",
        description:
          "Day excursion to Gulmarg — the famous ski resort and meadow at 8,694 ft. Gondola ride to Kongdori. Snow activities in season. Return to Srinagar.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Srinagar",
      },
      {
        day: 6,
        title: "Srinagar to Pahalgam",
        description:
          "Drive to Pahalgam through the Lidder valley. Visit Betaab Valley, Aru Valley, and Chandanwari. Enjoy the pristine mountain environment.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Pahalgam",
      },
      {
        day: 7,
        title: "Pahalgam Local Exploration",
        description:
          "Explore Baisaran meadow (Mini Switzerland of India), Tulian Lake (short trek), and local market. Evening leisure by the Lidder River.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Pahalgam",
      },
      {
        day: 8,
        title: "Pahalgam to Sonamarg & Return to Srinagar",
        description:
          "Day trip to Sonamarg — the Golden Meadow at 8,957 ft. Visit Thajiwas Glacier via pony/snow scooter. Return to Srinagar for farewell dinner.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Srinagar",
      },
      {
        day: 9,
        title: "Departure from Srinagar",
        description:
          "Last morning in paradise. Visit craft emporia for Pashmina shawls, saffron, and Kashmiri handicrafts. Transfer to Srinagar airport. Safe travels!",
        meals: "Breakfast",
        accommodation: "N/A",
      },
    ],
    inclusions: [
      "8 nights accommodation (Katra 2N + Houseboat 1N + Srinagar 3N + Pahalgam 2N)",
      "All meals as per itinerary",
      "All transfers in AC vehicle",
      "Vaishno Devi yatra registration assistance",
      "Gulmarg Gondola Phase 1 ticket",
      "Experienced local guide",
      "All toll taxes and parking",
    ],
    exclusions: [
      "Airfare/train fare to Jammu",
      "Helicopter for Vaishno Devi (optional, ~₹3,000)",
      "Pony charges for Vaishno Devi trek",
      "Personal expenses and shopping",
      "Travel insurance",
      "GST as applicable",
    ],
    importantNotes: [
      "Vaishno Devi yatra registration (SRVNSB) must be done online before departure",
      "The 14 km yatra trek is moderate — not suitable for people with severe knee problems",
      "Carry warm clothes — temperatures drop significantly at higher altitudes",
      "Helicopter for Vaishno Devi is subject to availability and weather",
    ],
    thingsToCarry: [
      "Comfortable trekking shoes (mandatory for yatra)",
      "Warm jacket and layers",
      "Rain jacket or poncho",
      "Walking stick (helpful for yatra)",
      "Government ID (mandatory)",
      "Personal medications",
      "Cash for personal expenses",
    ],
  },
  {
    id: 3,
    slug: "heart-of-kashmir-bliss",
    title: "5 Days at the Heart of Kashmir Bliss",
    location: "Srinagar, Gulmarg, Pahalgam",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    ],
    price: 21999,
    originalPrice: 22999,
    duration: "5D 4N",
    days: 5,
    nights: 4,
    groupSize: "2-15",
    minAge: 5,
    rating: 4.9,
    reviews: 97,
    dates: ["Jun 8", "Jun 22", "Jul 6", "Jul 20", "Aug 3"],
    difficulty: "Easy",
    badge: "Premium",
    category: "Kashmir",
    overview:
      "This premium 5-day Kashmir package is designed for those who want the very best of the valley in a compact, luxurious experience. Stay in premium hotels and houseboats, enjoy private guided tours, and immerse yourself in the soul of Kashmir — its gardens, lakes, meadows, and legendary hospitality. Perfect for honeymoon couples and discerning travellers.",
    highlights: [
      "Premium houseboat stay with all amenities on Dal Lake",
      "Private Shikara ride at dawn — magical golden hour",
      "Exclusive Gulmarg Gondola experience (Phase 1 & 2)",
      "Betaab Valley private guided tour",
      "Authentic Wazwan dinner at heritage restaurant",
      "Private guided Mughal Gardens tour",
      "Kashmiri cooking experience / saffron plantation visit",
      "Shopping assistance for authentic Pashmina and handicrafts",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar – Houseboat Check-in",
        description:
          "Arrive at Srinagar airport. Transfer to your premium houseboat on Dal Lake. Private Shikara ride in the evening. Welcome dinner with authentic Kashmiri Wazwan.",
        meals: "Dinner",
        accommodation: "Premium Houseboat, Dal Lake",
      },
      {
        day: 2,
        title: "Srinagar Sightseeing – Gardens & Heritage",
        description:
          "Dawn Shikara ride to the floating market. Private guided tour of Mughal Gardens (Shalimar, Nishat, Chashme Shahi). Visit Shankaracharya Temple for panoramic views. Afternoon visit saffron fields (seasonal) and craft workshops for Pashmina weaving.",
        meals: "Breakfast, Dinner",
        accommodation: "Premium Hotel, Srinagar",
      },
      {
        day: 3,
        title: "Full Day Gulmarg",
        description:
          "Drive to Gulmarg for a full day experience. Gondola ride Phase 1 to Kongdori AND Phase 2 to Apharwat Peak (4,390m) for panoramic Himalayan views. Snow activities in season. Private guided mountain walk. Return to Srinagar.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Premium Hotel, Srinagar",
      },
      {
        day: 4,
        title: "Pahalgam – The Valley of Shepherds",
        description:
          "Drive to Pahalgam through the stunning Lidder Valley. Visit Betaab Valley, Aru Valley, and Chandanwari. Optional pony ride through the meadows. Enjoy a riverside lunch. Return to Srinagar by evening.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Premium Hotel, Srinagar",
      },
      {
        day: 5,
        title: "Sonamarg Day Trip & Departure",
        description:
          "Morning drive to Sonamarg — the Golden Meadow. Visit Thajiwas Glacier. Return to Srinagar for lunch. Shopping for authentic Kashmiri crafts. Transfer to airport for departure.",
        meals: "Breakfast, Lunch",
        accommodation: "N/A",
      },
    ],
    inclusions: [
      "4 nights in premium accommodation (1 premium houseboat + 3 luxury hotels)",
      "All meals as mentioned (breakfast + dinner daily + 2 lunches)",
      "Private AC vehicle throughout",
      "Dedicated personal guide for the entire tour",
      "Gulmarg Gondola Phase 1 & Phase 2",
      "Shikara ride (1 hr morning + 1 hr evening)",
      "Kashmiri cooking/craft demonstration",
      "All toll taxes, parking, and permits",
    ],
    exclusions: [
      "Airfare to/from Srinagar",
      "Adventure activities (snow bikes, skiing — charged separately)",
      "Personal shopping expenses",
      "Pony rides (optional)",
      "Travel insurance",
      "GST as applicable",
    ],
    importantNotes: [
      "This is a premium package — accommodations are carefully selected luxury properties",
      "Gondola Phase 2 is subject to weather and operational status",
      "Ideal for couples, families, and small groups",
      "Kashmiri saffron plantation visit is seasonal (October–November)",
    ],
    thingsToCarry: [
      "Warm jacket (essential even in summer)",
      "Comfortable walking shoes",
      "Sunscreen and lip balm",
      "Government ID (mandatory)",
      "Camera for stunning landscapes",
      "Personal medications",
    ],
  },
  {
    id: 4,
    slug: "gulmarg-snow-adventure",
    title: "Gulmarg Snow Adventure – Weekend Escape",
    location: "Gulmarg, Kashmir",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    price: 8999,
    originalPrice: 10499,
    duration: "3D 2N",
    days: 3,
    nights: 2,
    groupSize: "5-15",
    minAge: 10,
    rating: 4.7,
    reviews: 143,
    dates: ["Dec 20", "Jan 5", "Jan 18", "Feb 3", "Feb 18"],
    difficulty: "Easy",
    badge: "Trending",
    category: "Kashmir",
    overview:
      "Gulmarg — the 'Meadow of Flowers' — transforms into a winter wonderland from December to March. This action-packed 3-day weekend package is perfect for those who want to experience snow, skiing, and the world's highest gondola in one of Kashmir's most iconic destinations. A quick escape from the city that delivers maximum thrills.",
    highlights: [
      "Gulmarg Gondola – Phase 1 & 2 (Asia's highest cable car)",
      "Skiing on world-class slopes (beginner to advanced)",
      "Snow tubing, snow biking, and snowball fights",
      "Panoramic views of Nanga Parbat and Himalayan ranges",
      "Photography at the famous Strawberry Valley",
      "Experience authentic Kashmiri kangri (fire pot) culture",
      "Optional snowmobile ride through powder snow",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gulmarg",
        description:
          "Arrive at Srinagar airport. Transfer directly to Gulmarg (56 km, 1.5 hrs). Check in to hotel. Afternoon walk in the snow meadows. Evening by the fireplace with Kahwa (Kashmiri tea).",
        meals: "Dinner",
        accommodation: "Hotel in Gulmarg",
      },
      {
        day: 2,
        title: "Full Day Snow Activities",
        description:
          "Early morning Gondola ride — Phase 1 to Kongdori, then Phase 2 to Apharwat Peak (14,400 ft) for stunning Himalayan panoramas. Full day of skiing, snow tubing, and snowmobile rides. Skiing lessons available for beginners. Campfire and bonfire in the evening.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Hotel in Gulmarg",
      },
      {
        day: 3,
        title: "Morning Activities & Departure",
        description:
          "Morning photography session in the snow meadows. Visit the St. Mary's Church (covered in snow). Last round of snow activities before checkout. Transfer to Srinagar airport.",
        meals: "Breakfast",
        accommodation: "N/A",
      },
    ],
    inclusions: [
      "2 nights hotel accommodation in Gulmarg",
      "All meals as mentioned",
      "AC vehicle transfers (Srinagar–Gulmarg–Srinagar)",
      "Gulmarg Gondola Phase 1 & Phase 2 tickets",
      "Ski equipment rental (1 day)",
      "Snow activities package (tubing, snowmobile ride)",
      "Local guide",
    ],
    exclusions: [
      "Airfare to Srinagar",
      "Ski instructor charges (optional, ₹1,500/hr)",
      "Additional gondola rides",
      "Personal expenses",
      "Travel insurance",
      "GST as applicable",
    ],
    importantNotes: [
      "Gulmarg Snow Adventure is best December to March",
      "Gondola Phase 2 may be closed in heavy snowfall or bad weather",
      "Skiing requires advance booking during peak season (Christmas, New Year)",
      "Temperature can drop to -15°C — carry heavy woolens",
    ],
    thingsToCarry: [
      "Heavy winter jacket (mandatory)",
      "Thermal inners (2 sets)",
      "Waterproof snow boots",
      "Woollen cap, gloves, and neck warmer",
      "Sunscreen SPF 50+ and UV sunglasses (snow glare is intense)",
      "Government ID",
    ],
  },
  {
    id: 5,
    slug: "kashmir-honeymoon",
    title: "Kashmir Honeymoon Special – Paradise for Two",
    location: "Srinagar, Gulmarg, Pahalgam",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    price: 18999,
    originalPrice: undefined,
    duration: "7D 6N",
    days: 7,
    nights: 6,
    groupSize: "2",
    minAge: 18,
    rating: 5.0,
    reviews: 78,
    dates: ["Jun 10", "Jun 24", "Jul 8", "Jul 22", "Aug 5"],
    difficulty: "Easy",
    badge: "Trending",
    category: "Honeymoon",
    overview:
      "Kashmir — 'Paradise on Earth' — has been the dream honeymoon destination for generations. This exclusive 7-day honeymoon package is crafted for couples who want romance, luxury, and unforgettable memories. From candlelit dinners on Dal Lake to private pony rides through Pahalgam's meadows, every moment is designed to be magical.",
    highlights: [
      "Private luxury houseboat stay on Dal Lake",
      "Candlelit Shikara ride at sunset",
      "Romantic dinner at heritage restaurant",
      "Private Gulmarg Gondola experience",
      "Pony ride through meadows of Pahalgam",
      "Couple's Shikara picnic on Dal Lake",
      "Traditional Kashmiri welcome ceremony",
      "Customized itinerary with dedicated guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival – Romantic Welcome",
        description:
          "Arrive at Srinagar airport. Rose petal welcome on your private houseboat. Private Shikara ride at sunset. Candlelit dinner aboard the houseboat with Dal Lake views.",
        meals: "Dinner",
        accommodation: "Premium Houseboat, Dal Lake",
      },
      {
        day: 2,
        title: "Srinagar Sightseeing",
        description:
          "Private dawn Shikara ride to floating gardens. Visit Mughal Gardens. Couple's photography session at Nishat Bagh. Lunch at a heritage rooftop restaurant with mountain views.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Premium Houseboat, Dal Lake",
      },
      {
        day: 3,
        title: "Gulmarg – Snow & Romance",
        description:
          "Full day in Gulmarg. Private gondola ride to Apharwat Peak. Romantic lunch in a snow café. Snow activities — snowmobile ride for two. Return to Srinagar.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Luxury Hotel, Srinagar",
      },
      {
        day: 4,
        title: "Pahalgam – Valley of Shepherds",
        description:
          "Drive to Pahalgam. Private pony ride through Betaab Valley and Aru Valley meadows. Riverside picnic lunch. Evening walk by the Lidder River.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Boutique Hotel, Pahalgam",
      },
      {
        day: 5,
        title: "Pahalgam Leisure Day",
        description:
          "Relax at the hotel spa (if available). Optional Baisaran meadow visit by pony. Afternoon couple's photography in the meadows. Special anniversary/honeymoon celebration dinner.",
        meals: "Breakfast, Dinner",
        accommodation: "Boutique Hotel, Pahalgam",
      },
      {
        day: 6,
        title: "Sonamarg & Return to Srinagar",
        description:
          "Morning drive to Sonamarg — the Golden Meadow. Glacier visit, scenic photography. Return to Srinagar. Shopping for authentic Pashmina shawls and Kashmiri handicrafts.",
        meals: "Breakfast, Dinner",
        accommodation: "Luxury Hotel, Srinagar",
      },
      {
        day: 7,
        title: "Farewell from Paradise",
        description:
          "Last morning Shikara ride. Romantic farewell breakfast aboard the houseboat. Transfer to Srinagar airport with memories to last a lifetime.",
        meals: "Breakfast",
        accommodation: "N/A",
      },
    ],
    inclusions: [
      "6 nights luxury accommodation (2N premium houseboat + 2N Pahalgam boutique hotel + 2N Srinagar luxury hotel)",
      "All meals as mentioned (including 3 special romantic dinners)",
      "Private AC vehicle exclusively for the couple",
      "Dedicated personal guide throughout",
      "Gulmarg Gondola Phase 1 & Phase 2",
      "Rose petal welcome on houseboat",
      "Couple's Shikara rides (morning + sunset)",
      "Candlelit honeymoon dinner arrangement",
    ],
    exclusions: [
      "Airfare to/from Srinagar",
      "Spa treatments (additional)",
      "Personal shopping",
      "Travel insurance (highly recommended for honeymoon)",
      "GST as applicable",
    ],
    importantNotes: [
      "Please inform us of any special occasions (anniversary, honeymoon surprises) when booking",
      "Best time for honeymoon in Kashmir: April–June (spring) and September–October (autumn)",
      "Winter (Dec–Feb) offers snow-covered romance in Gulmarg",
      "This is an exclusive couple-only package — fully private",
    ],
    thingsToCarry: [
      "Warm jacket (evenings can be cool even in summer)",
      "Comfortable walking shoes",
      "Formal wear for special dinners",
      "Camera (bring your best lens!)",
      "Government ID (both partners)",
      "Marriage certificate (for couple packages and some accommodations)",
    ],
  },
  {
    id: 6,
    slug: "ladakh-road-trip",
    title: "Ladakh – The Land of High Passes Road Trip",
    location: "Leh, Ladakh",
    state: "Ladakh",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    ],
    price: 18999,
    originalPrice: 22999,
    duration: "9D 8N",
    days: 9,
    nights: 8,
    groupSize: "8-12",
    minAge: 18,
    rating: 4.9,
    reviews: 154,
    dates: ["Jun 15", "Jul 1", "Jul 20", "Aug 5", "Aug 20"],
    difficulty: "Challenging",
    badge: "Bestseller",
    category: "Mountains",
    overview:
      "Ladakh — the crown of India! This 9-day road trip through the world's highest motorable passes is the ultimate bucket-list adventure. From the magnetic Pangong Lake to Khardung La, from ancient monasteries to Nubra's sand dunes — Ladakh is a feast for the senses organized seamlessly by Shera Travels.",
    highlights: [
      "Drive over Khardung La – world's highest motorable road (18,380 ft)",
      "Camp beside the stunning Pangong Lake",
      "Explore the surreal landscapes of Nubra Valley",
      "Ride double-humped Bactrian camels in Hunder sand dunes",
      "Visit ancient monasteries – Thiksey, Hemis, Diskit",
      "Witness the confluence at Sangam (Indus + Zanskar)",
      "Magnetic Hill experience",
      "Explore Leh old town and Shanti Stupa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh – Acclimatization",
        description:
          "Fly to Leh airport (11,562 ft). Complete rest for acclimatization — DO NOT exert yourself on Day 1. Light walk to Shanti Stupa in the evening if feeling well.",
        meals: "Dinner",
        accommodation: "Hotel in Leh",
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        description:
          "Visit Leh Palace, Shanti Stupa, Leh market. Afternoon visit Sangam — confluence of Indus and Zanskar rivers. Magnetic Hill, Gurudwara Pathar Sahib.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Leh",
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La",
        description:
          "Drive over Khardung La Pass (18,380 ft) to Nubra Valley. Visit Diskit Monastery and Maitreya Buddha statue. Evening camel safari on Bactrian camels in Hunder sand dunes.",
        meals: "Breakfast, Dinner",
        accommodation: "Camp/Guesthouse in Nubra",
      },
      {
        day: 4,
        title: "Nubra Valley Exploration",
        description:
          "Explore Sumur village and Samstanling Monastery. Visit Panamik hot springs. Enjoy the unique landscape of sand dunes amid snow-capped peaks.",
        meals: "Breakfast, Dinner",
        accommodation: "Camp/Guesthouse in Nubra",
      },
      {
        day: 5,
        title: "Nubra to Pangong Lake",
        description:
          "Drive from Nubra to Pangong Lake via Shyok River valley — one of the most scenic drives in India. Arrive at Pangong Lake (14,270 ft) by evening.",
        meals: "Breakfast, Dinner",
        accommodation: "Camping at Pangong Lake",
      },
      {
        day: 6,
        title: "Pangong Lake Day",
        description:
          "Sunrise at Pangong Lake — absolutely magical! Explore the lake shores. Drive along the lakeside to Man, Merak villages. Sunset photography.",
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camping at Pangong Lake",
      },
      {
        day: 7,
        title: "Pangong to Leh via Chang La",
        description:
          "Drive back to Leh via Chang La Pass (17,590 ft). Visit Hemis Monastery and Thiksey Monastery for panoramic views.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Leh",
      },
      {
        day: 8,
        title: "Leh – Leisure & Shopping",
        description:
          "Free day in Leh. Visit Leh market — pashmina shawls, thangka paintings, local jewelry. Visit Stok Palace and museum. Farewell dinner.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Leh",
      },
      {
        day: 9,
        title: "Departure from Leh",
        description:
          "Early morning transfer to Leh airport. Fly back to your home city. The most epic journey of your life ends here!",
        meals: "Breakfast",
        accommodation: "N/A",
      },
    ],
    inclusions: [
      "8 nights accommodation (hotels + camping at Pangong + Nubra)",
      "All meals as mentioned",
      "All transfers in SUVs/Tempo Travellers",
      "Inner Line Permits for Nubra, Pangong, and restricted areas",
      "Experienced and certified trip leader",
      "Bactrian camel safari in Hunder",
      "Oxygen cylinders and first aid kit",
      "Shera Travels trip certificate",
    ],
    exclusions: [
      "Flights to/from Leh (book separately)",
      "Personal expenses and tips",
      "Travel and medical insurance (mandatory for Ladakh)",
      "Any meals not mentioned",
      "GST as applicable",
    ],
    importantNotes: [
      "Acclimatization is MANDATORY — do not skip Day 1 rest",
      "Altitude sickness medication (Diamox) recommended — consult doctor before trip",
      "Travel insurance with emergency evacuation cover is strongly recommended",
      "Carry cash — ATMs in Leh but not available beyond",
    ],
    thingsToCarry: [
      "Heavy winter jacket (even in summer)",
      "Thermal inners and warm layers",
      "Comfortable trekking shoes",
      "Sunscreen SPF 60+ and UV protection sunglasses",
      "Personal medications including altitude sickness pills",
      "Valid government ID (mandatory for inner line permits)",
      "Cash (minimum ₹5,000 extra)",
    ],
  },
  {
    id: 7,
    slug: "manali-tour",
    title: "Manali – Rohtang Pass & Snow Adventure",
    location: "Manali, Himachal Pradesh",
    state: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    ],
    price: 9499,
    originalPrice: 11999,
    duration: "5D 4N",
    days: 5,
    nights: 4,
    groupSize: "10-18",
    minAge: 12,
    rating: 4.6,
    reviews: 201,
    dates: ["Jun 7", "Jun 21", "Jul 5", "Jul 19", "Aug 2"],
    difficulty: "Easy",
    badge: undefined,
    category: "Mountains",
    overview:
      "Manali is the crown jewel of Himachal Pradesh — a hill station nestled in the Beas River Valley. This 5-day package covers the iconic Rohtang Pass, Solang Valley, Hadimba Temple, and river rafting. Organized by Shera Travels for families, couples, and first-time mountain travellers.",
    highlights: [
      "Snow adventure at Rohtang Pass (13,050 ft)",
      "Paragliding and zorbing at Solang Valley",
      "Visit the 16th century Hadimba Devi Temple",
      "White water river rafting in Beas River",
      "Explore Old Manali cafés and market",
      "Vashisht hot water springs",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description:
          "Arrive in Manali. Check in, freshen up. Afternoon visit Hadimba Temple and Old Manali. Evening stroll at Mall Road.",
        meals: "Dinner",
        accommodation: "Hotel in Manali",
      },
      {
        day: 2,
        title: "Rohtang Pass Adventure",
        description:
          "Early morning drive to Rohtang Pass (13,050 ft). Enjoy snow activities, snow biking, photography. Return via Kothi for valley views.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Manali",
      },
      {
        day: 3,
        title: "Solang Valley Activities",
        description:
          "Full day at Solang Valley for paragliding, zorbing, ATV rides, and snowmobile (seasonal). Evening campfire.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Manali",
      },
      {
        day: 4,
        title: "River Rafting & Kullu",
        description:
          "White water river rafting in Beas River (14 km). Drive to Kullu for Raghunath Temple. Return to Manali for shopping evening.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Manali",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "After breakfast, visit Vashisht hot springs and Manu Temple. Check out. Departure transfers.",
        meals: "Breakfast",
        accommodation: "N/A",
      },
    ],
    inclusions: [
      "4 nights accommodation in comfortable hotels",
      "All meals as mentioned",
      "Private cab transfers for sightseeing",
      "Rohtang Pass permit",
      "River rafting (1 session – 14 km)",
      "Experienced trip coordinator",
      "Welcome drink on arrival",
    ],
    exclusions: [
      "Travel to/from Manali",
      "Adventure activities at Solang (paid separately)",
      "Personal expenses",
      "Travel insurance",
      "GST as applicable",
    ],
    importantNotes: [
      "Rohtang Pass is closed on Tuesdays for maintenance",
      "Carry warm clothes even in summer",
      "Adventure activities at Solang subject to weather",
    ],
    thingsToCarry: [
      "Heavy jacket and warm layers",
      "Comfortable shoes",
      "Sunscreen, sunglasses, and lip balm",
      "Government ID (mandatory for Rohtang permit)",
      "Personal medications",
    ],
  },
  {
    id: 8,
    slug: "kashmir-budget-package",
    title: "Kashmir Budget Package – Valley on a Shoestring",
    location: "Srinagar, Kashmir",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
    ],
    price: 7999,
    originalPrice: 9499,
    duration: "4D 3N",
    days: 4,
    nights: 3,
    groupSize: "10-20",
    minAge: 5,
    rating: 4.6,
    reviews: 234,
    dates: ["Jun 3", "Jun 17", "Jul 1", "Jul 15", "Aug 1"],
    difficulty: "Easy",
    badge: "Budget",
    category: "Kashmir",
    overview:
      "Explore the best of Kashmir without breaking the bank! This budget-friendly 4-day package covers all the must-see sights of the Kashmir Valley — Dal Lake, Gulmarg, and Pahalgam — with comfortable accommodation and guided tours. Shera Travels believes that Paradise on Earth should be accessible to everyone.",
    highlights: [
      "Houseboat stay experience on Dal Lake",
      "Shikara ride on Dal Lake",
      "Gulmarg day excursion with Gondola Phase 1",
      "Pahalgam valley visit — Betaab Valley",
      "Mughal Gardens tour in Srinagar",
      "Local market shopping for Kashmiri products",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description:
          "Arrive at Srinagar. Transfer to houseboat on Dal Lake. Evening Shikara ride. Dinner with Kashmiri specialties.",
        meals: "Dinner",
        accommodation: "Houseboat on Dal Lake",
      },
      {
        day: 2,
        title: "Srinagar & Gulmarg",
        description:
          "Morning visit Mughal Gardens. Drive to Gulmarg for Gondola Phase 1. Snow activities. Return to Srinagar.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Srinagar",
      },
      {
        day: 3,
        title: "Pahalgam Day Tour",
        description:
          "Drive to Pahalgam. Visit Betaab Valley and Aru Valley. Enjoy the scenic Lidder river. Return to Srinagar.",
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Srinagar",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Last Shikara ride. Local market shopping. Transfer to Srinagar airport.",
        meals: "Breakfast",
        accommodation: "N/A",
      },
    ],
    inclusions: [
      "3 nights accommodation (1N houseboat + 2N hotel)",
      "All meals as mentioned",
      "Shared vehicle transfers",
      "Gulmarg Gondola Phase 1",
      "Shikara ride (1 hr)",
      "Local guide",
    ],
    exclusions: [
      "Airfare to Srinagar",
      "Gulmarg Gondola Phase 2",
      "Pony rides and personal expenses",
      "Travel insurance",
      "GST as applicable",
    ],
    importantNotes: [
      "This is a budget package with shared transfers",
      "Accommodation is in comfortable but standard hotels",
      "Ideal for budget travellers, students, and backpackers",
    ],
    thingsToCarry: [
      "Warm jacket",
      "Comfortable shoes",
      "Government ID (mandatory)",
      "Cash for personal expenses",
      "Camera",
    ],
  },
];

export function getTripBySlug(slug: string): TripDetail | undefined {
  return trips.find((t) => t.slug === slug);
}

export function getTripById(id: number): TripDetail | undefined {
  return trips.find((t) => t.id === id);
}
