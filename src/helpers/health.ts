import { Router, Request, Response } from 'express'; /* traigo mis rutas de express */

class RouterHealth {
    readonly expressRouter: Router

    constructor() {
        this.expressRouter = Router()
        this.mountRoutes()
    }

    mountRoutes(){
        /**Pasamos el contexto de los manejadores */
        this.expressRouter.get('/', (_req: Request, res: Response ) => res.send('All is Ok')) 
    }
}

export default new RouterHealth().expressRouter

// req.params || req.query (Vienen en formato json)
// req.headers
// req.body (No viene en formato json)