export default function Footer(){
    return (
        <div className="px-8 py-10">
            <div className="grid grid-cols-4 items-start">
                <a href="" className="flex gap-2 items-center hover:scale-110 transition duration-500">
                    <img src="/logo.svg" className="h-9"/>
                    <h1 className="text-primary font-bold text-3xl">Therapix</h1>
                </a>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Quick Links</h1>
                    <a href="">Home</a>
                    <a href="">Chat</a>
                    <a href="">Pricing</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Quick Links</h1>
                    <a href="">Home</a>
                    <a href="">Chat</a>
                    <a href="">Pricing</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Quick Links</h1>
                    <a href="">Home</a>
                    <a href="">Chat</a>
                    <a href="">Pricing</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
    )
}