import NumberFilterBuilder from '~/api/shine/classes/NumberFilterBuilder'
import StringFilterBuilder from '~/api/shine/classes/StringFilterBuilder'
import IModel from '~/api/shine/interface/IModel'
import { Flatten } from '~/api/shine/types/utils/Flatten'

type SimpleFilter<Model extends IModel> = Partial<{
    [Field in keyof Model]:
    Model[Field] extends string ?
        StringFilterBuilder | StringFilterBuilder[] :
        Model[Field] extends number ?
            NumberFilterBuilder | NumberFilterBuilder[] :
            Model[Field] extends IModel | IModel[] ?
                SimpleFilter<IModel & Flatten<Model[Field]>> | SimpleFilter<IModel & Flatten<Model[Field]>>[] :
                never
}>
export type Filter<Model extends IModel> = SimpleFilter<Model> | SimpleFilter<Model>[]
