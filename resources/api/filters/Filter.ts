import { NonRelationFieldsAtPath } from '~/api/filters/types/NonRelationFieldsAtPath'
import { Relation } from '~/api/filters/types/Relation'
import { AtLeastOne } from '~/api/filters/types/utils/AtLeastOneField'
import { PathType } from '~/api/filters/types/utils/PathType'
import IModel from '~/api/shine/interfaces/IModel'

export type Filter<Model extends IModel, PathsDepth extends number = 5, LeavesDepth extends number = 6> = Partial<{
    [FieldOrRelation in keyof Model | Relation<Model, PathsDepth, LeavesDepth>]:
    FieldOrRelation extends Relation<Model, PathsDepth, LeavesDepth> ?
        AtLeastOne<{
            [Field in NonRelationFieldsAtPath<Model, FieldOrRelation>]: PathType<Model, FieldOrRelation>[Field]
        }> :
        Model[FieldOrRelation]
}>
