"use client"

import { usePathname } from "next/navigation"

export default function Header(){
    const pathName = usePathname()
    return (
        <div className="h-22 px-12 flex justify-between items-center">
            <a href="/" className="flex gap-2 items-center hover:scale-110 transition duration-500">
                <img src="/logo.svg" className="h-9"/>
                <h1 className="text-primary font-bold text-3xl">Therapix</h1>
            </a>
            <div className="flex gap-4 justify-center items-center text-dark">
                <a href="/" className={`hover:text-primary transition duration-500 ${pathName==="/"?"text-primary":null}`}>Home</a>
                <a href="/blog" className={`hover:text-primary transition duration-500 ${pathName==="/blog"?"text-primary":null}`}>Blog</a>
                <a href="/about" className={`hover:text-primary transition duration-500 ${pathName==="/about"?"text-primary":null}`}>About</a>
                <a href="/contact" className={`hover:text-primary transition duration-500 ${pathName==="/contact"?"text-primary":null}`}>Contact</a>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <a href="/blog" className="h-10 w-24 bg-primary flex items-center justify-center rounded-lg text-white hover:scale-110 transition duration-500">Start</a>
            </div>
        </div>
    )
}