import Feature from "./Feature"

export default function Features(){
    return (
        <div className="px-12 grid grid-cols-4 py-2 gap-4">
            <Feature
                    heading="Proven to Help You Change Faster"
                    text="Our methods are grounded in CBT and mindfulness, proven to accelerate personal growth, emotional regulation, and habit formation."
                />
                <Feature
                    heading="Backed by Science"
                    text="Each strategy we share is backed by peer-reviewed research, ensuring that you're using techniques with real psychological benefits."
                />
                <Feature
                    heading="Designed for Real Life"
                    text="You don't need hours a day or a PhD in psychology — our tools are created to fit into your busy lifestyle and make change accessible."
                />
                <Feature
                    heading="Loved by Thousands"
                    text="Join a thriving community of users who have transformed their lives using our platform. Real stories, real change, real support."
                />
        </div>
    )
}