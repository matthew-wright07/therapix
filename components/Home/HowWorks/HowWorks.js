import Work from "./Work"

export default function HowWorks(){
    return (
        <div className="px-8 py-2">
            <div className="py-16 bg-secondary rounded-lg px-8 flex flex-col gap-8">
                <h1 className="text-3xl font-bold text-dark">How It Works</h1>
                <div className="grid grid-cols-3 gap-4">
                    <Work heading="Ask your questions" text="Open the chat and type out what’s on your mind. Whether it’s a specific concern or just how you’re feeling today, our system is designed to understand and guide you without judgment."/>
                    <Work heading="Ask your questions" text="Open the chat and type out what’s on your mind. Whether it’s a specific concern or just how you’re feeling today, our system is designed to understand and guide you without judgment."/>
                    <Work heading="Ask your questions" text="Open the chat and type out what’s on your mind. Whether it’s a specific concern or just how you’re feeling today, our system is designed to understand and guide you without judgment."/>
                </div>
            </div>
        </div>
    )
}