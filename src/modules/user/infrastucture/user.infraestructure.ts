import User from '../domain/user';
import { UserRepository } from '../domain/user.repository';
import { EmailVO } from '../domain/value-objects/email.VO';
import { UserEntity } from './user.entity';
import DatabaseBootstrap from 'src/bootstrap/database.bootstrap';

export default class UserInfraestructure implements UserRepository {
    async insert(user: User): Promise<User> {        
        const userInsert = new UserEntity()
        const { name, lastname, email, password, refreshToken, active, guid } = user.properties()
        Object.assign(userInsert, {
            name,
            lastname,
            email: email.value,
            password,
            refreshToken,
            active,
            guid,
        })
        await DatabaseBootstrap.dataSource.getRepository(UserEntity).save(userInsert)
    }

    async list(): Promise<User[]> {
        const repo = DatabaseBootstrap.dataSource.getRepository(UserEntity)
        const result = await repo.find({ where: {active: true } })

        return result.map((el: UserEntity) => {
            const emailResult = EmailVO.create(el.email)

            // pendiente neverthow

            return new User({
                guid: el.guid,
                name: el.name,
                lastname: el.lastname,
                email: emailResult.value,
                password: el.password,
                refreshToken: el.refreskToken,
                active: el.active

            })
        })
    }
        
    listOne(guid:string):Promise< User> {
        throw new Error('Method not implemented');
    }   
        
    update(user: User): Promise<User> {
        throw new Error('Method not implemented');
    }
        
    delete(guid: string): Promise<User> {
        throw new Error('Method not implemented');
    }
        
}