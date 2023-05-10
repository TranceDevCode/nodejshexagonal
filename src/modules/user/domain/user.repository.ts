import User, {UserProperties} from './user'

//Principio Solid: Inversion Dependency
export interface UserRepository{
    list(): Promise<User[]>
    listOne(guid:string):Promise< User>
    insert(user: User): Promise<UserProperties>
    update(user: User): Promise<User>
    delete(guid: string): Promise<User>

}