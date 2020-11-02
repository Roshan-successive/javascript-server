import { Router } from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { traineeRouter } from '.';
const traineeRoutes = Router();

traineeRoutes.route('/')
        .get( validationHandler( validation.get ) , TraineeController.get )
        .post( validationHandler( validation.create ) , TraineeController.post )
        .put( validationHandler( validation.update ) , TraineeController.put )
        .delete( validationHandler( validation.Delete ) , TraineeController.Delete );
        traineeRouter.route('/:id')

export default traineeRoutes;