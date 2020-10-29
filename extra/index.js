import { diamond, equitriangle} from './patterns';
import {hasPermission,validateUsers} from './utils';
import {permissions , users} from '../constants';

diamond(5)
equitriangle(6)

let result = hasPermission(permissions.getUsers,'head-trainer','Delete');
console.log(result);

validateUsers(users);