'use client'

export default function About() {
    return (
        <section id="About" >
            <div className="flex flex-row justify-end gap-2 mr-7 pt-[88px] md:pt-[76px]">
                <a href="https://www.linkedin.com/in/lisa-chan14/">
                    <img className="w-6 h-6" src="/linkedin.svg" alt="LinkedIn profile" />
                </a>
                <a href="https://github.com/lc1715">
                    <img className="w-6 h-6" src="/tech-skills/github.svg" alt="Github profile" />
                </a>
            </div>
            <div className="flex flex-col justify-center items-center pt-8">
                <h2 className="text-4xl md:text-5xl">About Me</h2>
                <div className="flex flex-wrap justify-center gap-x-14 xl:gap-x-[100px] px-8 pt-9 md:pt-12 lg:pt-[60px]">
                    <img
                        src="/self.jpg"
                        alt="Picture of Lisa Chan"
                        className="img-self rounded-full object-cover w-72 h-72 md:w-[310px] md:h-[310px]"
                    />
                    <div className="flex justify-center text-lg max-w-lg lg:max-w-md xl:max-w-lg pt-8 lg:pt-0 lg:px-2">
                        <p>
                            Hi, I'm Lisa!👋 With over a decade of experience in customer support and claims handling, I've always enjoyed working with different computer systems to create and manage client profiles as well as troubleshoot tech-related issues.💻 My curiosity with computers and technology eventually inspired me to pursue a career in software development, where I can combine my practical problem-solving skills with my love for building reliable products.😃 As a dependable team player with proficiency in customer-facing roles, I enjoy working in a collaborative environment and I’m eager to learn and face new challenges.🚀  I hope to make a positive impact through my work as a developer, and I'm genuinely excited to bring my skills and knowledge to the tech world.🌍✨
                        </p>
                    </div>
                </div >
            </div>
        </section>
    );
}
