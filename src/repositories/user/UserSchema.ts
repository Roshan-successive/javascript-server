import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {

<<<<<<< HEAD
    constructor(collection) {
        const baseSchema = Object.assign({
            _id: String,
            name: String,
            email: String,
            role: String,
            password: String
        });
        super(baseSchema, collection);
    }
}

export default UserSchema;
=======
constructor(collections: any) {
const baseSchema = Object.assign({
id: String,
name: String,
role: String,
password: String,
});
super(baseSchema, collections);
}

}
export default UserSchema;
>>>>>>> 621498a891e1574640081f10acfa1e01bf2bf2a8
