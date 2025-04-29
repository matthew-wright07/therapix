export default function Work({heading,text}){
    return (
        <div className="border border-dark rounded-lg p-8">
                <p className="text-xl font-bold text-dark">{heading}</p>
                <p className="text-dark">{text}</p>
        </div>
    )
}