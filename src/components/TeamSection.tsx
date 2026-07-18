import { getAboutContent } from "@/lib/siteContent";
import { memberInitials } from "@/lib/teamUtils";

// Same team block as the About page, reused on the homepage.
// Server component — fetches CRM-editable content itself.
export default async function TeamSection() {
  const { team } = await getAboutContent();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">{team.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{team.title}</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">{team.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.members.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-5 border-4 border-orange-100 shadow-md" />
              ) : (
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-5 border-4 border-orange-100 shadow-md bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-5xl font-bold">
                  {memberInitials(member.name)}
                </div>
              )}
              <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
              <p className="text-orange-500 text-sm font-semibold mb-2">{member.role}</p>
              <p className="text-gray-500 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
