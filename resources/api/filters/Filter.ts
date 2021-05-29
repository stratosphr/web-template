import { NonRelationFieldsAtPath } from '~/api/filters/types/NonRelationFieldsAtPath'
import { RelationPath } from '~/api/filters/types/RelationPath'
import { AtLeastOne } from '~/api/filters/types/utils/AtLeastOneField'
import { PathType } from '~/api/filters/types/utils/PathType'
import NumberFilterBuilder from '~/api/shine/classes/NumberFilterBuilder'
import NumberFunctionFilterBuilder from '~/api/shine/classes/NumberFunctionFilterBuilder'
import StringFilterBuilder from '~/api/shine/classes/StringFilterBuilder'
import StringFunctionFilterBuilder from '~/api/shine/classes/StringFunctionFilterBuilder'
import IModel from '~/api/shine/interfaces/IModel'

export type Filter<Model extends IModel, PathsDepth extends number = 5, LeavesDepth extends number = 6> = Partial<{
    [FieldOrRelation in keyof Model | RelationPath<Model, PathsDepth, LeavesDepth>]:
    FieldOrRelation extends RelationPath<Model, PathsDepth, LeavesDepth> ?
        AtLeastOne<{
            [Field in NonRelationFieldsAtPath<Model, FieldOrRelation>]:
            PathType<Model, FieldOrRelation>[Field] extends string ?
                StringFilterBuilder | StringFilterBuilder[] :
                PathType<Model, FieldOrRelation>[Field] extends number ?
                    NumberFilterBuilder | NumberFilterBuilder[] :
                    never
        } & {
            $functions:
                StringFunctionFilterBuilder<IModel & PathType<Model, FieldOrRelation>> |
                NumberFunctionFilterBuilder<IModel & PathType<Model, FieldOrRelation>> |
                (StringFunctionFilterBuilder<IModel & PathType<Model, FieldOrRelation>> | NumberFunctionFilterBuilder<IModel & PathType<Model, FieldOrRelation>>)[] |
                (StringFunctionFilterBuilder<IModel & PathType<Model, FieldOrRelation>> | NumberFunctionFilterBuilder<IModel & PathType<Model, FieldOrRelation>>)[][]
        }> |
        AtLeastOne<{
            [Field in NonRelationFieldsAtPath<Model, FieldOrRelation>]:
            PathType<Model, FieldOrRelation>[Field] extends string ?
                StringFilterBuilder | StringFilterBuilder[] :
                PathType<Model, FieldOrRelation>[Field] extends number ?
                    NumberFilterBuilder | NumberFilterBuilder[] :
                    never
        }>[] :
        Model[FieldOrRelation] extends string ?
            StringFilterBuilder | StringFilterBuilder[] :
            Model[FieldOrRelation] extends number ?
                NumberFilterBuilder | NumberFilterBuilder[] :
                never
} & { $functions: StringFunctionFilterBuilder<Model> | NumberFunctionFilterBuilder<Model> | (StringFunctionFilterBuilder<Model> | NumberFunctionFilterBuilder<Model>)[] | (StringFunctionFilterBuilder<Model> | NumberFunctionFilterBuilder<Model>)[][] }>
