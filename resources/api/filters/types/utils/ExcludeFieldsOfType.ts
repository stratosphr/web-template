export type ExcludeFieldsOfType<Interface, ExcludedType> = {
    [Field in keyof Interface]: Interface[Field] extends ExcludedType ? never : Field
}[keyof Interface]
