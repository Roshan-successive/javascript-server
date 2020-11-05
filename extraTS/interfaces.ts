export interface IUsers {
    traineeEmail: string;
    reviewerEmail: string;
}
type accesses = {
    all: string[];
    read: string[];
    write: string[];
    Delete: string[];
};

export interface IPermissions {
    getUsers: accesses;
    getUser1: accesses;
}