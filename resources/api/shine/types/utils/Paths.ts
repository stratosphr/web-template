import { Flatten } from '~/api/shine/types/utils/Flatten'
import { Join } from '~/api/shine/types/utils/Join'
import { Prev } from '~/api/shine/types/utils/Prev'

export type Paths<T, D extends number = 6> = [D] extends [never] ? never : T extends object ?
    {
        [K in keyof T]-?: K extends string ?
        `${K}` | Join<K, Paths<Flatten<T[K]>, Prev[D]>>
        : never
    }[keyof T] : ''
