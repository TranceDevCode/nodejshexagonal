import { DataSource } from 'typeorm';
import { Bootstrap } from './base.bootstrap';


let appDataSource: DataSource
export default class extends Bootstrap{
    //

    initialize(): Promise<DataSource> {
        //creamos un
        const AppDataSource = new DataSource({
            //Driver de conexion
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            //synchronize es una propiedad netamente de desarrollo, cada cambio que hago en la db se refleja inmediatamente
            synchronize: true,
            logging: true,
            //entities recibe las entidades de usuarios, medicos, profesor, como los modelos
            entities: [],
            migrations: [],
            subscribers: [], //Observables de procesos
        })

        appDataSource = AppDataSource

        return appDataSource.initialize()
    }

    //
    static get dataSource(): DataSource {
        return appDataSource
    }
}

