import QA from "./QA"

export default function QAS(){
    return (
        <div className="px-12 py-2">
            <div className="px-8 bg-dark rounded-lg py-8 flex flex-col gap-2">
                <h2 className="text-3xl font-bold text-white">Q&A</h2>
                <QA
                        question="Who is this platform for?"
                        answer="Anyone interested in personal growth, mental clarity, or emotional support. Whether you're new to therapy or just looking to stay grounded, you're welcome here."
                    />
                    <QA
                        question="How does this help with mental health?"
                        answer="We provide tools based on evidence-based practices like cognitive behavioral therapy (CBT), mindfulness, and journaling. These methods can help reduce stress, improve habits, and boost self-awareness."
                    />
                    <QA
                        question="Do I need any prior experience with therapy?"
                        answer="Not at all. We guide you step-by-step in plain language. Whether you're just starting or have years of experience, the platform adjusts to meet you where you are."
                    />
                    <QA
                        question="Can I use this every day?"
                        answer="Absolutely. In fact, we encourage daily check-ins and habit-building exercises to help reinforce healthy patterns over time. A little progress each day adds up!"
                    />
            </div>
        </div>
    )
}