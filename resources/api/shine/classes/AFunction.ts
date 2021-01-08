import IModel from '~/api/shine/interface/IModel'
import { NumberFunctionParameter } from '~/api/shine/types/NumberFunctionParameter'
import { StringFunctionParameter } from '~/api/shine/types/StringFunctionParameter'

export default abstract class AFunction<Model extends IModel, PrimitiveType extends string | number> {
    private readonly _name: string
    private readonly _parameters: (PrimitiveType extends string ? StringFunctionParameter<Model> : NumberFunctionParameter<Model>)[]

    constructor(name: string, ...parameters: (PrimitiveType extends string ? StringFunctionParameter<Model> : NumberFunctionParameter<Model>)[]) {
        this._name = name
        this._parameters = parameters
    }

    get name(): string {
        return this._name
    }

    get parameters(): (PrimitiveType extends string ? StringFunctionParameter<Model> : NumberFunctionParameter<Model>)[] {
        return this._parameters
    }
}
