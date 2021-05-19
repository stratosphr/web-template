import NumberFunction from '~/api/shine/classes/NumberFunction'
import IModel from '~/api/shine/interfaces/IModel'
import { Paths } from '~/api/shine/types/utils/Paths'

export type NumberFunctionParameter<Model extends IModel> = `"${string}"` | Paths<Model> | NumberFunction<Model> | string | number
