'use client'

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center mt-2 mb-5">
            <div className="grid grid-cols-2 justify-center items-center gap-4 mt-4">
                <a href="https://www.linkedin.com/in/lisa-chan14/">
                    <img className="w-7 h-7" src="/linkedin.svg" alt="LinkedIn profile" />
                </a>
                <a href="https://github.com/lc1715">
                    <img className="w-7 h-7" src="/tech-skills/github.svg" alt="Github profile" />
                </a>
            </div>
            <p className="mt-2 text-base font-semibold">Created by <span className="bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text">Lisa Chan</span></p>
            <div className="mt-2">
                <span className="inline-block text-xs bg-gray-700 rounded-full px-3 py-1 mr-1 mt-1">Next.js</span>
                <span className="inline-block text-xs bg-gray-700 rounded-full px-3 py-1 mr-1 mt-1">React</span>
                <span className="inline-block text-xs bg-gray-700 rounded-full px-3 py-1 mr-1 mt-1">Tailwind CSS</span>
            </div>
        </footer>
    );
}