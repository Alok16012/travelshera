import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import UpcomingTrips from "@/components/UpcomingTrips";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import GalleryStrip from "@/components/GalleryStrip";
import Newsletter from "@/components/Newsletter";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <UpcomingTrips />
      <WhyUs />
      <Testimonials />
      <GalleryStrip />
      <Newsletter />
      <ReviewsCarousel />
      <Footer />
    </main>
  );
}
