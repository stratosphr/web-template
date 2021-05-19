import IModel from '~/api/shine/interfaces/IModel'

export default interface IState<Model extends IModel> {
    items: Model[],
    map: { [id: number]: IModel }
}
