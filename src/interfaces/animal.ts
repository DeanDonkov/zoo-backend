// models/Animal.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface IAnimal extends Document {
  name: string;
  species: string;
  age: number;
}

const AnimalSchema: Schema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
});

export default mongoose.model<IAnimal>('Animal', AnimalSchema);
