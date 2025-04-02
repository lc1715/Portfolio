'use client'

export default function Navbar() {
    return (
        <nav className="border-b-4 border-gray-500 bg-background fixed top-0 left-0 w-full">
            <div className="relative min-h-16 px-5 pt-2 flex flex-col md:flex-row justify-center md:justify-between items-center">
                <h1 className="text-lg font-bold">
                    <a href="#About" className="transition duration-200 hover:text-indigo-200">Lisa︱Full Stack Developer</a>
                </h1>

                <ul className="flex flex-wrap justify-center md:justify-between space-x-5 pt-1 pb-2 md:pt-0">
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
    )
}

