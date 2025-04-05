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

export default function Skills() {
    return (
        <section id="Skills" className="flex flex-col justify-center items-center pt-32">
            <h2 className="text-5xl w-full flex justify-center">Tech Skills</h2>

            <div>
                <section>
                    <h3 className="text-2xl underline font-bold pt-10">Frontend</h3>
                    <div className="flex flex-wrap space-x-10 pt-5">
                        <div className="grid place-items-center">
                            <Image src={react} alt='React' width={60} />
                            <p className="pt-2">React</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image src={nextjs} alt='Next.js' width={60} />
                            <p className="pt-2">Next.js</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image src={html} alt='HTML' width={60} />
                            <p className="pt-2">HTML</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image src={css} alt='CSS' width={60} />
                            <p className="pt-2">CSS</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image className='skillsIcon' src={javascript} alt='Javascript' width={60} />
                            <p className="pt-2">Javascript</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image className='skillsIcon' src={jquery} alt='jquery' width={60} />
                            <p className="pt-2">jQuery</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image className='skillsIcon' src={bootstrap} alt='Bootstrap' width={60} />
                            <p className="pt-2">Bootstrap</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image className='skillsIcon' src={mui} alt='Material UI' width={60} />
                            <p className="pt-2">Material UI</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl underline font-bold pt-10">Backend</h3>
                    <div className="flex flex-wrap space-x-10 pt-5">
                        <div className="grid place-items-center">
                            <Image className='skillsIcon' src={node} alt='Node.js' width={60} />
                            <p className="pt-2">Node.js</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image className='skillsIcon' src={express} alt='Express' width={60} />
                            <p className="pt-2">Express</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image className='skillsIcon' src={flask} alt='Flask' width={60} />
                            <p className="pt-2">Flask</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image src={python} alt='Python' width={60} />
                            <p>Python</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image src={sql} alt='SQL' width={60} />
                            <p>SQL</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image src={postgresql} alt='Postgresql' width={60} />
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl underline font-bold pt-10">Other</h3>
                    <div className="flex flex-wrap space-x-10 pt-5">
                        <div className="grid place-items-center">
                            <Image src={git} alt='Git' width={60} />
                            <p>Git</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image src={github} alt='Github' width={60} />
                            <p>Github</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image src={jest} alt='Jest' width={60} />
                            <p>Jest</p>
                        </div>
                        <div className="grid place-items-center">
                            <Image src={jasmine} alt='Jasmine' width={60} />
                            <p>Jasmine</p>
                        </div>
                    </div>
                </section>
            </div >
        </section >
    );
}