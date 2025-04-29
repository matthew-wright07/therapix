export default function Hero(){
    return (
        <div className="px-12 py-2">
            <div className="flex bg-secondary rounded-lg w-full h-full items-center py-16 px-8">
                <div className="w-1/2 flex flex-col gap-8">
                    <h1 className="text-6xl font-bold text-dark">All the best therapy tips in one place.</h1>
                    <p className="text-xl text-dark">Whether you're just beginning your mental health journey or you're a seasoned therapist, we provide simple, powerful, and science-backed therapy techniques to support your personal growth. From cognitive behavioral strategies to mindfulness, we've got it covered. </p>
                    <a href="/blog" className="h-12 w-40 bg-primary flex items-center justify-center rounded-lg text-white hover:scale-110 transition duration-500">Start</a>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src="/homeimage.svg"/>
                </div>
            </div>
        </div>
    )
}