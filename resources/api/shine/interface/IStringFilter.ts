export interface IStringFilter {
    equals(value: string | number): this

    startsWith(value: string | number): this

    contains(value: string | number): this

    endsWith(value: string | number): this

    like(value: string | number): this
}
