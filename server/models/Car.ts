import * as express from 'express';
import * as mongoose from 'mongoose';

export interface ICar extends mongoose.Document {
  name: string;
  price: number;
  condition: string;
};

let CarSchema = new mongoose.Schema({
  name: String,
  price: Number,
  condition: String
});

export const Car = mongoose.model<ICar>('Car', CarSchema);
