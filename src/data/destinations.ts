export interface Destination {
  slug: string;
  name: string;
  state: string;
  image: string;
  heroImage: string;
  gallery: string[];
  tagline: string;
  description: string;
  bestTime: string;
  temperature: string;
  altitude: string;
  tripCount: number;
  category: string;
  highlights: string[];
  howToReach: { mode: string; details: string }[];
  thingsToDo: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const destinations: Destination[] = [
  {
    slug: "kashmir",
    name: "Kashmir Valley",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    ],
    tagline: "Paradise on Earth",
    description: "Kashmir Valley — often called 'Paradise on Earth' — is one of the most breathtaking destinations in the world. Nestled between the Himalayan and Pir Panjal ranges, the valley captivates with its iconic Dal Lake houseboats, saffron fields, Mughal gardens, apple orchards, snow-capped peaks, and legendary warm hospitality. From the shimmering waters of Dal Lake to the blooming meadows of Pahalgam, Kashmir is a land where every season tells a different, beautiful story.",
    bestTime: "April–October",
    temperature: "-5°C to 30°C",
    altitude: "5,200 ft (Srinagar)",
    tripCount: 15,
    category: "Kashmir",
    highlights: ["Dal Lake & Houseboats", "Gulmarg Gondola", "Pahalgam Meadows", "Mughal Gardens", "Sonamarg Glacier", "Srinagar Old City", "Saffron Fields", "Pari Mahal"],
    howToReach: [
      { mode: "By Air", details: "Sheikh ul-Alam International Airport, Srinagar. Direct flights from Delhi, Mumbai, Bengaluru, Jammu, and other major cities." },
      { mode: "By Road", details: "Jammu–Srinagar National Highway (NH-44), approx 300 km. Scenic drive through Banihal Tunnel. Cab/bus services available from Jammu." },
      { mode: "By Train", details: "Nearest major railway station is Jammu Tawi. Then travel by road or fly to Srinagar (1 hour flight or 8-9 hr drive)." },
    ],
    thingsToDo: [
      { title: "Shikara Ride on Dal Lake", desc: "Glide through the lotus-covered Dal Lake in a traditional Shikara — the most iconic Kashmir experience." },
      { title: "Houseboat Stay", desc: "Spend nights in a beautifully decorated wooden houseboat — a unique accommodation found only in Kashmir." },
      { title: "Mughal Garden Tours", desc: "Explore the UNESCO-listed Mughal Gardens: Shalimar, Nishat, and Chashme Shahi — a Mughal emperor's vision of paradise." },
      { title: "Floating Market Visit", desc: "Early morning boat ride to the floating vegetable and flower market — a vibrant local tradition." },
      { title: "Skiing & Snow Activities", desc: "Kashmir offers world-class skiing at Gulmarg and Pahalgam, with slopes for all levels." },
    ],
    faqs: [
      { q: "Is Kashmir safe to visit?", a: "Yes! Kashmir is safe and welcoming for tourists. The government and local administration ensure tourist safety. Millions visit every year without any issues." },
      { q: "What is the best time to visit Kashmir?", a: "Spring (April–June) for tulips and blooms, Summer (June–August) for pleasant weather, Autumn (September–November) for golden chinar leaves, Winter (December–February) for snow and skiing." },
      { q: "Do I need any permits for Kashmir?", a: "Indian nationals do not need any special permits for Kashmir Valley (Srinagar, Gulmarg, Pahalgam, Sonamarg). Foreign nationals may need to register with local police." },
    ],
  },
  {
    slug: "gulmarg",
    name: "Gulmarg",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    tagline: "The Meadow of Flowers",
    description: "Gulmarg, which means 'Meadow of Flowers', is one of Kashmir's most iconic destinations, situated at 8,694 ft in the Pir Panjal range. In summer, it's a lush green meadow blanketed with wildflowers and offering panoramic views of the Himalayas. In winter, it transforms into one of Asia's premier ski destinations, with deep powder snow and the world's highest cable car — the Gulmarg Gondola. It is truly a year-round destination.",
    bestTime: "December–March (skiing), April–September (trekking)",
    temperature: "-15°C to 20°C",
    altitude: "8,694 ft",
    tripCount: 10,
    category: "Kashmir",
    highlights: ["Gulmarg Gondola", "Apharwat Peak", "Skiing & Snowboarding", "Golf Course", "Strawberry Valley", "Alpather Lake", "Khilanmarg Meadow", "St. Mary's Church"],
    howToReach: [
      { mode: "From Srinagar", details: "56 km from Srinagar city. Drive via Tangmarg takes about 1.5–2 hours by taxi or shared cab." },
      { mode: "By Air", details: "Fly to Srinagar International Airport, then road transfer to Gulmarg." },
      { mode: "From Tangmarg", details: "Last 13 km is a scenic mountain road from Tangmarg to Gulmarg. Shared jeeps and taxis available." },
    ],
    thingsToDo: [
      { title: "Gondola Ride", desc: "Asia's highest cable car takes you from Gulmarg to Kongdori (Phase 1) and Apharwat Peak (Phase 2) at 14,400 ft — breathtaking!" },
      { title: "Skiing & Snowboarding", desc: "World-class skiing facilities for beginners to professionals. Best from December to February." },
      { title: "Khilanmarg Trek", desc: "4 km trek from Gulmarg to Khilanmarg meadow — stunning views of Nanga Parbat (8,126 m)." },
      { title: "Golf at Asia's Highest Course", desc: "Play golf at the Gulmarg Golf Course — one of the highest and most scenic golf courses in the world." },
      { title: "Pony Rides", desc: "Explore the vast meadows and nearby villages on horseback — a classic Gulmarg experience." },
    ],
    faqs: [
      { q: "Can I visit Gulmarg in summer?", a: "Yes! Summer (April–September) is beautiful in Gulmarg — lush green meadows, wildflowers, and mild temperatures. Gondola operates year-round." },
      { q: "Is Gulmarg Gondola safe?", a: "Yes, the Gulmarg Gondola is fully safe and one of the best-maintained cable cars in Asia. It operates daily (weather permitting)." },
      { q: "How many days are enough for Gulmarg?", a: "1-2 days is sufficient for sightseeing. If skiing, 3-5 days is recommended to enjoy the slopes properly." },
    ],
  },
  {
    slug: "pahalgam",
    name: "Pahalgam",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
    ],
    tagline: "The Valley of Shepherds",
    description: "Pahalgam, the 'Valley of Shepherds', is one of Kashmir's most picturesque destinations, nestled at 7,200 ft in the Lidder Valley. It is famous for its lush meadows, crystal-clear Lidder River, alpine forests, and dramatic mountain scenery. The valley is the starting point for the holy Amarnath Yatra, home to the famous Betaab Valley (named after the Bollywood classic), and a haven for nature lovers, trekkers, and honeymooners.",
    bestTime: "April–October",
    temperature: "-2°C to 25°C",
    altitude: "7,200 ft",
    tripCount: 12,
    category: "Kashmir",
    highlights: ["Betaab Valley", "Aru Valley", "Chandanwari", "Baisaran (Mini Switzerland)", "Lidder River", "Amarnath Yatra Base", "Tulian Lake Trek", "Pahalgam Golf Course"],
    howToReach: [
      { mode: "From Srinagar", details: "95 km from Srinagar (2.5 hrs by taxi). Via Anantnag on NH-44. Taxi and shared cabs available from Srinagar." },
      { mode: "By Air", details: "Fly to Srinagar airport, then road transfer to Pahalgam." },
      { mode: "From Jammu", details: "290 km from Jammu via Srinagar Highway (7-8 hrs by road or fly to Srinagar first)." },
    ],
    thingsToDo: [
      { title: "Betaab Valley", desc: "Lush green valley named after the 1983 Bollywood film — stunning alpine scenery with meadows and streams." },
      { title: "Aru Valley Trekking", desc: "15 km from Pahalgam — a serene meadow perfect for day treks, camping, and horseback riding." },
      { title: "Baisaran (Mini Switzerland)", desc: "30-minute pony ride from Pahalgam to a stunning pine-covered meadow — called Kashmir's Switzerland." },
      { title: "Lidder River Fishing", desc: "The Lidder is famous for trout fishing — a peaceful activity in the heart of nature." },
      { title: "Amarnath Yatra", desc: "Pahalgam serves as the traditional route's base camp for the annual Amarnath Yatra pilgrimage (July–August)." },
    ],
    faqs: [
      { q: "Is Pahalgam better than Gulmarg?", a: "They are different — Pahalgam is greener, more serene, and ideal for nature lovers and trekkers. Gulmarg is better for snow activities and gondola. Both deserve a visit!" },
      { q: "Can we do Amarnath Yatra from Pahalgam?", a: "Yes, Pahalgam is the traditional base camp (Chandanwari route) for Amarnath Yatra. Registration with the Shri Amarnathji Shrine Board is mandatory." },
      { q: "What activities are available in Pahalgam for kids?", a: "Pony rides, Betaab Valley picnics, river walks, and Baisaran meadow are perfect for families with children." },
    ],
  },
  {
    slug: "sonmarg",
    name: "Sonamarg",
    state: "Jammu & Kashmir",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
    ],
    tagline: "The Golden Meadow",
    description: "Sonamarg, meaning 'Golden Meadow', is the last major destination in the Kashmir Valley before the Zoji La pass, which leads to Ladakh. Situated at 8,957 ft, Sonamarg is the gateway to some of Kashmir's most spectacular glaciers, high-altitude lakes, and alpine meadows. The Thajiwas Glacier, visible even in summer, makes Sonamarg unique — it's one of the few places in India where you can touch a glacier without serious mountaineering.",
    bestTime: "May–October",
    temperature: "-8°C to 20°C",
    altitude: "8,957 ft",
    tripCount: 8,
    category: "Kashmir",
    highlights: ["Thajiwas Glacier", "Vishansar Lake", "Krishansar Lake", "Gadsar Lake Trek", "Baltal Valley", "Zoji La Pass", "Sindh River", "Amarnath Yatra (Baltal Route)"],
    howToReach: [
      { mode: "From Srinagar", details: "87 km from Srinagar on the Srinagar-Leh Highway (NH-1). Drive takes approximately 3 hours by taxi." },
      { mode: "By Air", details: "Fly to Srinagar International Airport, then road transfer to Sonamarg." },
      { mode: "From Leh", details: "Sonamarg is on the Srinagar-Leh Highway — accessible from Leh side after crossing Zoji La (open June–October)." },
    ],
    thingsToDo: [
      { title: "Thajiwas Glacier Visit", desc: "Take a pony or walk to the base of Thajiwas Glacier — a massive river of ice visible right from the town." },
      { title: "Vishansar Lake Trek", desc: "3-day moderate trek to the stunning high-altitude Vishansar and Krishansar lakes above 12,000 ft." },
      { title: "Sindh River Fishing", desc: "The Sindh River near Sonamarg is excellent for brown trout fishing — ideal for anglers." },
      { title: "Zoji La Drive", desc: "Drive over the dramatic Zoji La pass (11,575 ft) — the gateway between Kashmir Valley and Ladakh." },
      { title: "Meadow Photography", desc: "Sonamarg's golden meadows, glacier backdrop, and river make it one of Kashmir's most photogenic spots." },
    ],
    faqs: [
      { q: "Is Sonamarg road open year-round?", a: "No. Sonamarg is typically accessible from May to October. The road closes in winter due to heavy snowfall. The Zoji La tunnel (under construction) will eventually provide year-round access." },
      { q: "Can we see snow in Sonamarg in summer?", a: "Yes! Even in June-July, Thajiwas Glacier has snow. This is one of Sonamarg's biggest draws — summer snow." },
      { q: "How far is Sonamarg from Gulmarg?", a: "Sonamarg and Gulmarg are on opposite sides of Srinagar. Sonamarg is 87 km NE of Srinagar, Gulmarg is 56 km NW. Travel between them is 3-4 hours via Srinagar." },
    ],
  },
  {
    slug: "ladakh",
    name: "Leh Ladakh",
    state: "Ladakh (Union Territory)",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=800&q=80",
    ],
    tagline: "The Land of High Passes",
    description: "Ladakh is India's crown jewel — a high-altitude desert plateau bordered by the Karakoram and Himalayan ranges. At 11,562 ft, Leh sits amidst some of the world's most dramatic landscapes. From the electric-blue Pangong Lake to the world's highest motorable road at Khardung La, from ancient Buddhist monasteries to vast sand dunes in Nubra — Ladakh is truly unlike anywhere on Earth.",
    bestTime: "June–September",
    temperature: "-20°C to 30°C",
    altitude: "11,562 ft (Leh)",
    tripCount: 10,
    category: "Mountains",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass", "Hemis Monastery", "Magnetic Hill", "Shanti Stupa", "Diskit Monastery", "Zanskar Valley"],
    howToReach: [
      { mode: "By Air", details: "Direct flights from Delhi, Mumbai, Srinagar to Leh (Kushok Bakula Airport). Book 2-3 months in advance." },
      { mode: "By Road from Srinagar", details: "Srinagar-Leh Highway via Zoji La (434 km, 1-2 days). Open May–November." },
      { mode: "By Road from Manali", details: "Manali-Leh Highway via Rohtang and Baralacha La (480 km, 2 days). Open June–October." },
    ],
    thingsToDo: [
      { title: "Pangong Lake Sunrise", desc: "Watch the lake change colors from blue to green to red at sunrise — one of the world's most magical views." },
      { title: "Khardung La Drive", desc: "Cross the world's highest motorable road at 18,380 ft — a true bucket-list experience." },
      { title: "Camel Safari in Nubra", desc: "Ride double-humped Bactrian camels on the sand dunes of Hunder, Nubra Valley." },
      { title: "Visit Hemis Monastery", desc: "Ladakh's largest monastery — home to rare thangka paintings and ancient artifacts." },
      { title: "Zanskar River Rafting", desc: "One of India's most challenging and scenic river rafting experiences." },
    ],
    faqs: [
      { q: "Do I need a permit for Ladakh?", a: "Indian nationals don't need permits for Leh city. Inner Line Permits are required for Nubra, Pangong, Tso Moriri — arranged easily in Leh." },
      { q: "How do I avoid altitude sickness in Ladakh?", a: "Rest completely on Day 1, drink plenty of water, avoid alcohol, and consider Diamox after consulting a doctor." },
      { q: "What is the best month to visit Ladakh?", a: "July-August is peak season with all roads open. June and September offer fewer crowds and equally good weather." },
    ],
  },
  {
    slug: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=600&q=80",
    heroImage: "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    ],
    tagline: "The Valley of Gods",
    description: "Manali is a high-altitude Himalayan resort town nestled in the Beas River valley at 6,726 ft in Himachal Pradesh. It serves as a gateway to adventure — from snow-capped Rohtang Pass to the lush Kullu Valley, from ancient Hadimba Temple to buzzing Old Manali cafés. Whether you're a thrill-seeker, nature lover, or spiritual wanderer, Manali has something magical for everyone.",
    bestTime: "October–June",
    temperature: "-10°C to 25°C",
    altitude: "6,726 ft",
    tripCount: 8,
    category: "Mountains",
    highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Old Manali", "Beas River Rafting", "Vashisht Hot Springs", "Jogini Waterfall", "Naggar Castle"],
    howToReach: [
      { mode: "By Air", details: "Nearest airport is Bhuntar (Kullu-Manali Airport), 50 km from Manali. Flights from Delhi, Mumbai, Chandigarh." },
      { mode: "By Bus", details: "HRTC and private operators run overnight Volvo buses from Delhi (14-16 hrs), Chandigarh (8 hrs)." },
      { mode: "By Train", details: "Nearest railway station is Joginder Nagar (165 km) or Chandigarh (270 km), then bus/taxi." },
    ],
    thingsToDo: [
      { title: "Snow Activities at Rohtang", desc: "Snowmobile rides, snow biking, and stunning mountain views at 13,050 ft." },
      { title: "Paragliding at Solang Valley", desc: "Soar over the Himalayan valley with certified instructors." },
      { title: "River Rafting in Beas", desc: "Grade 2-3 rapids over 14 km — thrilling for beginners and pros alike." },
      { title: "Visit Hadimba Temple", desc: "16th century wooden temple surrounded by cedar forests — a must-visit." },
      { title: "Old Manali Cafés", desc: "Vibrant backpacker culture with rooftop cafés, live music, and local cuisine." },
    ],
    faqs: [
      { q: "Is Manali safe to visit?", a: "Yes, Manali is very safe for solo travellers, groups, and families. It is one of India's most visited hill stations." },
      { q: "Do I need permits for Manali?", a: "A Rohtang Pass permit is required (₹500 per vehicle). Inner Line Permit is needed for Spiti beyond Rohtang." },
      { q: "What should I pack for Manali?", a: "Heavy woolens, waterproof jacket, sunscreen, trekking shoes, and valid government ID." },
    ],
  },
];
