import IModel from '~/api/shine/interfaces/IModel'
import { Filter } from '~/api/shine/types/Filter'

export default interface IIndexParameters<Model extends IModel> {
    page?: number,
    items_per_page?: number,
    filters?: Filter<Model>
}
