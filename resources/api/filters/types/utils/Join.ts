export type Join<K, P> =
    K extends string ?
        P extends string ?
            `${K}${'' extends P ? '' : '.'}${P}`
            : never : never
