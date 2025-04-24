export default function QA({question,answer}){
    return (
        <div className="border border-white text-white p-4 rounded-lg flex justify-between">
            <h1>{question}</h1>
            <img src="/arrow.svg" className="w-4"/>
        </div>
    )
}