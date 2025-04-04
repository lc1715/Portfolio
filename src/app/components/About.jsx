'use client'

export default function About() {
    return (
        <section id="About" className="flex flex-col justify-center items-center pt-32">
            <h2 className="text-4xl md:text-5xl">About Me</h2>

            <div className="flex flex-wrap justify-center gap-x-[100px] pt-9 md:pt-12 lg:pt-[60px]">
                <img
                    className="rounded-full object-cover w-72 h-72 md:w-[312px] md:h-[312px]"
                    src="/self.jpg"
                    alt="Picture of Lisa Chan"
                />
                <div className="flex justify-center text-lg max-w-lg pt-8 lg:pt-0 px-8 lg:px-2">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, at quae consequuntur doloremque ex nam maiores velit nostrum nemo nisi?
                    </p>
                </div>
            </div >
        </section>
    );
}
