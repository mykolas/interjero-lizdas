import React, {Suspense} from "react"
import {FlexCol} from "./shared/Flex"
import {useLazyLoadQuery, graphql} from "react-relay/hooks"
import {CategoriesQuery} from "./__generated__/CategoriesQuery.graphql"
import {Link, NavLink} from "react-router-dom"
import DelayedLoader from "./shared/DelayedLoader"
import styles from "./Categories.modules.scss"

const query = graphql`
    query CategoriesQuery {
        allCategory {
            _id
            name_lt
            name_en
        }
    }
`

const LazyCategories: React.SFC = () => {
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

const Categories: React.SFC = () => {
    return (
        <FlexCol className={styles.categories} flexGrow={1}>
            <Suspense fallback={<DelayedLoader delayInSeconds={1} />}>
                <LazyCategories />
            </Suspense>
        </FlexCol>
    )
}

export default Categories
