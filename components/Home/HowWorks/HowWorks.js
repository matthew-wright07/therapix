import Work from "./Work"

export default function HowWorks(){
    return (
        <div className="px-12 py-2">
            <div className="py-16 bg-secondary rounded-lg px-8 flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-dark">How It Works</h2>
                <div className="grid grid-cols-3 gap-4">
                <Work
                        heading="1. Ask Your Questions"
                        text="Start by typing what's on your mind. Whether it's stress, relationships, or self-doubt, our platform listens with empathy and zero judgment."
                    />
                    <Work
                        heading="2. Get Personalized Insights"
                        text="Receive responses based on proven psychological principles, tailored to your needs. Think of it as having a smart, supportive guide at your fingertips."
                    />
                    <Work
                        heading="3. Take Action & Track Progress"
                        text="Get practical steps you can apply right away. Build habits, reflect, and grow with tools designed to support your ongoing mental wellness journey."
                    />
                </div>
            </div>
        </div>
    )
}