import versionableSchema from '../versionable/VersionableSchema';
import * as mongoose from 'mongoose';
import { stringify } from 'querystring';
class UserSchema extends versionableSchema {

    constructor(collection: any) {
        const baseSchema = Object.assign({
            _id: String,
            id: String,
            name: String,
            email: String,
            role: String,
            password: String
        });
        super(baseSchema, collection);
    }
}


export default UserSchema;

export default UserSchema;

