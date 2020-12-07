import React, {useState, lazy} from "react"
import Modal from "components/shared/Modal"
import CarouselItem from "./CarouselItem"
import styles from "./Projects.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Carousel = lazy(() =>
    import("react-responsive-carousel").then(({Carousel}) => ({default: Carousel}))
)

interface IProjectCarousel {
    readonly images: ReadonlyArray<{
        readonly asset: {
            readonly url: string
        }
    }>
}

const ProjectCarousel: React.FC<IProjectCarousel> = ({images}) => {
    const [isCarouselVisible, setCarouselVisible] = useState(false)

    return isCarouselVisible ? (
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
                                `?h=${Math.floor(window.innerHeight)}&w=${Math.floor(
                                    window.innerWidth
                                )}`
                            }
                        />
                    </CarouselItem>
                ))}
            </Carousel>
        </Modal>
    ) : (
        <img
            className={styles.thumbnail}
            width={Math.min(0.4 * window.innerWidth, 200)}
            height={Math.min(0.4 * window.innerWidth, 200)}
            src={images[0]?.asset?.url + "?h=400&w=400"}
            onClick={() => setCarouselVisible(true)}
        />
    )
}

export default ProjectCarousel
