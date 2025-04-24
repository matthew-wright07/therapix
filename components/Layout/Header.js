export default function Header(){
    return (
        <div className="h-22 px-8 flex justify-between items-center">
            <a href="" className="flex gap-2 items-center hover:scale-110 transition duration-500">
                <img src="/logo.svg" className="h-9"/>
                <h1 className="text-primary font-bold text-3xl">Therapix</h1>
            </a>
            <div className="flex gap-4 justify-center items-center text-dark">
                <a href="" className="hover:text-primary transition duration-500">Home</a>
                <a href="" className="hover:text-primary transition duration-500">Chat</a>
                <a href="" className="hover:text-primary transition duration-500">Pricing</a>
                <a href="" className="hover:text-primary transition duration-500">About</a>
                <a href="" className="hover:text-primary transition duration-500">Contact</a>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <a href="" className="h-10 w-20 bg-primary flex items-center justify-center rounded-lg text-white hover:scale-110 transition duration-500">Start</a>
            </div>
        </div>
    )
}