import React, {Suspense} from "react"
import {FlexCol} from "./shared/Flex"
import {CategoriesQuery} from "./__generated__/CategoriesQuery.graphql"
import {NavLink} from "react-router-dom"
import DelayedLoader from "./shared/DelayedLoader"
import styles from "./Categories.modules.scss"
import {graphql, useLazyLoadQuery} from "react-relay/lib/hooks"

const query = graphql`
    query CategoriesQuery {
        allCategory {
            _id
            name_lt
            name_en
        }
    }
`

const Categories: React.SFC = () => {
    const data = useLazyLoadQuery<CategoriesQuery>(query, {})
    return (
        <>
            {data.allCategory.map(({name_lt, _id}) => (
                <NavLink
                    key={_id}
                    to={{pathname: `/${name_lt}`, state: {categoryId: _id}}}
                    activeClassName={styles.active}
                >
                    {name_lt}
                </NavLink>
            ))}
        </>
    )
}

export default Categories
