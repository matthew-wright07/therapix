export default function Feature({heading,text}){
    return (
        <div className="flex flex-col gap-2 text-center bg-primary text-white rounded-lg p-8">
            <p className="text-3xl font-bold">{heading}</p>
            <p>{text}</p>
        </div>
    )
}