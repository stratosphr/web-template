import NumberFilterBuilder from '~/api/shine/classes/NumberFilterBuilder'
import StringFilterBuilder from '~/api/shine/classes/StringFilterBuilder'
import IModel from '~/api/shine/interface/IModel'
import { Flatten } from '~/api/shine/types/utils/Flatten'

export type Filter<Model extends IModel> = Partial<{
    [Field in keyof Model]:
    Model[Field] extends string ?
        StringFilterBuilder :
        Model[Field] extends number ?
            NumberFilterBuilder :
            Model[Field] extends IModel | IModel[] ?
                Filter<IModel & Flatten<Model[Field]>> :
                never
}>
