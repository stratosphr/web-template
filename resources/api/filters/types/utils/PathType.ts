import { Flatten } from '~/api/shine/types/utils/Flatten'

export type PathType<Interface, Path extends string, Fail = undefined> =
    Path extends `${infer L}.${infer R}` ?
        L extends keyof Interface ?
            R extends string ?
                PathType<Flatten<Interface[L]>, R, Fail> :
                Fail :
            Fail :
        Path extends keyof Interface ?
            Flatten<Interface[Path]> :
            Interface
