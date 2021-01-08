import AFunction from '~/api/shine/classes/AFunction'
import IModel from '~/api/shine/interface/IModel'
import { StringFunctionParameter } from '~/api/shine/types/StringFunctionParameter'

export default class StringFunction<Model extends IModel> extends AFunction<Model, string> {
}

// @ts-ignore
// noinspection JSUnusedGlobalSymbols
export const concat: <Model extends IModel>(...fields: (StringFunctionParameter<Model> | StringFunction<Model>)[]) => StringFunction<Model> = <Model extends IModel>(...fields: (StringFunctionParameter<Model> | StringFunction<Model>)[]) => new StringFunction<Model>('concat', fields)
// @ts-ignore
// noinspection JSUnusedGlobalSymbols
export const concatWs: <Model extends IModel>(...fields: (StringFunctionParameter<Model> | StringFunction<Model>)[]) => StringFunction<Model> = <Model extends IModel>(...fields: (StringFunctionParameter<Model> | StringFunction<Model>)[]) => new StringFunction<Model>('concat_ws', fields)
