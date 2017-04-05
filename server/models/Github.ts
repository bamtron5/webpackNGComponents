import * as mongoose from 'mongoose';

let GithubSchema = new mongoose.Schema({}, { strict: false });

export const Github = mongoose.model('Github', GithubSchema);
