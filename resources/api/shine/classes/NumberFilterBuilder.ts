import AFilterBuilder from '~/api/shine/classes/AFilterBuilder'

export default class NumberFilterBuilder extends AFilterBuilder {
    // noinspection JSUnusedGlobalSymbols
    public lt(value: number): this {
        return super.addConstraint('<', value)
    }

    // noinspection JSUnusedGlobalSymbols
    public leq(value: number): this {
        return super.addConstraint('<=', value)
    }

    // noinspection JSUnusedGlobalSymbols
    public geq(value: number): this {
        return super.addConstraint('>=', value)
    }

    // noinspection JSUnusedGlobalSymbols
    public gt(value: number): this {
        return super.addConstraint('>', value)
    }
}

// noinspection JSUnusedGlobalSymbols
export const $number: () => NumberFilterBuilder = () => new NumberFilterBuilder()
