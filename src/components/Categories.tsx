import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./Categories.modules.scss"
import {FlexCol} from "./shared/Flex"

const Categories: React.SFC = () => {
    return (
        <FlexCol className={styles.categories} flexGrow={1}>
            {window.DATA.data.allCategory.map(({name_lt, _id}) => (
                <NavLink
                    key={_id}
                    to={{pathname: `/${name_lt}`, state: {categoryId: _id}}}
                    activeClassName={styles.active}
                >
                    {name_lt}
                </NavLink>
            ))}
        </FlexCol>
    )
}

export default Categories
