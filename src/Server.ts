import * as express from 'express';
import * as bodyparser from 'body-parser';

import { notFoundRoute, errorHandler } from './libs/routes';
// import mainRouter from './router';
import database from './libs/Database';
import {traineeRouter} from './controllers/trainee';
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
    this.app.use('/api', traineeRouter);

    this.app.use(notFoundRoute);

    this.app.use(errorHandler);

  }
  public initBodyParser() {
    this.app.use(bodyparser.json());
  }
  run() {
    const { app, config: { PORT } } = this;
    database.open('mongodb://localhost:27017/express-training')
    .then((res) => {
    console.log('Succesfully connected to Mongo');
    app.listen( PORT, (err) => {
    if (err) {
    console.log(err);
    }
    else {
    console.log(`App is running on port ${process.env.PORT}`);
    //Database.disconnect();
    }
    });
    })
    .catch(err => console.log(err));
    return this;
    }

import {notFoundRoute , errorHandler} from './libs/routes';

import Database from './libs/Database';
import { traineeRouter } from './controllers/trainee'
class Server {


import routes from './router';

import mainRouter from './router';

class Server {
app
constructor(private config) {
this.app = express();
}
public initBodyParser(){
    this.app.use(bodyparser.json());
}
bootstrap() {
this.initBodyParser();
this.SetupRoutes();
return this;
}
SetupRoutes() {
//const {app} = this;

this.app.get('/health-check', (req, res, next) => {
    res.send('i am ok');
    next()
});

this.app.use('/api', traineeRouter );


this.app.use('/api', routes);

this.app.use('/api',mainRouter);



this.app.use(notFoundRoute);

this.app.use(errorHandler);
return this;


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
  

const {app, config: {PORT}} = this;
app.listen(PORT, (err) => {
if (err) {
console.log(err);
}
console.log(`App is running on port ${PORT}`);
// tslint:disable-next-line: semicolon
});
}


}
export default Server;

