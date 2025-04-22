export default function Hero(){
    return (
        <div className="px-8 py-2">
            <div className="flex bg-secondary rounded-lg w-full h-full items-center py-16 px-8">
                <div className="w-1/2 flex flex-col gap-8">
                    <h1 className="text-6xl font-bold text-dark">Therapy that works. Because we made it for you.</h1>
                    <p className="text-xl text-dark">Experience round-the-clock support and guidance with a 24/7 AI therapist, always at your fingertips to help you navigate life’s challenges.</p>
                    <a href="" className="h-12 w-40 bg-primary flex items-center justify-center rounded-lg text-white hover:scale-110 transition duration-500">Start</a>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src="/homeimage.svg"/>
                </div>
            </div>
        </div>
    )
}