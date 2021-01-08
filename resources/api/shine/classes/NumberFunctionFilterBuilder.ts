import AFilterBuilder from '~/api/shine/classes/AFilterBuilder'
import NumberFunction from '~/api/shine/classes/NumberFunction'
import IModel from '~/api/shine/interface/IModel'
import { INumberFilter } from '~/api/shine/interface/INumberFilter'

export default class NumberFunctionFilterBuilder<Model extends IModel> extends AFilterBuilder implements INumberFilter {
    private _functionBuilder: NumberFunction<Model>

    constructor(functionBuilder: NumberFunction<Model>) {
        super()
        this._functionBuilder = functionBuilder
    }

    lt(value: number): this {
        super.where('<', value)
        return this
    }

    leq(value: number): this {
        super.where('<=', value)
        return this
    }

    geq(value: number): this {
        super.where('>=', value)
        return this
    }

    gt(value: number): this {
        super.where('>', value)
        return this
    }
}

// @ts-ignore
export const $numberFun: <Model extends IModel>(functionBuilder: NumberFunction<Model>) => NumberFunctionFilterBuilder<Model> = <Model extends IModel>(functionBuilder: NumberFunction<Model>) => new NumberFunctionFilterBuilder<Model>(functionBuilder)
