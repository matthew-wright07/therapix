import QA from "./QA"

export default function QAS(){
    return (
        <div className="px-8 py-2">
            <div className="px-8 bg-dark rounded-lg py-8 flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-white">Q&A</h1>
                <QA question="What do you do?"/>
                <QA question="What do you do?"/>
                <QA question="What do you do?"/>
            </div>
        </div>
    )
}