import AFilterBuilder from '~/api/shine/classes/AFilterBuilder'

export default class StringFilterBuilder extends AFilterBuilder {
    // noinspection JSUnusedLocalSymbols
    private _(): void {
    }
}

// noinspection JSUnusedGlobalSymbols
export const $string: () => StringFilterBuilder = () => new StringFilterBuilder()
