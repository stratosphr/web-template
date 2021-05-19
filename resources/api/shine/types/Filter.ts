import NumberFilterBuilder from '~/api/shine/classes/NumberFilterBuilder'
import NumberFunctionFilterBuilder from '~/api/shine/classes/NumberFunctionFilterBuilder'
import StringFilterBuilder from '~/api/shine/classes/StringFilterBuilder'
import StringFunctionFilterBuilder from '~/api/shine/classes/StringFunctionFilterBuilder'
import IModel from '~/api/shine/interfaces/IModel'
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
} & { $functions: StringFunctionFilterBuilder<Model> | NumberFunctionFilterBuilder<Model> | (StringFunctionFilterBuilder<Model> | NumberFunctionFilterBuilder<Model>)[] | (StringFunctionFilterBuilder<Model> | NumberFunctionFilterBuilder<Model>)[][] }>

export type Filter<Model extends IModel> = SimpleFilter<Model> | SimpleFilter<Model>[]
