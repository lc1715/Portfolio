'use client'
import { useState } from "react"

export default function Button({ name }) {
    const [hover, setHover] = useState(false)

    return (
        <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={hover ? "bg-blue-500 text-white py-2 px-4 font-semibold rounded-full" : "bg-gray-200 text-stone-950 py-2 px-4 font-semibold rounded-full"}>
            {name}
        </ button>
    )
};