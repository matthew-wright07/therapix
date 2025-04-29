export default function BlogCard({data}){
    return (
        <a href={`/blog/${data.url}`} className="border border-dark text-dark rounded-lg flex flex-col items-center text-center hover:scale-110 transition duration-500">
            <div>
                <img src={data.data.intro.img} className="rounded-t-lg" alt={data.data.intro.alt}/>
            </div>
            <div className="p-4">
                <h1>{data.data.intro.heading}</h1>
            </div>
        </a>
    )

}