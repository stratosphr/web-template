import IPost from '~/api/samples/models/IPost'
import IModel from '~/api/shine/interface/IModel'

export default interface IComment extends IModel {
    post: IPost
    title: string
    content: string
    likes: number
    dislikes: number
}
