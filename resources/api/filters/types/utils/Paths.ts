import { Join } from '~/api/filters/types/utils/Join'
import { Prev } from '~/api/filters/types/utils/Prev'
import { Flatten } from '~/api/shine/types/utils/Flatten'

export type Paths<T, D extends number = 8> = [D] extends [never] ? never : T extends object ?
    {
        [K in keyof T]-?: K extends string ?
        `${K}` | Join<K, Paths<Flatten<T[K]>, Prev[D]>>
        : never
    }[keyof T] : ''
