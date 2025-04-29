"use client"

export default function Start(){
    return (
        <div className="px-12 py-2">
            <div className="flex flex-col justify-center items-center rounded-lg bg-primary text-white py-10 gap-4">
                <p className="text-3xl font-bold">Lets Get Started</p>
                <a href="/blog" className="h-12 w-40 border border-white flex items-center justify-center rounded-lg text-white hover:scale-110 transition duration-500">Start</a>
            </div>
        </div>
    )
}