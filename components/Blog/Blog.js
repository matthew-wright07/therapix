export default function Blog({ data }) {
    return (
        <div className="px-12 flex gap-4 py-4 justify-center">
            {data?
            <div className="w-3/4 flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{data.data.intro.heading}</h1>
                <p>{data.data.intro.main}</p>
                <img className="rounded-lg" alt={data.data.intro.alt} src={data.data.intro.img}/>
                {data.data.main.map(current=>{
                    if (current.img){
                    return <img src={current.img} alt={current.alt} className="rounded-lg"/>
                    }
                    if (current.h2){
                        return <h2 className="text-2xl font-bold">{current.h2}</h2>
                    }
                    if (current.p){
                        return <p className="inline">{current.p}</p>
                    }
                    if (current.a){
                        return <a target="_blank" className="inline underline hover:no-underline" href={current.a}>{current.title}</a>
                    }
                })}
            </div>
            :
            <div className="w-full flex justify-center items-center gap-4 h-[100vh] bg-secondary rounded-lg">
                <div class="flex flex-row gap-2">
                    <div class="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
                        <div class="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
                    <div class="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
                </div>
            </div>
            }
        </div>
    );
}
