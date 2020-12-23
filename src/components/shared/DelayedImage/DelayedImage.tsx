import React, {useEffect, useState} from "react"
import LazyLoad from "react-lazyload"

interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string
    lqip: string
}

const loadedImages: string[] = []
const isImageLoaded = (src) => loadedImages.indexOf(src) !== -1
const loadImage = (src, onLoad) => {
    if (isImageLoaded(src)) {
        onLoad()
        return
    }

    loadedImages.push(src)
    const img = new Image()
    img.src = src
    img.onload = onLoad

    return img
}

export const LoadableImage: React.FC<IImage> = ({src, lqip, ...props}) => {
    const [loaded, setLoaded] = useState(isImageLoaded(src))

    useEffect(() => {
        loaded || loadImage(src, () => setLoaded(true))
    }, [src, lqip, loaded])

    return <img {...props} src={loaded ? src : lqip} />
}

const DelayedImage: React.FC<IImage> = ({lqip, ...props}) => {
    return (
        <LazyLoad
            debounce={0}
            throttle={0}
            offset={100}
            once
            overflow={window.innerWidth > 850 ? true : false}
            placeholder={<img {...props} src={lqip} />}
        >
            <LoadableImage {...props} lqip={lqip} />
        </LazyLoad>
    )
}

export default DelayedImage
