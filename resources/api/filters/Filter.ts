import { AtLeastOne } from '~/api/filters/types/utils/AtLeastOneField'
import { ExcludeFieldsOfType } from '~/api/filters/types/utils/ExcludeFieldsOfType'
import { Leaves } from '~/api/filters/types/utils/Leaves'
import { Paths } from '~/api/filters/types/utils/Paths'
import { PathType } from '~/api/filters/types/utils/PathType'
import IModel from '~/api/shine/interfaces/IModel'

export type Filter<Model extends IModel, PathsDepth extends number = 5, LeavesDepth extends number = 6> = Partial<{
    [Relation in keyof Model | Exclude<Paths<Model, PathsDepth>, Leaves<Model, LeavesDepth>>]:
    Relation extends Exclude<Paths<Model, PathsDepth>, Leaves<Model, LeavesDepth>> ?
        AtLeastOne<{
            [Field in keyof Pick<PathType<Model, Relation>, ExcludeFieldsOfType<PathType<Model, Relation>, IModel | IModel[]>>]: PathType<Model, Relation>[Field]
        }> :
        Model[Relation]
}>
