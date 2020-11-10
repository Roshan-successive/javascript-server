import * as mongoose from 'mongoose';

export default interface IUserModel extends mongoose.Document {
<<<<<<< HEAD
    id: string;
    name: string;
    email: string;
    role: string;
    password: string;
=======
id: string;
name: string;
role: string;
password: string;
>>>>>>> 621498a891e1574640081f10acfa1e01bf2bf2a8
}