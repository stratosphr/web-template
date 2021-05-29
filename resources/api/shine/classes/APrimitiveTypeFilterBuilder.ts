import AFilterBuilder from '~/api/shine/classes/AFilterBuilder'
import { IStringFilter } from '~/api/shine/interfaces/IStringFilter'

export default abstract class APrimitiveTypeFilterBuilder extends AFilterBuilder implements IStringFilter {
    // noinspection JSUnusedGlobalSymbols
    public equals(value: string | number): this {
        return this.where('=', value)
    }

    // noinspection JSUnusedGlobalSymbols
    public eq(value: string | number): this {
        return this.equals(value)
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
        return this.where('like', value)
    }
}
