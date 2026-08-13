import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy – Shera Travels",
  description:
    "How Shera Travels collects, uses, stores, and protects your personal information when you enquire about or book a tour with us.",
};

const LAST_UPDATED = "13 August 2026";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{title}</h2>
      <div className="space-y-3 text-gray-600 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

const contents = [
  ["who-we-are", "1. Who We Are"],
  ["what-we-collect", "2. Information We Collect"],
  ["how-we-collect", "3. How We Collect It"],
  ["why-we-use", "4. Why We Use Your Information"],
  ["sharing", "5. Who We Share It With"],
  ["advertising", "6. Advertising on Facebook, Instagram & WhatsApp"],
  ["cookies", "7. Cookies & Website Analytics"],
  ["storage", "8. Where Your Data Is Stored"],
  ["retention", "9. How Long We Keep It"],
  ["rights", "10. Your Rights"],
  ["security", "11. Security"],
  ["children", "12. Children"],
  ["changes", "13. Changes to This Policy"],
  ["contact", "14. Contact & Grievance Officer"],
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0f172a] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Your Privacy Matters
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This policy explains what personal information Shera Travels collects, why we collect it,
            and the control you have over it.
          </p>
          <p className="text-gray-500 text-sm mt-4">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[240px_1fr] gap-10">
          {/* Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                Contents
              </h3>
              <ul className="space-y-2">
                {contents.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Body */}
          <article className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 space-y-10">
            <div className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4">
              <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 leading-relaxed">
                In short: we collect only what we need to plan your trip and reply to your enquiry.
                We never sell your personal information. You can ask us to delete your data at any
                time by writing to{" "}
                <a href="mailto:info@sheratravels.com" className="text-orange-600 font-medium hover:underline">
                  info@sheratravels.com
                </a>
                .
              </p>
            </div>

            <Section id="who-we-are" title="1. Who We Are">
              <p>
                Shera Travels (&ldquo;Shera Travels&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;) is a travel company registered in Jammu &amp; Kashmir, India,
                operating from Radio Colony Lawaypora, Srinagar, J&amp;K – 190017 (GST:
                01KODPS7232P1ZE). We arrange tour packages, hotel bookings, air ticketing, cab
                services, and visa assistance.
              </p>
              <p>
                This policy applies to{" "}
                <Link href="/" className="text-orange-600 hover:underline">
                  sheratravels.com
                </Link>{" "}
                and to enquiries you send us through WhatsApp, phone, email, or our advertisements on
                Facebook and Instagram. We are the data fiduciary responsible for your personal data
                under India&rsquo;s Digital Personal Data Protection Act, 2023.
              </p>
            </Section>

            <Section id="what-we-collect" title="2. Information We Collect">
              <p>We collect only the information needed to respond to you and arrange your travel:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-gray-800">Contact details</strong> — your name, phone
                  number, WhatsApp number, and email address.
                </li>
                <li>
                  <strong className="text-gray-800">Trip details</strong> — the destination you are
                  interested in, intended travel dates, number of travellers, and any notes or
                  special requirements you share with us.
                </li>
                <li>
                  <strong className="text-gray-800">Enquiry source</strong> — whether you reached us
                  through our website, a Facebook or Instagram ad, WhatsApp, or a referral. This
                  helps us understand which of our channels are useful.
                </li>
                <li>
                  <strong className="text-gray-800">Booking information</strong> — for confirmed
                  bookings, the traveller details required by hotels, airlines, transport operators,
                  and (for visa assistance) the relevant authorities. This can include government ID
                  or passport details where a supplier legally requires them.
                </li>
                <li>
                  <strong className="text-gray-800">Correspondence</strong> — messages you send us on
                  WhatsApp, email, or our contact forms.
                </li>
              </ul>
              <p>
                We do not ask for or store your card numbers, UPI PIN, net-banking credentials, or
                any other payment secrets on our website.
              </p>
            </Section>

            <Section id="how-we-collect" title="3. How We Collect It">
              <p>We receive your information when you:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>fill in an enquiry, booking, or newsletter form on our website;</li>
                <li>click a WhatsApp button on our site or on one of our ads and message us;</li>
                <li>call us or email us directly;</li>
                <li>submit your details through a lead form on a Facebook or Instagram ad.</li>
              </ul>
              <p>
                In every case you provide the information yourself. We do not buy contact lists or
                scrape personal data from other sources.
              </p>
            </Section>

            <Section id="why-we-use" title="4. Why We Use Your Information">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To reply to your enquiry and share itineraries, availability, and pricing.</li>
                <li>
                  To make and manage your booking — reserving hotels, vehicles, flights, and permits
                  on your behalf.
                </li>
                <li>To support you before, during, and after your trip.</li>
                <li>To send booking confirmations, reminders, and trip-related updates.</li>
                <li>
                  To send occasional offers and travel updates — only if you asked for them, and you
                  can stop them at any time.
                </li>
                <li>
                  To meet our legal, tax, and regulatory obligations, and to resolve disputes.
                </li>
              </ul>
              <p>
                We rely on your consent for marketing messages, and on the necessity of performing
                the travel services you asked for in every other case.
              </p>
            </Section>

            <Section id="sharing" title="5. Who We Share It With">
              <p>
                <strong className="text-gray-800">We never sell your personal information.</strong>{" "}
                We share it only where it is needed to deliver your trip:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-gray-800">Travel suppliers</strong> — hotels, houseboat
                  owners, airlines, transport and cab operators, guides, and activity providers
                  involved in your booking.
                </li>
                <li>
                  <strong className="text-gray-800">Authorities</strong> — where a permit, visa, or
                  local registration requires traveller details, or where the law obliges us to
                  disclose information.
                </li>
                <li>
                  <strong className="text-gray-800">Service providers</strong> — the vendors that run
                  our website, database, and customer records. They may process your data only on our
                  instructions and may not use it for their own purposes.
                </li>
              </ul>
            </Section>

            <Section id="advertising" title="6. Advertising on Facebook, Instagram & WhatsApp">
              <p>
                We advertise our tour packages on Facebook and Instagram. Some of those ads invite
                you to start a WhatsApp conversation with us.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  When you message us from an ad, we receive the phone number and name you use on
                  WhatsApp, along with your message.
                </li>
                <li>
                  When you submit a lead form inside Facebook or Instagram, we receive the details
                  you entered in that form.
                </li>
                <li>
                  Meta Platforms shows our ads to audiences defined by interests and location. We do
                  not upload your contact details to Meta to build advertising audiences.
                </li>
                <li>
                  Meta&rsquo;s own handling of your data is governed by its policy, available at{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:underline"
                  >
                    facebook.com/privacy/policy
                  </a>
                  .
                </li>
              </ul>
            </Section>

            <Section id="cookies" title="7. Cookies & Website Analytics">
              <p>
                Our website uses only the cookies needed for pages to load and function correctly. We
                do not use advertising cookies to track you across other websites.
              </p>
              <p>
                If we add analytics or advertising measurement tools in future, we will update this
                policy and, where the law requires it, ask for your consent first.
              </p>
            </Section>

            <Section id="storage" title="8. Where Your Data Is Stored">
              <p>
                Your enquiry and booking records are stored in our customer database, hosted by
                Supabase, and are accessible only to authorised Shera Travels staff through our
                internal CRM.
              </p>
              <p>
                Our hosting and database providers may store data on servers outside India. Where
                that happens, we take reasonable steps to ensure your information continues to be
                protected to the standard described in this policy.
              </p>
            </Section>

            <Section id="retention" title="9. How Long We Keep It">
              <p>
                We keep enquiry records for up to three years from your last contact with us, so that
                we can pick up where we left off if you return. Booking and invoice records are kept
                for eight years, as required by Indian tax and accounting rules.
              </p>
              <p>
                If you ask us to delete your data, we will remove it except where we are legally
                required to retain a record.
              </p>
            </Section>

            <Section id="rights" title="10. Your Rights">
              <p>Under the Digital Personal Data Protection Act, 2023, you may ask us to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>tell you what personal data of yours we hold and how we use it;</li>
                <li>correct anything that is wrong or out of date;</li>
                <li>delete your data where we are not required to keep it;</li>
                <li>stop sending you marketing messages;</li>
                <li>nominate someone to exercise these rights on your behalf.</li>
              </ul>
              <p>
                Write to{" "}
                <a href="mailto:info@sheratravels.com" className="text-orange-600 hover:underline">
                  info@sheratravels.com
                </a>{" "}
                and we will respond within 30 days. To stop marketing messages on WhatsApp, simply
                reply <em>STOP</em>.
              </p>
            </Section>

            <Section id="security" title="11. Security">
              <p>
                Our website is served over HTTPS, and access to our customer database is restricted
                to authorised staff. We review who has access on a regular basis.
              </p>
              <p>
                No system is completely secure. If a breach ever affects your personal data, we will
                inform you and the Data Protection Board of India as the law requires.
              </p>
            </Section>

            <Section id="children" title="12. Children">
              <p>
                Our services are meant for adults. We do not knowingly collect personal data directly
                from anyone under 18. Children travelling as part of a family booking are registered
                by a parent or guardian, who provides their details on their behalf.
              </p>
            </Section>

            <Section id="changes" title="13. Changes to This Policy">
              <p>
                We may update this policy as our services or the law change. The revised version will
                always appear on this page with a new &ldquo;last updated&rdquo; date. Significant
                changes will be highlighted on our website.
              </p>
            </Section>

            <Section id="contact" title="14. Contact & Grievance Officer">
              <p>
                For any question about this policy, or to exercise the rights described above,
                contact our Grievance Officer:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2.5 not-prose">
                <p className="font-semibold text-gray-900">Shera Travels — Grievance Officer</p>
                <a
                  href="mailto:info@sheratravels.com"
                  className="flex items-center gap-2.5 text-sm hover:text-orange-500 transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  info@sheratravels.com
                </a>
                <a
                  href="tel:+919149406965"
                  className="flex items-center gap-2.5 text-sm hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  +91 91494 06965
                </a>
                <div className="flex items-start gap-2.5 text-sm">
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <span>Radio Colony Lawaypora, Srinagar, Jammu &amp; Kashmir – 190017, India</span>
                </div>
              </div>
              <p>
                If you are not satisfied with our response, you may raise a complaint with the Data
                Protection Board of India.
              </p>
            </Section>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
}
