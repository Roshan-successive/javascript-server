import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import Database from './libs/Database';
import mainRouter from './router';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';

class Server {
  app;
  constructor(private config) {
    this.app = express();

  }
  public initBodyParser() {
    this.app.use(bodyparser.json());
  }

  bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  initSwagger = () => {
    const options = {
        definition: {
            info: {
                openapi: '3.0.0',
                description: 'An express app performing CRUD operation after authentication',
                version: '1.0.0',
                title: 'First express app',
                properties: {
                    email: 'shashank.baranawal@successive.tech'
                },
            },
            securityDefinitions: {
                Bearer: {
                    type: 'apiKey',
                    name: 'Authorization',
                    in: 'headers'
                }
            }
        },
        basePath: '/api',
        swagger: '4.1',
        apis: ['./src/controllers/**/routes.ts'],
    };
    const swaggerSpec = swaggerJsDoc(options);
    return swaggerSpec;
  }

  public setupRoutes() {
    const { app } = this;
    this.app.use('/health-check', (req, res, next) => {
      res.send('I am Ok');
      next();
    });
    this.app.use('/api', mainRouter);
    app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
    return this;
  }
  run() {
    const { app, config: { PORT, MONGO_URL } } = this;
    Database.open(MONGO_URL)
      .then((res) => {
        console.log('successfully connected to mongo');

        app.listen(PORT, (err) => {
          if (err) {
            console.log(err);
          }
          console.log(`App is running on port ${PORT}`);
        });
      })
      .catch(err => console.log(err));

  }


}
export default Server;