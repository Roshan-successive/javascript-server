import * as express from 'express';
import * as bodyparser from 'body-parser';
import {notFoundRoute , errorHandler} from './libs/routes';
import routes from './router';
class Server {

private app: any;
constructor(private config) {
this.app = express();
}
//public initBodyParser(){
  //  this.app.use(bodyparser.json());
//}
bootstrap() {
this.initBodyParser();
this.SetupRoutes();
return this;
}
SetupRoutes() {
//const {app} = this;
this.app.get('/health-check', (req, res, next) => {
res.send('i am ok');
});
this.app.use('/api', routes);

this.app.use(notFoundRoute);
        
this.app.use(errorHandler);

}
public initBodyParser(){
    this.app.use(bodyparser.json());
}
run() {
const {app, config: {PORT}} = this;
app.listen(PORT, (err) => {
if (err) {
console.log(err);
}
console.log(`App is running on port ${PORT}`);
// tslint:disable-next-line: semicolon
});
return this;
}
}
export default Server;

