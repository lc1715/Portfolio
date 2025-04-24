'use client'
import Image from "next/image";
import javascript from '/public/tech-skills/javascript.svg'
import python from '/public/tech-skills/python.svg'
import react from '/public/tech-skills/react-color.svg'
import git from '/public/tech-skills/git.svg'
import nextjs from '/public/tech-skills/next.svg'
import html from '/public/tech-skills/html.svg'
import css from '/public/tech-skills/css.svg'
import bootstrap from '/public/tech-skills/bootstrap.svg'
import jquery from '/public/tech-skills/jquery.svg'
import mui from '/public/tech-skills/mui.svg'
import flask from '/public/tech-skills/flask.svg'
import express from '/public/tech-skills/express.svg'
import node from '/public/tech-skills/node.svg'
import postgresql from '/public/tech-skills/postgresql.svg'
import sql from '/public/tech-skills/sql.svg'
import github from '/public/tech-skills/github.svg'
import jest from '/public/tech-skills/jest.svg'
import jasmine from '/public/tech-skills/jasmine.svg'
import sqlalchemy from '/public/tech-skills/sqlalchemy.svg'
import tailwind from '/public/tech-skills/tailwind.svg'

const frontend = [
    { src: react, name: 'React' },
    { src: nextjs, name: 'Next.js' },
    { src: html, name: 'HTML' },
    { src: css, name: 'CSS' },
    { src: javascript, name: 'Javascript' },
    { src: jquery, name: 'jQuery' },
    { src: bootstrap, name: 'Bootstrap' },
    { src: tailwind, name: 'Tailwind CSS' },
    { src: mui, name: 'Material UI' },
]

const backend = [
    { src: node, name: 'Node.js' },
    { src: express, name: 'Express' },
    { src: flask, name: 'Flask' },
    { src: python, name: 'Python' },
    { src: sqlalchemy, name: 'SQLAlchemy' },
    { src: sql, name: 'SQL' },
    { src: postgresql, name: 'PostgreSQL' },
]

const others = [
    { src: git, name: 'Git' },
    { src: github, name: 'Github' },
    { src: jest, name: 'Jest' },
    { src: jasmine, name: 'Jasmine' },
]

export default function Skills() {
    return (
        <section id="Skills" className="flex flex-col justify-center items-center pt-30">
            <h2 className="text-4xl md:text-5xl">Tech Skills</h2>
            <div className="max-w-[1100px] px-4 md:px-8">
                <SkillsSection title={'Frontend'} list={frontend} />
                <SkillsSection title={'Backend'} list={backend} />
                <SkillsSection title={'Others'} list={others} />
            </div >
        </section >
    );
}

function SkillsSection({ title, list }) {
    return (
        <section>
            <h3 className="text-2xl underline font-bold mt-10">{title}</h3>
            <div className="flex flex-wrap gap-x-10">
                {list.map((tech, idx) => (
                    <ul key={idx} className="grid place-items-center py-5">
                        <Image src={tech.src} alt='React' width={60} />
                        <li className="text-lg mt-3">{tech.name}</li>
                    </ul>
                ))}
            </div>
        </section>
    );
}