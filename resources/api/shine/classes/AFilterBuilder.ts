export default abstract class AFilterBuilder {
    private readonly filters: { [operator: string]: any }

    constructor() {
        this.filters = {}
    }

    public equals(value: string | number): this {
        return this.addConstraint('=', value)
    }

    public startsWith(value: string | number): this {
        return this.like(`${value}%`)
    }

    public contains(value: string | number): this {
        return this.like(`%${value}%`)
    }

    public endsWith(value: string | number): this {
        return this.like(`%${value}`)
    }

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
