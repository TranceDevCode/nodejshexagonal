import { v4 as uuidv4 } from 'uuid'
import User, { UserProperties } from './user';
import { UserPasswordService } from './services/user-password.services';

export default class UserFactory {

    async create(name: string, lastname: string, email: string, password: string,) {
        
        const passwordHash = await UserPasswordService.hash(password)

        const UserProperties: UserProperties = {
            name,
            lastname,
            email,
            password: passwordHash,
            guid: uuidv4(),
            refreshToken: uuidv4()
        }

        const user = new User(UserProperties)
        return user
    }
}