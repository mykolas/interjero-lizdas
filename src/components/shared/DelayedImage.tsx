import React from "react"
import {useDelayedVisibility} from "./hooks/useDelayedVisibility"

const LazyImage: React.FC<
    React.ImgHTMLAttributes<HTMLImageElement> & {
        src?: string
        delayInMilliseconds?: number
        lqip: string
    }
> = ({delayInMilliseconds, lqip, ...props}) => {
    const isVisible = useDelayedVisibility(delayInMilliseconds)

    return <img {...props} src={isVisible ? props.src : lqip} loading="lazy" />
}

export default LazyImage
