import React, {useState, lazy, Suspense} from "react"
import Modal from "components/shared/Modal"
import CarouselItem from "./CarouselItem"
import styles from "./Projects.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {trackCarousel} from "src/analytics-events/event"
import DelayedLoader from "components/shared/DelayedLoader"
import DelayedImage from "components/shared/DelayedImage"

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
    }>
    name: string
}

const CarouselImageItem = ({
    url,
    delayInMilliseconds
}: {
    url?: string
    delayInMilliseconds: number
}) => (
    <CarouselItem>
        {url && (
            <DelayedImage
                delayInMilliseconds={delayInMilliseconds}
                src={
                    url +
                    `?h=${Math.floor(window.innerHeight * 1.5)}&w=${Math.floor(
                        window.innerWidth * 1.5
                    )}&fm=webp`
                }
            />
        )}
    </CarouselItem>
)

const ProjectCarousel: React.FC<IProjectCarousel> = ({images, name}) => {
    const [isCarouselVisible, setCarouselVisible] = useState(false)

    const thumbHeight = Math.min(Math.floor(0.4 * window.innerWidth), 200)
    const thumbWidth = Math.min(Math.floor(0.4 * window.innerWidth), 200)

    return (
        <>
            <img
                className={styles.thumbnail}
                width={thumbHeight}
                height={thumbWidth}
                src={images[0]?.asset?.url + `?h=${thumbHeight * 2}&w=${thumbWidth * 2}&fm=webp`}
                onClick={() => {
                    trackCarousel(name)
                    setCarouselVisible(true)
                }}
            />
            {isCarouselVisible && (
                <Modal onClose={() => setCarouselVisible(false)}>
                    <Suspense fallback={<DelayedLoader delayInMilliseconds={1000} />}>
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            useKeyboardArrows={true}
                            swipeable={true}
                        >
                            {images.map(({asset}, index) => (
                                <CarouselImageItem
                                    key={index}
                                    url={asset?.url}
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
