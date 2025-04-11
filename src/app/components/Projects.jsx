'use client'
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
    return (
        <section id="Projects" className="flex flex-col justify-center items-center pt-32">
            <h2 className="text-5xl w-full flex justify-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </section>
    );
}