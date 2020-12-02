import * as jwt from 'jsonwebtoken';
import { hasPermission }  from './Permission';
import IRequest from '../../IRequest';
import { Response , NextFunction } from 'express';
import configuration from '../../config/configuration';
import { user } from './Constants';

export const authMiddleWare = (module, permissionType) => (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token);
        const decorderUser = jwt.verify(token, configuration.KEY);
        req.userData = decorderUser;
        console.log('decorderUser' , decorderUser);
        if (hasPermission(module, decorderUser.role, permissionType)) {
            console.log('Has permission.');
        }
        else {
            throw new Error('');
        }
        return next();
    }
    catch (err) {
        console.log(err);
        res.send({
            error: 'Unauthorized',
            code: 403,
        });
    }
};