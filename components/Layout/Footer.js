export default function Footer(){
    return (
        <div className="px-12 py-10">
            <div className="flex flex justify-between gap-4">
                <a href="" className="flex gap-2 items-center hover:scale-110 transition duration-500">
                    <img src="/logo.svg" className="h-9" alt="Therapix Logo"/>
                    <h1 className="text-primary font-bold text-3xl">Therapix</h1>
                </a>
                <div className="flex gap-2">
                    <a href="/" className="hover:text-primary transition duration-500">Home</a>
                    <a href="/blog" className="hover:text-primary transition duration-500">Blog</a>
                    <a href="/about" className="hover:text-primary transition duration-500">About</a>
                    <a href="/contact" className="hover:text-primary transition duration-500">Contact</a>
                </div>
                <p>&#169;Therapix 2025</p>
            </div>
        </div>
    )
}