"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { site, type SiteProject } from "@/data/site";

function ProjectVisual({ project }: { project: SiteProject }) {
  return (
    <div
      className="relative h-64 overflow-hidden rounded-2xl md:h-80"
      style={{
        background: `radial-gradient(120% 90% at 20% 10%, ${project.accent}55, transparent 42%), linear-gradient(160deg, #101018, #07070b)`,
      }}
    >
      <div className="absolute inset-8 rounded-full border border-white/10" />
      <div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ background: project.accent }}
      />
      <p className="display absolute bottom-5 left-5 text-2xl text-white/90">{project.title}</p>
    </div>
  );
}

function ProjectCard({ project }: { project: SiteProject }) {
  const ref = useRef<HTMLElement>(null);

  return (
    <article
      ref={ref}
      onMouseMove={(event) => {
        const box = ref.current?.getBoundingClientRect();
        if (!box || !ref.current) return;
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        ref.current.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
      }}
      className="w-[86vw] shrink-0 transition-transform duration-200 will-change-transform md:w-[560px]"
    >
      <ProjectVisual project={project} />
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="display text-2xl text-white">{project.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/55">{project.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:bg-white/10"
              aria-label={`${project.title} GitHub`}
            >
              <GitHubIcon size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:bg-white/10"
              aria-label={`${project.title} live demo`}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-20">
      <div data-project-pin className="overflow-hidden">
        <div className="px-6">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">Selected work</p>
            <h2 className="display mt-4 text-4xl text-white md:text-6xl">Featured projects</h2>
            <p className="mt-4 max-w-xl text-sm text-white/50">
              Project copy matches the resume. GitHub is linked only where a public repository exists.
            </p>
          </div>
        </div>
        <div data-project-track className="mt-12 flex gap-10 px-6 pb-10 md:w-max">
          {site.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
