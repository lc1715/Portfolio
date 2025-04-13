'use client'

export default function Navbar() {
    return (
        <nav className="border-b-4 border-gray-500 bg-background fixed top-0 left-0 w-full">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between relative min-h-16 px-5 py-2 md:py-0 ">
                <h1 className="text-lg font-bold">
                    <a href="#About" className="transition duration-100 hover:bg-gradient-to-r from-blue-300 to-indigo-300 hover:text-transparent bg-clip-text">Lisa︱Full Stack Developer</a>
                </h1>

                <ul className="flex flex-wrap justify-center md:justify-between gap-x-5 pt-1 md:pt-0 md:px-2">
                    <li>
                        <a href='#About' className="transition duration-200 hover:text-indigo-200">About</a>
                    </li>
                    <li>
                        <a href='#Skills' className="transition duration-200 hover:text-indigo-200">Skills</a>
                    </li>
                    <li>
                        <a href='#Projects' className="transition duration-200 hover:text-indigo-200">Projects</a>
                    </li>
                    <li>
                        <a href='#Contact' className="transition duration-200 hover:text-indigo-200">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
