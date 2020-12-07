declare global {
    interface Window {
        DATA: {
            data: ProjectsQueryResponse & CategoriesQueryResponse
        }
    }
}

export type ProjectsQueryResponse = {
    readonly allProject: ReadonlyArray<{
        readonly category: {
            readonly _id: string | null
        } | null
        readonly name_lt: string | null
        readonly name_en: string | null
        readonly images: ReadonlyArray<{
            readonly asset: {
                readonly url: string | null
            } | null
        } | null> | null
    }>
}

export type CategoriesQueryResponse = {
    readonly allCategory: ReadonlyArray<{
        readonly _id: string | null
        readonly name_lt: string | null
        readonly name_en: string | null
    }>
}
