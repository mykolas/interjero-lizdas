import {useEffect, useState} from "react"

export const useDelayedVisibility = (delayInMilliseconds: number): boolean => {
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), delayInMilliseconds)
        return () => clearTimeout(timeout)
    })

    return isVisible
}
