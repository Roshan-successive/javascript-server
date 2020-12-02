import Server from './Server';
import config from './config/configuration';
// import { CONFIG_FILENAME } from 'tslint/lib/configuration';
console.log('config is', config);
const server = new Server({ PORT: config.port, MONGO_URL: config.mongourl });

server.bootstrap().run();
server.initSwagger();