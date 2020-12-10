import React from "react"
import ProjectCarousel from "./ProjectCarousel"
import {Route, RouteProps} from "react-router-dom"

const getCategoryId = ({location}: RouteProps) =>
    (location.state as {categoryId: string})?.categoryId

const Projects: React.FC<RouteProps> = (props) => {
    const categoryId = getCategoryId(props)

    return (
        <>
            {window.DATA.data.allProject
                .filter(({category}) => !categoryId || categoryId === category?._id)
                .map(({images, name_lt}, index) => (
                    <ProjectCarousel
                        key={index}
                        images={images}
                        name={name_lt}
                        delay={(index % 4) * 50}
                    />
                ))}
        </>
    )
}

const RoutedProjects: React.SFC = () => <Route component={Projects} />

export default RoutedProjects
