import APrimitiveTypeFilterBuilder from '~/api/shine/classes/APrimitiveTypeFilterBuilder'
import NumberFunction from '~/api/shine/classes/NumberFunction'
import StringFunction from '~/api/shine/classes/StringFunction'
import IModel from '~/api/shine/interface/IModel'

export default class StringFunctionFilterBuilder<Model extends IModel> extends APrimitiveTypeFilterBuilder {
    private _functionBuilder: StringFunction<Model> | NumberFunction<Model>

    constructor(functionBuilder: StringFunction<Model> | NumberFunction<Model>) {
        super()
        this._functionBuilder = functionBuilder
    }
}

// @ts-ignore
export const $stringFun: <Model extends IModel>(functionBuilder: StringFunction<Model> | NumberFunction<Model>) => StringFunctionFilterBuilder<Model> = <Model extends IModel>(functionBuilder: StringFunction<Model> | NumberFunction<Model>) => new StringFunctionFilterBuilder<Model>(functionBuilder)
