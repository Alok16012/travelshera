import { supabase } from "./supabase";

// ── Types ────────────────────────────────────────────────────────────
// The About page content that is editable from the CRM "Website Content"
// editor. Icons and layout stay in code; only text/values/images here.
export type AboutContent = {
  hero: { eyebrow: string; titleLine1: string; titleLine2: string; subtitle: string };
  stats: { value: string; label: string }[]; // exactly 4 (icons fixed by position)
  mission: {
    eyebrow: string;
    title: string;
    para1: string;
    para2: string;
    bullets: string[];
    image: string;
    badgeValue: string;
    badgeLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: { title: string; desc: string; icon: string }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    milestones: { year: string; event: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    members: { name: string; role: string; image: string; bio: string }[];
  };
};

// ── Defaults ─────────────────────────────────────────────────────────
// These mirror the original hardcoded About page. They render whenever the
// `site_content` row is missing (e.g. before the table is created, or before
// the first save from the CRM), so the page never breaks.
export const defaultAbout: AboutContent = {
  hero: {
    eyebrow: "Our Story",
    titleLine1: "We Show You Kashmir.",
    titleLine2: "You Fall in Love with It.",
    subtitle:
      "Shera Travels was born from a passion for Kashmir — its mountains, lakes, meadows, and people. Today, we are the valley's most trusted travel partner, connecting 5,000+ travellers with the magic of Paradise on Earth.",
  },
  stats: [
    { value: "5,000+", label: "Happy Travellers" },
    { value: "500+", label: "Tours Completed" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "10+", label: "Years Experience" },
  ],
  mission: {
    eyebrow: "Our Mission",
    title: "Making Kashmir Accessible, Safe & Unforgettable",
    para1:
      "We believe every traveller deserves to experience the timeless beauty of Kashmir — its snow-capped mountains, shimmering Dal Lake, blooming gardens, and legendary hospitality. That's what Shera Travels is built to provide.",
    para2:
      "From solo travellers to families, from pilgrims to honeymooners — we craft personalized tours that match every budget and dream. Our deep local roots, over a decade of experience, and 24/7 support make us Kashmir's most trusted travel company.",
    bullets: [
      "Personalized small group and private tours",
      "Expert local guides with insider knowledge",
      "Complete services — Air Ticketing, Hotel, Cab & Visa",
      "24/7 support before, during and after your trip",
    ],
    image: "https://images.unsplash.com/photo-1605649461784-eec84f8e5f0f?w=700&q=80",
    badgeValue: "5K+",
    badgeLabel: "Lives Changed",
  },
  services: {
    eyebrow: "What We Offer",
    title: "Complete Travel Services",
    items: [
      { title: "Air Ticketing", desc: "Best fares, instant confirmation", icon: "✈️" },
      { title: "Hotel Booking", desc: "Verified properties across J&K", icon: "🏨" },
      { title: "Cab Services", desc: "AC vehicles, experienced drivers", icon: "🚗" },
      { title: "Visa Assistance", desc: "Hassle-free visa processing", icon: "📋" },
    ],
  },
  timeline: {
    eyebrow: "Our Journey",
    title: "From 6 Travellers to 5,000+",
    milestones: [
      { year: "2012", event: "Shera Travels founded with first small group tour to Gulmarg — 6 travellers" },
      { year: "2014", event: "Expanded to Pahalgam, Sonamarg, and Ladakh tours" },
      { year: "2016", event: "Launched pilgrimage packages — Vaishno Devi and Amarnath Yatra" },
      { year: "2018", event: "Crossed 500 happy customers, launched international tourist packages" },
      { year: "2020", event: "Adapted during pandemic — introduced flexible booking and virtual Kashmir experiences" },
      { year: "2022", event: "1,000+ customers served, expanded services to Air Ticketing, Hotel Booking, Cab & Visa" },
      { year: "2024", event: "5,000+ travellers, 30+ destinations, rated Kashmir's most trusted travel company" },
    ],
  },
  team: {
    eyebrow: "The Team",
    title: "The People Behind Shera Travels",
    subtitle:
      "A passionate team of Kashmiris and travel professionals united by one mission — to share the magic of Kashmir with the world.",
    members: [
      { name: "Bashir Ahmad Shera", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", bio: "Born and raised in Kashmir, Bashir has been guiding travellers through the valley for over 15 years with unmatched local expertise." },
      { name: "Nazir Ahmad", role: "Head of Operations", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", bio: "10+ years in Kashmir tourism industry, ensuring every guest receives seamless, comfortable, and memorable travel experiences." },
      { name: "Irfan Bhat", role: "Senior Tour Guide", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", bio: "Certified trek leader who has guided 300+ tours across Kashmir, Ladakh, and Himachal Pradesh." },
      { name: "Shabnam Koul", role: "Customer Relations", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", bio: "Dedicated to making every traveller feel at home in Kashmir, from first enquiry to safe return." },
      { name: "Mushtaq Lone", role: "Transport Manager", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", bio: "Manages our fleet of premium vehicles, ensuring safe and comfortable travel across all terrains." },
      { name: "Aadil Sheikh", role: "Digital & Bookings", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80", bio: "Handles all digital bookings, air ticketing, hotel reservations, and visa assistance for our clients." },
    ],
  },
};

// Deep-merge a partial stored value over defaults so a partially-filled row
// (or a newly-added default field) still renders completely.
function mergeAbout(stored: unknown): AboutContent {
  if (!stored || typeof stored !== "object") return defaultAbout;
  const s = stored as Partial<AboutContent>;
  return {
    hero: { ...defaultAbout.hero, ...(s.hero || {}) },
    stats: Array.isArray(s.stats) && s.stats.length ? s.stats : defaultAbout.stats,
    mission: { ...defaultAbout.mission, ...(s.mission || {}) },
    services: {
      ...defaultAbout.services,
      ...(s.services || {}),
      items:
        s.services && Array.isArray(s.services.items) && s.services.items.length
          ? s.services.items
          : defaultAbout.services.items,
    },
    timeline: {
      ...defaultAbout.timeline,
      ...(s.timeline || {}),
      milestones:
        s.timeline && Array.isArray(s.timeline.milestones) && s.timeline.milestones.length
          ? s.timeline.milestones
          : defaultAbout.timeline.milestones,
    },
    team: {
      ...defaultAbout.team,
      ...(s.team || {}),
      members:
        s.team && Array.isArray(s.team.members) && s.team.members.length
          ? s.team.members
          : defaultAbout.team.members,
    },
  };
}

// Fetch the About content from Supabase, falling back to defaults on any
// error (Supabase unconfigured, table missing, empty row, etc.).
export async function getAboutContent(): Promise<AboutContent> {
  if (!supabase) return defaultAbout;
  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("value")
      .eq("key", "about")
      .maybeSingle();
    if (error || !data) return defaultAbout;
    return mergeAbout(data.value);
  } catch {
    return defaultAbout;
  }
}
