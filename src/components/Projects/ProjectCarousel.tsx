import React, {useState} from "react"
import {Carousel} from "react-responsive-carousel"
import Modal from "components/shared/Modal"
import CarouselItem from "./CarouselItem"
import styles from "./Projects.module.scss"

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
                        <img src={asset?.url + `?h=${Math.floor(window.innerHeight)}`} />
                    </CarouselItem>
                ))}
            </Carousel>
        </Modal>
    ) : (
        <img
            className={styles.thumbnail}
            src={images[0]?.asset?.url + "?h=400&w=400"}
            onClick={() => setCarouselVisible(true)}
        />
    )
}

export default ProjectCarousel
