import * as mongoose from 'mongoose';
<<<<<<< HEAD

import IUserModel from './IUserModel';
import UserSchema from './UserSchema';

export const userSchema = new UserSchema({
    collection: 'user',
});

export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>
    (
        'User',
        userSchema,
        'User',
        true,
    );
=======
import UserSchema from './UserSchema';
import IUserModel from './IUserModel';

export const userSchema = new UserSchema({
collection: 'user',
});

export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>
(
'User',
userSchema,
'User',
true,
);
>>>>>>> 621498a891e1574640081f10acfa1e01bf2bf2a8
