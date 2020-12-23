import React from "react"
import styles from "./Flex.modules.scss"

interface FlexProps {
    className?: string
}

const classes = (...classNames) => classNames.join(" ")

export const FlexRow: React.FC<FlexProps> = ({className, ...props}) => (
    <div className={classes(styles.flexRow, className)} {...props} />
)

export const FlexCol: React.FC<FlexProps> = ({className, ...props}) => (
    <div className={classes(styles.flexCol, className)} {...props} />
)
