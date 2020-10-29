export let users =
[
{
traineeEmail: 'trainee1successive.tech',
reviewerEmail: 'reviewer1@successive.tech',
},
{
traineeEmail: 'roshan.chaudhary@gmail.com',
reviewerEmail: 'risabh.singh@gmail.com',
}
]

export let permissions={
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    },
    'getUser': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }     
}