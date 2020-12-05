import React from "react"
import styles from "./Projects.module.scss"

const CarouselItem: React.FC = ({children}) => <div className={styles.carouselItem}>{children}</div>

export default CarouselItem
