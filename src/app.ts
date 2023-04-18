/**
 * se debe instalar esta libreria @types/express para agregarle tipado fuerte a express
 */

import express, { Application } from 'express';
import routerHealth from './helpers/health';
import HandleError from './helpers/errors'

class App {
    readonly expressApp: Application

    constructor() {
        this.expressApp = express() //This.expressApp tiene todas las facultades de express
        this.mountHealtCheck()
        this.mountMiddlewares()
        this.mountError()
    }

    // Principio SOLID: Open/close
    mountHealtCheck() {
        this.expressApp.use('/', routerHealth)
    }
    mountMiddlewares() {
        //
        this.expressApp.use(express.json())
        this.expressApp.use(express.urlencoded({ extended: true})) //protege los datos que envias o llegan de las solicitudes, protege informacion que se pasa en json
    }

    mountError(): void
    {
        this.expressApp.use(HandleError.notFound)
    }
}

export default new App().expressApp