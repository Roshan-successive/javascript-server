import * as express from 'express';
import UserController from './controller';
import { Router } from  'express';
import validation from './validation';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';
import { permissions , user } from '../../libs/routes/Constants';
import { validationHandler }  from '../../libs/routes/validationHandler';
const UserRouter = Router();

UserRouter.get('/get', authMiddleWare('getUsers', 'read'), validationHandler(validation.get),
    UserController.get , authMiddleWare('getUsers', 'read'));

UserRouter.post('/create', authMiddleWare('getUsers', 'read'), validationHandler(validation.create),
    UserController.create);
UserRouter.put('/update', authMiddleWare('getUsers', 'read'), validationHandler(validation.update),
    UserController.update);
UserRouter.delete('/:id', authMiddleWare('getUser1', 'Delete'), validationHandler(validation.delete),
    UserController.remove);
UserRouter.post('/login', validationHandler(validation.login), UserController.login);
UserRouter.get('/me', authMiddleWare('getUsers', 'read'), UserController.me);



export default UserRouter;