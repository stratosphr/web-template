import APrimitiveTypeFilterBuilder from '~/api/shine/classes/APrimitiveTypeFilterBuilder'
import { INumberFilter } from '~/api/shine/interfaces/INumberFilter'

export default class NumberFilterBuilder extends APrimitiveTypeFilterBuilder implements INumberFilter {
    // noinspection JSUnusedGlobalSymbols
    public lt(value: number): this {
        return super.where('<', value)
    }

    // noinspection JSUnusedGlobalSymbols
    public leq(value: number): this {
        return super.where('<=', value)
    }

    // noinspection JSUnusedGlobalSymbols
    public geq(value: number): this {
        return super.where('>=', value)
    }

    // noinspection JSUnusedGlobalSymbols
    public gt(value: number): this {
        return super.where('>', value)
    }
}

// noinspection JSUnusedGlobalSymbols
export const $number: () => NumberFilterBuilder = () => new NumberFilterBuilder()
