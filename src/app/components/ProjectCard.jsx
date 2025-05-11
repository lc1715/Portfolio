'use client'
import { useState } from "react";
import Button from "./parts/Button";

export default function ProjectCard({ project }) {
    const [hover, setHover] = useState(false);

    return (
        <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={hover ? "max-w-lg p-6 rounded-lg border border-gray-700 bg-gray-800" : "max-w-lg p-6 rounded-lg border border-gray-700"}>
            <img src={project.imageUrl} alt={project.imageAlt} />
            <div className="mt-4">
                <h3 className="font-bold text-xl mb-2">
                    <span className={hover ? "bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text" : ""}>
                        {project.title}
                    </span>
                </h3>
                <p className="text-base">
                    {project.description}
                </p>
            </div>
            <div className="flex flex-wrap mt-2">
                {project.techUsed.map((t, idx) => (
                    <span key={idx} className="inline-block text-xs bg-gray-700 rounded-full px-3 py-1 mr-1 mt-1">{t}</span>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-10 lg:mt-6">
                {project.links.map((l, idx) => (
                    <a key={idx} href={l.url} target='_blank'>
                        <Button name={l.name} />
                    </a>
                ))}
            </div>
        </article>
    );
}
