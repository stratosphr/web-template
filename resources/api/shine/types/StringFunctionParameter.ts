import NumberFunction from '~/api/shine/classes/NumberFunction'
import StringFunction from '~/api/shine/classes/StringFunction'
import IModel from '~/api/shine/interfaces/IModel'
import { Paths } from '~/api/shine/types/utils/Paths'

export type StringFunctionParameter<Model extends IModel> = `"${string}"` | Paths<Model> | StringFunction<Model> | NumberFunction<Model> | string | number
