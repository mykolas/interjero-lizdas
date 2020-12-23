import React from "react"
import Project from "./Project"
import {RouteProps} from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const getCategoryId = ({location}: RouteProps) =>
    (location.state as {categoryId: string})?.categoryId

const Projects: React.FC<RouteProps> = (props) => {
    const categoryId = getCategoryId(props)

    return (
        <>
            {window.DATA.data.allProject
                .filter(({category}) => !categoryId || categoryId === category?._id)
                .map(({images, name_lt}, index) => (
                    <Project key={index} images={images} name={name_lt} />
                ))}
        </>
    )
}

export default Projects
