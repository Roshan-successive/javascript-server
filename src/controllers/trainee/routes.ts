import * as express from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/validationHandler';
import config from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import {permissions,user} from '../../libs/routes/Constants';
const traineeRoutes = express.Router();

traineeRoutes.route('/trainee')
        .get(authMiddleWare(permissions.getUsers,'read'),validationHandler( config.get ) , TraineeController.get )
        .post( authMiddleWare(permissions.getUser,'write'),validationHandler( config.create ) , TraineeController.post )
        .put( authMiddleWare(permissions.getUser,'all'),validationHandler( config.update ) , TraineeController.put )
        .delete(authMiddleWare(permissions.getUser,'Delete'), validationHandler( config.Delete ) , TraineeController.Delete );

import { Router } from 'express';

import traineeController from './controller';

import validationHandler from '../../libs/routes/validationHandler';
import validation from './validation';
const traineeRouter = Router();


traineeRouter.route('/')
    .get(validationHandler(validation.get),traineeController.get)
    .post(validationHandler(validation.create),traineeController.create)
    .put(validationHandler(validation.update),traineeController.update)
    .delete(validationHandler(validation.Delete),traineeController.delete)
    traineeRouter.route('/:id')
    .delete(validationHandler(validation.Delete),traineeController.delete)
export default traineeRouter;
