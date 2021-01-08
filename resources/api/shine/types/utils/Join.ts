export type Join<K extends string, P extends string> = K extends string | number ?
    P extends string | number ?
        `${K}${'' extends P ? '' : '.'}${P}`
        : never : never;
