import * as mongoose from 'mongoose';
export default interface IVersionableDocumnet extends mongoose.Document {
    createdAt: Date;
    originalId: string;
    deletedAt: Date;
    updatedAt: Date;
    updatedBy: string;
    createdBy: string;
    deletedBy: string;
}