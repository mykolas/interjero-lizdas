export const trackNavigation = (value: string): void =>
    window.gtag?.("event", "navigation", {value})

export const trackCarousel = (project: string): void =>
    window.gtag?.("event", "carouselOpened", {value: project})

export const trackSocialLink = (value: "facebook" | "instagram"): void =>
    window.gtag?.("event", "socialLinkClicked", {value})

export const trackPhoneCopied = (): void => window.gtag?.("event", "phoneNumber", {value: "copied"})
export const trackPhoneClicked = (): void =>
    window.gtag?.("event", "phoneNumber", {value: "clicked"})

export const trackEmailCopied = (): void => window.gtag?.("event", "email", {value: "copied"})
export const trackEmailClicked = (): void => window.gtag?.("event", "email", {value: "clicked"})
