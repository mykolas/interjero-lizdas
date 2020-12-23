import React, {useEffect} from "react"
import {useHistory} from "react-router-dom"
import ProjectModal from "./ProjectModal"
import Thumbnail from "./Thumbnail"
import {trackCarousel} from "src/analytics-events/event"
import {IImage} from "./types"

interface IProject {
    readonly images: ReadonlyArray<IImage>
    name: string
}

const Project: React.FC<IProject> = ({images, name}) => {
    const history = useHistory<{projectVisible?: string}>()

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
            {isCarouselVisible && (
                <ProjectModal images={images} onClose={() => makeCarouselVisible(false)} />
            )}
            <Thumbnail
                image={images[0]}
                onClick={() => {
                    trackCarousel(name)
                    makeCarouselVisible(true)
                }}
            />
        </>
    )
}

export default Project
