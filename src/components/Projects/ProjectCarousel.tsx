import React, {useEffect} from "react"
import Modal from "components/shared/Modal/Modal"
import CarouselItem from "./CarouselItem"
import styles from "./Projects.module.scss"
import {trackCarousel} from "src/analytics-events/event"
import DelayedImage from "components/shared/DelayedImage/DelayedImage"
import {useHistory} from "react-router-dom"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import LazyImage from "components/shared/DelayedImage/DelayedImage"

interface IProjectCarousel {
    readonly images: ReadonlyArray<{
        readonly asset: {
            readonly url: string
            readonly metadata?: {readonly lqip?: string}
        }
        readonly caption_lt?: string
        readonly caption_en?: string
    }>
    name: string
    delay: number
}

const CarouselImageItem = ({
    url,
    alt,
    delayInMilliseconds,
    lqip
}: {
    url?: string
    alt?: string
    delayInMilliseconds: number
    lqip: string
}) => (
    <CarouselItem>
        {url && (
            <DelayedImage
                delayInMilliseconds={delayInMilliseconds}
                alt={alt}
                src={
                    url +
                    `?h=${Math.floor(window.innerHeight * 1.5)}&w=${Math.floor(
                        window.innerWidth * 1.5
                    )}&fm=webp&fit=max&q=100`
                }
                lqip={lqip}
            />
        )}
    </CarouselItem>
)

const ProjectCarousel: React.FC<IProjectCarousel> = ({images, name, delay}) => {
    const history = useHistory<{projectVisible?: string}>()

    const thumbHeight = Math.min(Math.floor(0.4 * window.innerWidth), 200)
    const thumbWidth = Math.min(Math.floor(0.4 * window.innerWidth), 200)

    const makeCarouselVisible = (visible: boolean) => {
        const previousVisibleProject = history.location.state?.projectVisible
        const projectVisible = visible ? name : undefined
        const nextPath = visible ? `${location.pathname}#${name}` : location.pathname

        if (previousVisibleProject === projectVisible) return

        history.push(nextPath, {...history.location.state, projectVisible})
    }

    const isCarouselVisible = history?.location?.state?.projectVisible === name

    useEffect(() => {
        const onOrientationChangeListener = () => {
            makeCarouselVisible(false)
        }
        isCarouselVisible &&
            window.addEventListener("orientationchange", onOrientationChangeListener)

        return () => window.removeEventListener("orientationchange", onOrientationChangeListener)
    })

    return (
        <>
            <LazyImage
                className={styles.thumbnail}
                width={thumbHeight}
                height={thumbWidth}
                src={
                    images[0]?.asset?.url +
                    `?h=${Math.floor(thumbHeight * 1.5)}&w=${Math.floor(thumbWidth * 1.5)}&fm=webp`
                }
                alt={images[0]?.caption_lt}
                onClick={() => {
                    trackCarousel(name)
                    makeCarouselVisible(true)
                }}
                delayInMilliseconds={delay}
                loading="lazy"
                lqip={images[0]?.asset?.metadata?.lqip}
            />
            {isCarouselVisible && (
                <Modal onClose={() => makeCarouselVisible(false)}>
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        useKeyboardArrows={true}
                        swipeable={true}
                    >
                        {images.map(({asset, caption_lt}, index) => (
                            <CarouselImageItem
                                key={index}
                                url={asset?.url}
                                alt={caption_lt}
                                delayInMilliseconds={index * 100}
                                lqip={asset?.metadata?.lqip}
                            />
                        ))}
                    </Carousel>
                </Modal>
            )}
        </>
    )
}

export default ProjectCarousel
