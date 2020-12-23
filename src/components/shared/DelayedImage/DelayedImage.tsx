import React from "react"
import LazyLoad from "react-lazyload"

const DelayedImage: React.FC<
    React.ImgHTMLAttributes<HTMLImageElement> & {
        src?: string
        lqip: string
    }
> = ({src, lqip, ...props}) => {
    return (
        <LazyLoad debounce={0} throttle={0} once placeholder={<img {...props} src={lqip} />}>
            <img {...props} src={src} />
        </LazyLoad>
    )
}

export default DelayedImage
