import {permissions} from "./Constants";
const {getUsers}= permissions;
export default function hasPermission(moduleName,role,permissionType)
{
const {all}=moduleName;
return all.includes(role) || moduleName[permissionType].includes(role);
}