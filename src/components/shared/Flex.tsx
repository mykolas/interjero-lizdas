import React, {CSSProperties} from "react"
import {Property} from "csstype"

interface FlexProps {
    flexDirection: Property.FlexDirection
    flexWrap?: Property.FlexWrap
    flexGrow?: Property.FlexGrow
    justifyContent?: Property.JustifyContent
    alignSelf?: Property.AlignSelf
    alignContent?: Property.AlignContent
    className?: string
    style?: CSSProperties
}

const Flex: React.FC<FlexProps> = ({children, className, style, ...flexProps}) => (
    <div
        style={{
            display: "flex",
            ...flexProps,
            ...style
        }}
        className={className}
    >
        {children}
    </div>
)

type FlexColRowProps = Omit<FlexProps, "flexDirection">

export const FlexRow: React.FC<FlexColRowProps> = (props) => <Flex flexDirection="row" {...props} />

export const FlexCol: React.FC<FlexColRowProps> = (props) => (
    <Flex flexDirection="column" {...props} />
)
