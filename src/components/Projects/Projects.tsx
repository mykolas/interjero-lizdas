import React from "react"
import ProjectCarousel from "./ProjectCarousel"
import {ProjectsQuery} from "./__generated__/ProjectsQuery.graphql"
import {Route, RouteProps} from "react-router-dom"
import {graphql, useLazyLoadQuery} from "react-relay/lib/hooks"

const query = graphql`
    query ProjectsQuery {
        allProject {
            category {
                _id
            }
            name_lt
            name_en
            images {
                asset {
                    url
                }
            }
        }
    }
`

const getCategoryId = ({location}: RouteProps) =>
    (location.state as {categoryId: string})?.categoryId

const Projects: React.FC<RouteProps> = (props) => {
    const data = useLazyLoadQuery<ProjectsQuery>(query, {})
    const categoryId = getCategoryId(props)

    return (
        <>
            {data.allProject
                .filter(({category}) => !categoryId || categoryId === category?._id)
                .map(({images}, index) => (
                    <ProjectCarousel key={index} images={images} />
                ))}
        </>
    )
}

const RoutedProjects: React.SFC = () => <Route component={Projects} />

export default RoutedProjects
