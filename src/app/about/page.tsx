import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, MapPin, Award, Heart, Star, CheckCircle } from "lucide-react";
import { getAboutContent } from "@/lib/siteContent";

// Always render fresh so edits saved from the CRM show up without a rebuild.
export const dynamic = "force-dynamic";

// Icons are fixed by position (content is text-only from the CMS).
const statIcons = [Users, MapPin, Star, Award];

export default async function AboutPage() {
  const content = await getAboutContent();
  const { hero, stats, mission, services, timeline, team } = content;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-16 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">{hero.eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            {hero.titleLine1}<br />{hero.titleLine2}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => {
              const Icon = statIcons[i] || Users;
              return (
                <div key={s.label + i}>
                  <Icon className="w-7 h-7 text-orange-100 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-orange-100 text-sm mt-1">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">{mission.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              {mission.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              {mission.para1}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {mission.para2}
            </p>
            <ul className="space-y-3">
              {mission.bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={mission.image}
              alt="Kashmir Valley"
              className="rounded-2xl w-full h-96 object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-orange-500 rounded-2xl p-5 shadow-lg">
              <Heart className="w-6 h-6 text-white mb-1" />
              <p className="text-white font-bold text-2xl">{mission.badgeValue}</p>
              <p className="text-orange-100 text-xs">{mission.badgeLabel}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">{services.eyebrow}</p>
            <h2 className="text-3xl font-bold text-gray-900">{services.title}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {services.items.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                <p className="text-4xl mb-3">{s.icon}</p>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">{timeline.eyebrow}</p>
            <h2 className="text-3xl font-bold text-gray-900">{timeline.title}</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200" />
            <div className="space-y-8">
              {timeline.milestones.map((m) => (
                <div key={m.year + m.event} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
                    {m.year}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100 mt-1">
                    <p className="text-gray-700">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">{team.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{team.title}</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">{team.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.members.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
                <img src={member.image} alt={member.name} className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-5 border-4 border-orange-100 shadow-md" />
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-orange-500 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
