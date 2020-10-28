import { diamond, equitriangle} from './pattern';
import hasPermission from './utils/permissions';

import { permissions, user } from './constants';
import validateUsers from './utils/validation';

diamond(5)
equitriangle(6)

const result: boolean = hasPermission('getUsers', 'trainer', 'read');
console.log(result);
validateUsers(user);