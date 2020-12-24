export default abstract class AFilterBuilder {
    private readonly filters: { [operator: string]: any }

    constructor() {
        this.filters = {}
    }

    // noinspection JSUnusedGlobalSymbols
    public equals(value: string | number): this {
        return this.addConstraint('=', value)
    }

    // noinspection JSUnusedGlobalSymbols
    public startsWith(value: string | number): this {
        return this.like(`${value}%`)
    }

    // noinspection JSUnusedGlobalSymbols
    public contains(value: string | number): this {
        return this.like(`%${value}%`)
    }

    // noinspection JSUnusedGlobalSymbols
    public endsWith(value: string | number): this {
        return this.like(`%${value}`)
    }

    // noinspection JSUnusedGlobalSymbols
    public like(value: string | number): this {
        return this.addConstraint('like', value)
    }

    protected addConstraint(operator: string, params: any): this {
        if (this.filters[operator] === undefined) {
            this.filters[operator] = []
        }
        this.filters[operator].push(params)
        return this
    }
}
