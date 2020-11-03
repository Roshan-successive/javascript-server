"use strict";
exports.__esModule = true;
exports.user = exports.permissions = void 0;
exports.permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: []
    },
    'getUser1': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: ['trainee']
    }
};
exports.user = [{
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        traineeEmail: 'rishabh@gmail.com',
        reviewerEmail: 'roshan@gmail.com'
    }];
