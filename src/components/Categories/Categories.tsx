import React from "react"
import {NavLink} from "react-router-dom"
import styles from "./Categories.modules.scss"
import {FlexCol} from "../shared/Flex/Flex"
import {trackNavigation} from "src/analytics-events/event"

const Categories: React.SFC = () => {
    return (
        <FlexCol className={styles.categories}>
            <NavLink
                to={{pathname: `/Paslaugos`, state: {categoryId: undefined, link: "paslaugos"}}}
                activeClassName={styles.active}
                style={{textDecoration: "initial"}}
                onClick={() => trackNavigation("paslaugos")}
                className={styles.servicesLink}
            >
                Paslaugos
            </NavLink>
            {window.DATA.data.allCategory.map(({name_lt, _id}) => (
                <NavLink
                    key={_id}
                    to={{pathname: `/${name_lt}`, state: {categoryId: _id}}}
                    activeClassName={styles.active}
                    onClick={() => trackNavigation(name_lt)}
                >
                    {name_lt}
                </NavLink>
            ))}
        </FlexCol>
    )
}

export default Categories
