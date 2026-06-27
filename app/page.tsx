import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedMenu from "@/components/FeaturedMenu";
import CraftSection from "@/components/CraftSection";
import Stats from "@/components/Stats";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import VisitSection from "@/components/VisitSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });
const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });
const GrainOverlay = dynamic(() => import("@/components/GrainOverlay"), { ssr: false });

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <GrainOverlay />
      <SmoothScroll>
        <Hero />
        <Marquee
          items={[
            "Smash Burgers",
            "Marin-Owned",
            "On Caledonia",
            "Open Daily 11a — 9p",
            "Walk-In Only",
            "Worth the Bridge Toll",
            "Since '24",
          ]}
        />
        <FeaturedMenu />
        <CraftSection />
        <Stats />
        <OurStory />
        <Marquee
          items={["Caledonia+Buns", "Marin Beef", "House Pickles", "Slow Grind", "Brisket+Chuk"]}
          speed="reverse"
          variant="cream"
        />
        <Gallery />
        <Reviews />
        <VisitSection />
        <FAQ />
        <CTASection />
        <Footer />
      </SmoothScroll>
    </>
  );
}
