import IModel from '~/api/shine/interfaces/IModel'
import { NumberFunctionParameter } from '~/api/shine/types/NumberFunctionParameter'
import { StringFunctionParameter } from '~/api/shine/types/StringFunctionParameter'

export default abstract class AFunction<Model extends IModel, PrimitiveType extends string | number> {
    private readonly $: string
    // noinspection JSMismatchedCollectionQueryUpdate
    private readonly _: (PrimitiveType extends string ? StringFunctionParameter<Model> : NumberFunctionParameter<Model>)[]

    constructor(name: string, ...parameters: (PrimitiveType extends string ? StringFunctionParameter<Model> : NumberFunctionParameter<Model>)[]) {
        this.$ = name
        this._ = parameters
    }
}
