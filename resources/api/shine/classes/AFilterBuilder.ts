export default class AFilterBuilder {
    private readonly _filters: {
        where: { [operator: string]: any },
        whereRaw: string[]
    } = {
        where: {},
        whereRaw: []
    }

    protected where(operator: string, params: any): this {
        if (this._filters.where[operator] === undefined) {
            this._filters.where[operator] = []
        }
        this._filters.where[operator].push(params)
        return this
    }

    protected whereRaw(raw: string): this {
        this._filters.whereRaw.push(raw)
        return this
    }
}
