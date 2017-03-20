import * as mongoose from 'mongoose';

export interface IRating extends mongoose.Document {
  rating: number;
};

let RatingSchema = new mongoose.Schema({
  rating: {type: Number, min: 0, max: 10}
});

export const Rating = mongoose.model<IRating>('Rating', RatingSchema);
