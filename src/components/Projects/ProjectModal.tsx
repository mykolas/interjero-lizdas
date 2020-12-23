import React, {ReactElement, useState, useEffect} from "react"
import Modal from "components/shared/Modal/Modal"
import {Carousel} from "react-responsive-carousel"
import styles from "./Projects.module.scss"
import {IImage} from "./types"

const CarouselImageItem = ({
    url,
    alt,
    isSelected
}: {
    url?: string
    alt?: string
    isSelected?: boolean
}) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(loaded || isSelected)
    }, [loaded, isSelected])

    return (
        <div className={styles.carouselItem}>
            {loaded && (
                <img
                    alt={alt}
                    src={`${url}?h=${Math.floor(window.innerHeight * 1.5)}&w=${Math.floor(
                        window.innerWidth * 1.5
                    )}&fm=webp&fit=max&q=100`}
                />
            )}
        </div>
    )
}

interface IProjectModal {
    images: ReadonlyArray<IImage>
    onClose()
}

const ProjectModal: React.FC<IProjectModal> = ({images, onClose}) => (
    <Modal onClose={onClose}>
        <Carousel
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={true}
            swipeable={true}
            renderItem={(item, {isSelected}) =>
                React.cloneElement(item as ReactElement, {isSelected})
            }
        >
            {images.map(({asset, caption_lt}, index) => (
                <CarouselImageItem key={index} url={asset?.url} alt={caption_lt} />
            ))}
        </Carousel>
    </Modal>
)

export default ProjectModal
