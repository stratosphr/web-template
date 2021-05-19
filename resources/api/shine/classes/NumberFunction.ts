import AFunction from '~/api/shine/classes/AFunction'
import IModel from '~/api/shine/interfaces/IModel'
import { NumberFunctionParameter } from '~/api/shine/types/NumberFunctionParameter'

export default class NumberFunction<Model extends IModel> extends AFunction<Model, number> {
}

// @ts-ignore
// noinspection JSUnusedGlobalSymbols
export const cos: <Model extends IModel>(field: NumberFunctionParameter<Model> | NumberFunction<Model>) => NumberFunction<Model> = <Model extends IModel>(field: NumberFunctionParameter<Model> | NumberFunction<Model>) => new NumberFunction<Model>('cos', field)
// @ts-ignore
// noinspection JSUnusedGlobalSymbols
export const sin: <Model extends IModel>(field: NumberFunctionParameter<Model> | NumberFunction<Model>) => NumberFunction<Model> = <Model extends IModel>(field: NumberFunctionParameter<Model> | NumberFunction<Model>) => new NumberFunction<Model>('sin', field)
