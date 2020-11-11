import Server from './Server';
import config from './config/configuration';
//import { CONFIG_FILENAME } from 'tslint/lib/configuration';
console.log('config is', config);
const server = new Server({ PORT: config.PORT, MONGO_URL: config.MONGO_URL });

server.bootstrap().run();