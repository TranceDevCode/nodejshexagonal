import ServerBootstrap from './bootstrap/server.bootstrap';
import { Bootstrap } from './bootstrap/base.bootstrap';
import DatabaseBootstrap from './bootstrap/database.bootstrap';
import Application from './app';

const serverBootstrap: Bootstrap = new ServerBootstrap(Application)
const databaseBootstrap: Bootstrap = new DatabaseBootstrap()


;(async () => {
  try {
    await serverBootstrap.initialize()
    await databaseBootstrap.initialize()
    console.log('Server started successfully')
  } catch (e) {
    console.log(e)
  }
})()
