import AboutMe from "@/components/LandingPage/AboutMe/AboutMeModule";
import Contact from "@/components/LandingPage/Contact/Contact";
import FaqModule from "@/components/LandingPage/FAQ/FaqModule";
import Home from "@/components/LandingPage/Home/Home";
import PacksModule from "@/components/LandingPage/Packs/PacksModule";
import ReviewsModule from "@/components/LandingPage/Reviews/ReviewsModule";
import Services from "@/components/LandingPage/Services/ServicesModule";
import Visits from "@/components/LandingPage/Visits/VisitsModule";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen max-w-none">
      <Home />
      <AboutMe />
      <Services />
      <Visits />
      <ReviewsModule />
      <PacksModule />
      <FaqModule />
      <Contact />
    </main>
  );
}
