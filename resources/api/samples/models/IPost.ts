import IComment from '~/api/samples/models/IComment'
import IModel from '~/api/shine/interface/IModel'

export default interface IPost extends IModel {
    title: string
    content: string
    comments: IComment[]
}
