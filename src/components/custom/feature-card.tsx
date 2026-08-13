import { ComponentType } from "react"
import { PopOnView } from "@/components/custom/transitions/transitions"

const FeatureCard = (props: { icon: ComponentType, heading: string, description: string }) => {
    return (
        <PopOnView className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg [&_*]:cursor-default">
            <div className="text-2xl mb-4">{<props.icon />}</div>
            <h3 className="font-semibold text-xl mb-2">{props.heading}</h3>
            <p className="text-muted-foreground">{props.description}</p>
        </PopOnView>
    )
}

export default FeatureCard