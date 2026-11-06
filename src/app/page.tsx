import { ScrollOrchestrator } from "@/components/effects/scroll-orchestrator";
import { Navbar } from "@/components/layout/navbar";
import { SceneLayer } from "@/components/scene/scene-layer";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      <div className="atmosphere" />
      <div className="grain" />
      <SceneLayer />
      <ScrollOrchestrator />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
