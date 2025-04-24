export default function Work({heading,text}){
    return (
        <div className="border border-dark rounded-lg p-8">
                <h1 className="text-xl font-bold text-dark">{heading}</h1>
                <p className="text-dark">{text}</p>
        </div>
    )
}