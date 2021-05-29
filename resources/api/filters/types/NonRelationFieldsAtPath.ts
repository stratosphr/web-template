import { ExcludeFieldsOfType } from '~/api/filters/types/utils/ExcludeFieldsOfType'
import { PathType } from '~/api/filters/types/utils/PathType'
import IModel from '~/api/shine/interfaces/IModel'

export type NonRelationFieldsAtPath<Model extends IModel, Path extends string> = ExcludeFieldsOfType<PathType<Model, Path>, IModel | IModel[]>
