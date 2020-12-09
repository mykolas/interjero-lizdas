export const trackNavigation = (value: string): void =>
    window.gtag?.("event", "navigation_" + value.replace(/\s/g, ""), {
        event_category: "navigation",
        event_label: "Navigation",
        value: 1
    })

export const trackCarousel = (project: string): void =>
    window.gtag?.("event", "carouselOpened_" + project.replace(/\s/g, ""), {
        event_category: "interaction",
        event_label: "Interaction",
        value: 1
    })

const socialEventParam = {
    event_category: "socialRedirect",
    event_label: "SocialRedirect",
    value: 1
}
const conversionEventParam = {
    event_category: "potential_conversion",
    event_label: "Potential Conversion",
    value: 1
}

export const trackSocialLink = (value: "facebook" | "instagram"): void =>
    window.gtag?.("event", "socialLinkClicked_" + value, socialEventParam)

export const trackPhoneCopied = (): void =>
    window.gtag?.("event", "phoneNumberCopied", conversionEventParam)
export const trackPhoneClicked = (): void =>
    window.gtag?.("event", "phoneNumberClicked", conversionEventParam)

export const trackEmailCopied = (): void =>
    window.gtag?.("event", "emailCopied", conversionEventParam)
export const trackEmailClicked = (): void =>
    window.gtag?.("event", "emailClicked", conversionEventParam)
