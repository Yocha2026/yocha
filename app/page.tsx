
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryRoadmap from "@/components/StoryRoadmap";
import CultureGallery from "@/components/CultureGallery";
import ExperiencesSection from "@/components/ExperiencesSection";
import PeopleSection from "@/components/PeopleSection";
import MissionSection from "@/components/MissionSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1c14] text-[#f4efe4]">
      <Navbar />
      <Hero />
      <StoryRoadmap />
      <CultureGallery />
      <ExperiencesSection />
      <PeopleSection />
      <MissionSection />
      <JoinSection />
      <Footer />
    </main>
  );
}
