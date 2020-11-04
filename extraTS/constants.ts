import {IPermissions, IUsers} from './interfaces';
export let permissions: IPermissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    Delete: [],
    },
    'getUser1': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: ['trainee'],
        }
    };
    export const user: IUsers[] = [{
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        }, 
        {
            traineeEmail: 'rishabh@gmail.com',
            reviewerEmail: 'roshan@gmail.com',
            }];
