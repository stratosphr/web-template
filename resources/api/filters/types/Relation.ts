import { Leaves } from '~/api/filters/types/utils/Leaves'
import { Paths } from '~/api/filters/types/utils/Paths'
import IModel from '~/api/shine/interfaces/IModel'

export type Relation<Model extends IModel, PathsDepth extends number = 5, LeavesDepth extends number = 6> = Exclude<Paths<Model, PathsDepth>, Leaves<Model, LeavesDepth>>
