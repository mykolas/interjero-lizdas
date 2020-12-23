export interface IImage {
    readonly asset: {
        readonly url: string
        readonly metadata?: {readonly lqip?: string}
    }
    readonly caption_lt?: string
    readonly caption_en?: string
}
