'use client'

export default function ProjectCard({ project }) {
    return (
        <article className='max-w-md p-6 border-2 border-solid rounded-lg'>
            <img src={project.imageUrl} alt={project.imageAlt} />
            <div className="mt-4">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-base">
                    {project.description}
                </p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.techUsed.map((t, idx) => (
                    <span key={idx}>{t}</span>
                ))}
            </div>
            <div className="flex flex-wrap gap-2">
                {project.links.map((l, idx) => (
                    <a key={idx} href={l.url} target='_blank'>{l.name}</a>
                ))}
            </div>
        </article>
    );
}

// <article>
//     <h3>{project.title}</h3>
//     <img src={project.imageUrl} alt={project.imageAlt}/>
//     <p>{project.description}</p>
//     {project.techUsed}
//     <div>
//         {project.links.map((l, idx) => (
//             <a key={idx} href={l.url} target='_blank'>{l.name}</a>
//         ))}
//     </div>
// </article>