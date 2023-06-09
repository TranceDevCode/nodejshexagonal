import { IEntity } from '../../shared/entity.interface'

// Principio SOLID: Interface segregation interface
interface UserRequired {
    name: string
    lastname: string
    email: string
    password: string
}

interface UserOptional {
    refreshToken: string
    active: boolean
    guid: string
}

interface UserUpdate {
    name: string
    lastname: string
    password: string
}

export type UserProperties = Required<UserRequired> & Partial<UserOptional>

export default class User implements IEntity<UserProperties, UserUpdate> {
     
    private name: string
    private lastname: string
    private readonly email: string
    private password: string
    private refreshToken: string
    private active: boolean
    private guid: string

    constructor(userProperties: UserProperties) {
        //
        this.active= true
        Object.assign(this, userProperties)
    }

    properties(): UserProperties {
        //
        return {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            refreshToken: this.refreshToken,
            active: this.active,
            guid: this.guid,
        }
    }

    update(fields: UserUpdate) {
        //
        Object.assign(this, fields)
    }

    //sof-delete
    delete() {
        this.active = false
    }


}