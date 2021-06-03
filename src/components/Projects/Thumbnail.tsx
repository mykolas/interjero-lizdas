import React from "react"
import styles from "./Projects.module.scss"
import DelayedImage from "components/shared/DelayedImage/DelayedImage"
import {IImage} from "./types"

interface IThumbnail {
    image: IImage
    name: string
    onClick()
}

const Thumbnail: React.FC<IThumbnail> = ({image, name, onClick}) => {
    const thumbHeight = Math.min(Math.floor(0.4 * window.innerWidth), 200)
    const thumbWidth = Math.min(Math.floor(0.4 * window.innerWidth), 200)
    return (
        <DelayedImage
            className={styles.thumbnail}
            width={thumbHeight}
            height={thumbWidth}
            src={`${image.asset?.url}?h=200&w=200&fm=webp&fit=min&q=100`}
            alt={name || image.caption_lt}
            onClick={onClick}
            lqip={image.asset?.metadata?.lqip}
        />
    )
}

export default Thumbnail
