export default class AFilterBuilder {
    protected where(operator: string, params: any): this {
        if ((this as any)[`$${operator}`] === undefined) {
            (this as any)[`$${operator}`] = []
        }
        (this as any)[`$${operator}`].push(params)
        return this
    }
}
