import React from "react"
import {useDelayedVisibility} from "./hooks/useDelayedVisibility"

const LazyImage: React.FC<
    React.ImgHTMLAttributes<HTMLImageElement> & {src?: string; delayInMilliseconds?: number}
> = ({delayInMilliseconds, ...props}) => {
    const isVisible = useDelayedVisibility(delayInMilliseconds)

    return isVisible && <img {...props} loading="lazy" />
}

export default LazyImage
