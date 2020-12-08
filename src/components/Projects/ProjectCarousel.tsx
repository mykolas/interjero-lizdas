import React, {useState, lazy} from "react"
import Modal from "components/shared/Modal"
import CarouselItem from "./CarouselItem"
import styles from "./Projects.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {trackCarousel} from "src/analytics-events/event"

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
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        useKeyboardArrows={true}
                        swipeable={true}
                    >
                        {images.map(({asset}, index) => (
                            <CarouselItem key={index}>
                                <img
                                    src={
                                        asset?.url +
                                        `?h=${Math.floor(window.innerHeight * 1.5)}&w=${Math.floor(
                                            window.innerWidth * 1.5
                                        )}&fm=webp`
                                    }
                                />
                            </CarouselItem>
                        ))}
                    </Carousel>
                </Modal>
            )}
        </>
    )
}

export default ProjectCarousel
