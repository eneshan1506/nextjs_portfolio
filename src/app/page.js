import AboutSection from "@/app/sections/AboutSection";
import ContactSection from "@/app/sections/ContactSection";
import HeroSection from "@/app/sections/HeroSection";
import ProjectsSection from "@/app/sections/ProjectSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
