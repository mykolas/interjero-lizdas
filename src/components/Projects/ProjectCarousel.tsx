import React, {lazy, Suspense, useEffect} from "react"
import Modal from "components/shared/Modal"
import CarouselItem from "./CarouselItem"
import styles from "./Projects.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {trackCarousel} from "src/analytics-events/event"
import DelayedLoader from "components/shared/DelayedLoader"
import DelayedImage from "components/shared/DelayedImage"
import {useHistory} from "react-router-dom"

const Carousel = lazy(() =>
    import(/* webpackPrefetch: true */ "react-responsive-carousel").then(({Carousel}) => ({
        default: Carousel
    }))
)

interface IProjectCarousel {
    readonly images: ReadonlyArray<{
        readonly asset: {
            readonly url: string
        }
        readonly caption_lt?: string
        readonly caption_en?: string
    }>
    name: string
}

const CarouselImageItem = ({
    url,
    alt,
    delayInMilliseconds
}: {
    url?: string
    alt?: string
    delayInMilliseconds: number
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
            />
        )}
    </CarouselItem>
)

const ProjectCarousel: React.FC<IProjectCarousel> = ({images, name}) => {
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
            <img
                className={styles.thumbnail}
                width={thumbHeight}
                height={thumbWidth}
                src={images[0]?.asset?.url + `?h=${thumbHeight * 2}&w=${thumbWidth * 2}&fm=webp`}
                alt={images[0]?.caption_lt}
                onClick={() => {
                    trackCarousel(name)
                    makeCarouselVisible(true)
                }}
            />
            {isCarouselVisible && (
                <Modal onClose={() => makeCarouselVisible(false)}>
                    <Suspense fallback={<DelayedLoader delayInMilliseconds={1000} />}>
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
                                />
                            ))}
                        </Carousel>
                    </Suspense>
                </Modal>
            )}
        </>
    )
}

export default ProjectCarousel
