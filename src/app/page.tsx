import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import UpcomingTrips from "@/components/UpcomingTrips";
import WhyUs from "@/components/WhyUs";
import GalleryStrip from "@/components/GalleryStrip";
import Newsletter from "@/components/Newsletter";
import TeamSection from "@/components/TeamSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Footer from "@/components/Footer";

// Refresh CRM-editable content (team section) every 5 minutes.
export const revalidate = 300;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <UpcomingTrips />
      <WhyUs />
      <GalleryStrip />
      <Newsletter />
      <TeamSection />
      <ReviewsCarousel />
      <Footer />
    </main>
  );
}
