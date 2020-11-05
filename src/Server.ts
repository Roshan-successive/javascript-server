import * as express from 'express';
import * as bodyparser from 'body-parser';
import {notFoundRoute , errorHandler} from './libs/routes';
import Database from './libs/Database';
import { traineeRouter } from './controllers/trainee'
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
this.app.use('/api', traineeRouter );

this.app.use(notFoundRoute);
        
this.app.use(errorHandler);
return this;

}
public initBodyParser(){
    this.app.use(bodyparser.json());
}
run() {
  const { app, config: { PORT } } = this;
  Database.open('mongodb://localhost:27017/express-training')
  .then((res) => {
  console.log('Succesfully connected to Mongo');
  app.listen(PORT, (err) => {
  if (err) {
  console.log(err);
  }
  else {
  console.log(`App is running on port ${PORT}`);
  Database.disconnect();
  }
  });
  })
  .catch(err => console.log(err));
  return this;
  }
  
}
export default Server;

