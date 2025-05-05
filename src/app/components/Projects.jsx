'use client'
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
    return (
        <section id="Projects" className="flex flex-col justify-center items-center pt-[120px]">
            <h2 className="text-4xl md:text-5xl w-full flex justify-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-10 md:mt-12 mx-4 md:mx-6">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </section>
    );
}