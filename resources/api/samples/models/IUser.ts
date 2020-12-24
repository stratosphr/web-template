import IPost from '~/api/samples/models/IPost'
import IModel from '~/api/shine/interface/IModel'

export default interface IUser extends IModel {
    name: string
    firstname: string
    age: number
    post: IPost
}
