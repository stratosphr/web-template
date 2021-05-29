import { Join } from '~/api/filters/types/utils/Join'
import { Prev } from '~/api/filters/types/utils/Prev'
import { Flatten } from '~/api/shine/types/utils/Flatten'

export type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    { [K in keyof T]-?: Join<K, Leaves<Flatten<T[K]>, Prev[D]>> }[keyof T] : ''
