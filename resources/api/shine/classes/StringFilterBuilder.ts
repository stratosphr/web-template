import APrimitiveTypeFilterBuilder from '~/api/shine/classes/APrimitiveTypeFilterBuilder'

export default class StringFilterBuilder extends APrimitiveTypeFilterBuilder {
    // noinspection JSUnusedLocalSymbols
    private _(): void {
    }
}

// noinspection JSUnusedGlobalSymbols
export const $string: () => StringFilterBuilder = () => new StringFilterBuilder()
